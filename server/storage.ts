import { 
  users, 
  companies, 
  categories, 
  companyCategories,
  type User, 
  type InsertUser,
  type Company,
  type InsertCompany,
  type Category,
  type InsertCategory,
  type CompanyCategory,
  type InsertCompanyCategory,
  type CompanyWithCategories,
  type CategoryWithCompanies,
  type FilterState
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Company management
  getCompany(id: number): Promise<Company | undefined>;
  getCompanyByName(name: string): Promise<Company | undefined>;
  getAllCompanies(): Promise<Company[]>;
  getCompanyWithCategories(id: number): Promise<CompanyWithCategories | undefined>;
  createCompany(company: InsertCompany): Promise<Company>;
  updateCompany(id: number, updates: Partial<InsertCompany>): Promise<Company>;
  
  // Category management
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryByName(name: string): Promise<Category | undefined>;
  getAllCategories(): Promise<Category[]>;
  getCategoryWithCompanies(id: number): Promise<CategoryWithCompanies | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Company-Category relationships
  getCompanyCategory(companyId: number, categoryId: number): Promise<CompanyCategory | undefined>;
  createCompanyCategory(companyCategory: InsertCompanyCategory): Promise<CompanyCategory>;
  getCompaniesByCategory(categoryId: number): Promise<Array<{ company: Company; rank: number; reasoning?: string; sourceLinks: string[] }>>;
  
  // Search and filtering
  searchCompanies(filters: FilterState): Promise<Company[]>;
  getCompaniesWithFilters(filters: FilterState): Promise<CompanyWithCategories[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private companies: Map<number, Company>;
  private categories: Map<number, Category>;
  private companyCategories: Map<string, CompanyCategory>;
  private currentUserId: number;
  private currentCompanyId: number;
  private currentCategoryId: number;
  private currentCompanyCategoryId: number;

  constructor() {
    this.users = new Map();
    this.companies = new Map();
    this.categories = new Map();
    this.companyCategories = new Map();
    this.currentUserId = 1;
    this.currentCompanyId = 1;
    this.currentCategoryId = 1;
    this.currentCompanyCategoryId = 1;
    
    // Initialize with default data
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const categoryData = [
      { name: "Patient Access and Intake", parentCategory: null, description: "Patient registration, eligibility verification, and intake processes", sortOrder: 1 },
      { name: "Eligibility & Verification", parentCategory: "Patient Access and Intake", description: "Automated eligibility and benefits verification", sortOrder: 1 },
      { name: "Prior Authorization", parentCategory: "Patient Access and Intake", description: "Prior authorization processes for providers and payers", sortOrder: 2 },
      { name: "Clinical Documentation", parentCategory: null, description: "AI-powered clinical documentation and scribing", sortOrder: 2 },
      { name: "Ambient AI Scribing", parentCategory: "Clinical Documentation", description: "Real-time AI scribing during patient encounters", sortOrder: 1 },
      { name: "CDI Prompt & Query", parentCategory: "Clinical Documentation", description: "Clinical Documentation Integrity tools", sortOrder: 2 },
      { name: "Coding & Charge Capture", parentCategory: null, description: "Medical coding and charge capture automation", sortOrder: 3 },
      { name: "AI Coding (Autonomous)", parentCategory: "Coding & Charge Capture", description: "Fully autonomous medical coding", sortOrder: 1 },
      { name: "Coding Validation", parentCategory: "Coding & Charge Capture", description: "AI-powered coding validation and quality assurance", sortOrder: 2 },
      { name: "Charge Capture", parentCategory: "Coding & Charge Capture", description: "Automated charge capture processes", sortOrder: 3 },
      { name: "Claims Management", parentCategory: null, description: "Claims processing and management", sortOrder: 4 },
      { name: "Claims Scrubbing & Edits", parentCategory: "Claims Management", description: "Automated claims scrubbing and error correction", sortOrder: 1 },
      { name: "First-Pass Error Resolution", parentCategory: "Claims Management", description: "First-pass claim error resolution", sortOrder: 2 },
      { name: "Denials Management", parentCategory: null, description: "Denial prevention and resolution", sortOrder: 5 },
      { name: "Denial Triage & Categorization", parentCategory: "Denials Management", description: "Automated denial triage and categorization", sortOrder: 1 },
      { name: "Appeals Management", parentCategory: "Denials Management", description: "Automated appeals processing", sortOrder: 2 },
      { name: "Root Cause Analysis", parentCategory: "Denials Management", description: "Root cause analysis and feedback", sortOrder: 3 },
      { name: "Patient Billing & Collections", parentCategory: null, description: "Patient billing and payment collection", sortOrder: 6 },
      { name: "Digital Billing & Reminders", parentCategory: "Patient Billing & Collections", description: "Digital billing and payment reminders", sortOrder: 1 },
      { name: "Accounts Receivable", parentCategory: "Patient Billing & Collections", description: "AR management and collections", sortOrder: 2 },
    ];

    categoryData.forEach((cat, index) => {
      const category: Category = {
        id: index + 1,
        name: cat.name,
        parentCategory: cat.parentCategory,
        description: cat.description,
        sortOrder: cat.sortOrder
      };
      this.categories.set(category.id, category);
    });

    this.currentCategoryId = categoryData.length + 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCompany(id: number): Promise<Company | undefined> {
    return this.companies.get(id);
  }

  async getCompanyByName(name: string): Promise<Company | undefined> {
    return Array.from(this.companies.values()).find(company => company.name === name);
  }

  async getAllCompanies(): Promise<Company[]> {
    return Array.from(this.companies.values());
  }

  async getCompanyWithCategories(id: number): Promise<CompanyWithCategories | undefined> {
    const company = this.companies.get(id);
    if (!company) return undefined;

    const categoryRankings: Array<{
      categoryName: string;
      rank: number;
      reasoning?: string;
      sourceLinks: string[];
    }> = [];

    for (const [key, companyCategory] of this.companyCategories) {
      if (companyCategory.companyId === id) {
        const category = this.categories.get(companyCategory.categoryId);
        if (category) {
          categoryRankings.push({
            categoryName: category.name,
            rank: companyCategory.rank,
            reasoning: companyCategory.reasoning,
            sourceLinks: companyCategory.sourceLinks
          });
        }
      }
    }

    return {
      ...company,
      categoryRankings
    };
  }

  async createCompany(insertCompany: InsertCompany): Promise<Company> {
    const id = this.currentCompanyId++;
    const company: Company = { ...insertCompany, id };
    this.companies.set(id, company);
    return company;
  }

  async updateCompany(id: number, updates: Partial<InsertCompany>): Promise<Company> {
    const company = this.companies.get(id);
    if (!company) throw new Error(`Company with id ${id} not found`);
    
    const updatedCompany = { ...company, ...updates };
    this.companies.set(id, updatedCompany);
    return updatedCompany;
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryByName(name: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(category => category.name === name);
  }

  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryWithCompanies(id: number): Promise<CategoryWithCompanies | undefined> {
    const category = this.categories.get(id);
    if (!category) return undefined;

    const companies: Array<{
      company: Company;
      rank: number;
      reasoning?: string;
      sourceLinks: string[];
    }> = [];

    for (const [key, companyCategory] of this.companyCategories) {
      if (companyCategory.categoryId === id) {
        const company = this.companies.get(companyCategory.companyId);
        if (company) {
          companies.push({
            company,
            rank: companyCategory.rank,
            reasoning: companyCategory.reasoning,
            sourceLinks: companyCategory.sourceLinks
          });
        }
      }
    }

    return {
      ...category,
      companies
    };
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async getCompanyCategory(companyId: number, categoryId: number): Promise<CompanyCategory | undefined> {
    const key = `${companyId}-${categoryId}`;
    return this.companyCategories.get(key);
  }

  async createCompanyCategory(insertCompanyCategory: InsertCompanyCategory): Promise<CompanyCategory> {
    const id = this.currentCompanyCategoryId++;
    const companyCategory: CompanyCategory = { ...insertCompanyCategory, id };
    const key = `${companyCategory.companyId}-${companyCategory.categoryId}`;
    this.companyCategories.set(key, companyCategory);
    return companyCategory;
  }

  async getCompaniesByCategory(categoryId: number): Promise<Array<{ company: Company; rank: number; reasoning?: string; sourceLinks: string[] }>> {
    const results: Array<{ company: Company; rank: number; reasoning?: string; sourceLinks: string[] }> = [];
    
    for (const [key, companyCategory] of this.companyCategories) {
      if (companyCategory.categoryId === categoryId) {
        const company = this.companies.get(companyCategory.companyId);
        if (company) {
          results.push({
            company,
            rank: companyCategory.rank,
            reasoning: companyCategory.reasoning,
            sourceLinks: companyCategory.sourceLinks
          });
        }
      }
    }
    
    return results.sort((a, b) => b.rank - a.rank);
  }

  async searchCompanies(filters: FilterState): Promise<Company[]> {
    let results = Array.from(this.companies.values());

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      results = results.filter(company => 
        company.name.toLowerCase().includes(searchLower) ||
        company.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by funding stages
    if (filters.selectedFundingStages.length > 0) {
      results = results.filter(company => 
        company.fundingStage && filters.selectedFundingStages.includes(company.fundingStage)
      );
    }

    return results;
  }

  async getCompaniesWithFilters(filters: FilterState): Promise<CompanyWithCategories[]> {
    const companies = await this.searchCompanies(filters);
    const companiesWithCategories: CompanyWithCategories[] = [];

    for (const company of companies) {
      const withCategories = await this.getCompanyWithCategories(company.id);
      if (withCategories) {
        // Filter by categories if specified
        if (filters.selectedCategories.length > 0) {
          const hasMatchingCategory = withCategories.categoryRankings.some(ranking => 
            filters.selectedCategories.includes(ranking.categoryName)
          );
          if (!hasMatchingCategory) continue;
        }

        // Filter by ranks if specified
        if (filters.selectedRanks.length > 0) {
          const hasMatchingRank = withCategories.categoryRankings.some(ranking => 
            filters.selectedRanks.includes(ranking.rank)
          );
          if (!hasMatchingRank) continue;
        }

        companiesWithCategories.push(withCategories);
      }
    }

    return companiesWithCategories;
  }
}

export const storage = new MemStorage();
