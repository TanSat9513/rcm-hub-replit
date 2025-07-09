import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCompanySchema, insertCategorySchema, insertCompanyCategorySchema } from "@shared/schema";
import { z } from "zod";

const filterSchema = z.object({
  searchTerm: z.string().optional().default(""),
  selectedCategories: z.array(z.string()).optional().default([]),
  selectedRanks: z.array(z.number()).optional().default([]),
  selectedFundingStages: z.array(z.string()).optional().default([])
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Company routes
  app.get("/api/companies", async (req, res) => {
    try {
      const companies = await storage.getAllCompanies();
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch companies" });
    }
  });

  app.get("/api/companies/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const company = await storage.getCompanyWithCategories(id);
      
      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }
      
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch company" });
    }
  });

  app.post("/api/companies", async (req, res) => {
    try {
      const validatedData = insertCompanySchema.parse(req.body);
      const company = await storage.createCompany(validatedData);
      res.status(201).json(company);
    } catch (error) {
      res.status(400).json({ error: "Invalid company data" });
    }
  });

  app.put("/api/companies/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertCompanySchema.partial().parse(req.body);
      const company = await storage.updateCompany(id, validatedData);
      res.json(company);
    } catch (error) {
      res.status(400).json({ error: "Failed to update company" });
    }
  });

  // Category routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.getCategoryWithCompanies(id);
      
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch category" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ error: "Invalid category data" });
    }
  });

  // Company-Category relationship routes
  app.post("/api/company-categories", async (req, res) => {
    try {
      const validatedData = insertCompanyCategorySchema.parse(req.body);
      const companyCategory = await storage.createCompanyCategory(validatedData);
      res.status(201).json(companyCategory);
    } catch (error) {
      res.status(400).json({ error: "Invalid company-category data" });
    }
  });

  app.get("/api/categories/:id/companies", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const companies = await storage.getCompaniesByCategory(id);
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch companies for category" });
    }
  });

  // Search and filtering
  app.post("/api/companies/search", async (req, res) => {
    try {
      const filters = filterSchema.parse(req.body);
      const companies = await storage.getCompaniesWithFilters(filters);
      res.json(companies);
    } catch (error) {
      res.status(400).json({ error: "Invalid filter parameters" });
    }
  });

  // PDF export endpoint
  app.post("/api/export/pdf", async (req, res) => {
    try {
      const { companyIds, categoryIds } = req.body;
      
      // TODO: Implement PDF generation
      // For now, return success response
      res.json({ 
        success: true, 
        message: "PDF export functionality would be implemented here",
        downloadUrl: "/api/export/download/sample.pdf" 
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to export PDF" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
