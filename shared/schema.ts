import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  website: text("website"),
  founded: text("founded"),
  fundingStage: text("funding_stage"),
  totalFunding: text("total_funding"),
  keyMetrics: jsonb("key_metrics").$type<string[]>().notNull().default([]),
  categories: jsonb("categories").$type<CompanyCategory[]>().notNull().default([]),
  reasoning: text("reasoning"),
  sourceLinks: jsonb("source_links").$type<string[]>().notNull().default([]),
  isAiNative: boolean("is_ai_native").notNull().default(false),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  parentCategory: text("parent_category"),
  description: text("description"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const companyCategories = pgTable("company_categories", {
  id: serial("id").primaryKey(),
  companyId: integer("company_id").notNull(),
  categoryId: integer("category_id").notNull(),
  rank: integer("rank").notNull(), // 1=Low, 2=Medium, 3=High
  reasoning: text("reasoning"),
  sourceLinks: jsonb("source_links").$type<string[]>().notNull().default([]),
});

// Zod schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCompanySchema = createInsertSchema(companies).pick({
  name: true,
  description: true,
  website: true,
  founded: true,
  fundingStage: true,
  totalFunding: true,
  keyMetrics: true,
  categories: true,
  reasoning: true,
  sourceLinks: true,
  isAiNative: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  parentCategory: true,
  description: true,
  sortOrder: true,
});

export const insertCompanyCategorySchema = createInsertSchema(companyCategories).pick({
  companyId: true,
  categoryId: true,
  rank: true,
  reasoning: true,
  sourceLinks: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Company = typeof companies.$inferSelect;
export type InsertCompany = z.infer<typeof insertCompanySchema>;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export type CompanyCategory = typeof companyCategories.$inferSelect;
export type InsertCompanyCategory = z.infer<typeof insertCompanyCategorySchema>;

// Helper types
export interface CompanyWithCategories extends Company {
  categoryRankings: Array<{
    categoryName: string;
    rank: number;
    reasoning?: string;
    sourceLinks: string[];
  }>;
}

export interface CategoryWithCompanies extends Category {
  companies: Array<{
    company: Company;
    rank: number;
    reasoning?: string;
    sourceLinks: string[];
  }>;
}

export interface FilterState {
  searchTerm: string;
  selectedCategories: string[];
  selectedRanks: number[];
  selectedFundingStages: string[];
}
