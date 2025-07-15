export interface CategoryInfo {
  id: string;
  name: string;
  parentCategory?: string;
  description: string;
  sortOrder: number;
  subcategories?: CategoryInfo[];
}

export const categoriesData: CategoryInfo[] = [
  {
    id: "patient-access",
    name: "Patient Access and Intake",
    description: "Patient registration, eligibility verification, and intake processes",
    sortOrder: 1,
    subcategories: [
      {
        id: "eligibility-verification",
        name: "Eligibility & Verification",
        parentCategory: "Patient Access and Intake",
        description: "Automated eligibility and benefits verification",
        sortOrder: 1
      },
      {
        id: "prior-authorization",
        name: "Prior Authorization",
        parentCategory: "Patient Access and Intake",
        description: "Prior authorization processes for providers and payers",
        sortOrder: 2
      }
    ]
  },
  {
    id: "clinical-documentation",
    name: "Clinical Documentation",
    description: "AI-powered clinical documentation and scribing",
    sortOrder: 2,
    subcategories: [
      {
        id: "ambient-scribing",
        name: "Ambient AI Scribing",
        parentCategory: "Clinical Documentation",
        description: "Real-time AI scribing during patient encounters",
        sortOrder: 1
      },
      {
        id: "cdi-prompt",
        name: "CDI Prompt & Query",
        parentCategory: "Clinical Documentation",
        description: "Clinical Documentation Integrity tools",
        sortOrder: 2
      },
      {
        id: "workflow-alignment",
        name: "Workflow Alignment",
        parentCategory: "Clinical Documentation",
        description: "AI-powered workflow optimization and alignment",
        sortOrder: 3
      }
    ]
  },
  {
    id: "coding-charge",
    name: "Coding & Charge Capture",
    description: "Medical coding and charge capture automation",
    sortOrder: 3,
    subcategories: [
      {
        id: "ai-coding",
        name: "AI Coding (Autonomous)",
        parentCategory: "Coding & Charge Capture",
        description: "Fully autonomous medical coding",
        sortOrder: 1
      },
      {
        id: "coding-validation",
        name: "Coding Validation",
        parentCategory: "Coding & Charge Capture",
        description: "AI-powered coding validation and quality assurance",
        sortOrder: 2
      },
      {
        id: "charge-capture",
        name: "Charge Capture",
        parentCategory: "Coding & Charge Capture",
        description: "Automated charge capture processes",
        sortOrder: 3
      }
    ]
  },
  {
    id: "claims-management",
    name: "Claims Management",
    description: "Claims processing and management",
    sortOrder: 4,
    subcategories: [
      {
        id: "claims-scrubbing",
        name: "Claims Scrubbing & Edits",
        parentCategory: "Claims Management",
        description: "Automated claims scrubbing and error correction",
        sortOrder: 1
      },
      {
        id: "first-pass",
        name: "First-Pass Error Resolution",
        parentCategory: "Claims Management",
        description: "First-pass claim error resolution",
        sortOrder: 2
      }
    ]
  },
  {
    id: "denials-management",
    name: "Denials Management",
    description: "Denial prevention and resolution",
    sortOrder: 5,
    subcategories: [
      {
        id: "denial-triage",
        name: "Denial Triage & Categorization",
        parentCategory: "Denials Management",
        description: "Automated denial triage and categorization",
        sortOrder: 1
      },
      {
        id: "appeals-management",
        name: "Appeals Management",
        parentCategory: "Denials Management",
        description: "Automated appeals processing",
        sortOrder: 2
      }
    ]
  },
  {
    id: "payment-processing",
    name: "Payment Processing and Reconciliation",
    description: "Payment processing and reconciliation automation",
    sortOrder: 6,
    subcategories: [
      {
        id: "era-eft",
        name: "ERA/EFT Posting Automation",
        parentCategory: "Payment Processing and Reconciliation",
        description: "Automated ERA/EFT posting and reconciliation",
        sortOrder: 1
      },
      {
        id: "payment-reconciliation",
        name: "Payment Reconciliation",
        parentCategory: "Payment Processing and Reconciliation",
        description: "Payment reconciliation and underpayment detection",
        sortOrder: 2
      }
    ]
  },
  {
    id: "patient-billing",
    name: "Patient Billing & Collections",
    description: "Patient billing and payment collection",
    sortOrder: 7,
    subcategories: [
      {
        id: "digital-billing",
        name: "Digital Billing & Reminders",
        parentCategory: "Patient Billing & Collections",
        description: "Digital billing and payment reminders",
        sortOrder: 1
      },
      {
        id: "accounts-receivable",
        name: "Accounts Receivable",
        parentCategory: "Patient Billing & Collections",
        description: "AR management and collections",
        sortOrder: 2
      }
    ]
  }
];

// Helper functions
export function getCategoryById(id: string): CategoryInfo | undefined {
  const findCategory = (categories: CategoryInfo[]): CategoryInfo | undefined => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.subcategories) {
        const found = findCategory(category.subcategories);
        if (found) return found;
      }
    }
    return undefined;
  };
  
  return findCategory(categoriesData);
}

export function getAllSubcategories(): CategoryInfo[] {
  const subcategories: CategoryInfo[] = [];
  
  const extractSubcategories = (categories: CategoryInfo[]) => {
    for (const category of categories) {
      if (category.subcategories) {
        subcategories.push(...category.subcategories);
        extractSubcategories(category.subcategories);
      }
    }
  };
  
  extractSubcategories(categoriesData);
  return subcategories;
}

export function getMainCategories(): CategoryInfo[] {
  return categoriesData.filter(category => !category.parentCategory);
}

export function getRankColor(rank: number): string {
  switch (rank) {
    case 3: return "bg-green-500"; // High
    case 2: return "bg-orange-500"; // Medium
    case 1: return "bg-red-500"; // Low
    default: return "bg-gray-400";
  }
}

export function getRankLabel(rank: number): string {
  switch (rank) {
    case 3: return "High";
    case 2: return "Medium";
    case 1: return "Low";
    default: return "Unknown";
  }
}
