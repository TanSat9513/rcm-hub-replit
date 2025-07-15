import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CompanyCard } from "./CompanyCard";
import type { CompanyWithCategories } from "@shared/schema";
import type { CategoryInfo } from "@/data/categories";

interface CategorySectionProps {
  category: CategoryInfo;
  companies: CompanyWithCategories[];
  onCompanyClick: (company: CompanyWithCategories) => void;
  selectedCategories?: string[];
}

export function CategorySection({ category, companies, onCompanyClick, selectedCategories = [] }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Filter companies that have rankings in this category or its subcategories
  const relevantCompanies = companies.filter(company => {
    const categoryNames = [category.name];
    if (category.subcategories) {
      categoryNames.push(...category.subcategories.map(sub => sub.name));
    }

    return company.categoryRankings.some(ranking => 
      categoryNames.includes(ranking.categoryName)
    );
  });

  // Group companies by subcategory
  const companiesBySubcategory = category.subcategories?.reduce((acc, subcategory) => {
    const subcategoryCompanies = relevantCompanies.filter(company =>
      company.categoryRankings.some(ranking => ranking.categoryName === subcategory.name)
    );
    if (subcategoryCompanies.length > 0) {
      acc[subcategory.name] = subcategoryCompanies;
    }
    return acc;
  }, {} as Record<string, CompanyWithCategories[]>) || {};

  const sectionVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };

  if (relevantCompanies.length === 0) {
    return null;
  }

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <Button
          variant="ghost"
          className="w-full px-2 py-4 flex items-center justify-between hover:bg-transparent min-h-[90px]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text-left flex-1 pr-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {relevantCompanies.length} companies
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </Button>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={sectionVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CardContent className="pt-0">
              {category.subcategories ? (
                <div className="space-y-6">
                  {category.subcategories
                    .filter(subcategory => {
                      // If categories are filtered, only show selected subcategories
                      if (selectedCategories.length > 0) {
                        return selectedCategories.includes(subcategory.name);
                      }
                      return true;
                    })
                    .map((subcategory) => {
                      const subcategoryCompanies = companiesBySubcategory[subcategory.name];
                      if (!subcategoryCompanies || subcategoryCompanies.length === 0) {
                        return null;
                      }

                      return (
                        <SubcategorySection
                          key={subcategory.id}
                          subcategory={subcategory}
                          companies={subcategoryCompanies}
                          onCompanyClick={onCompanyClick}
                        />
                      );
                    })}
                </div>
              ) : (
                // Render companies directly if no subcategories
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {relevantCompanies.map((company) => (
                    <CompanyCard
                      key={company.id}
                      company={company}
                      onClick={() => onCompanyClick(company)}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

interface SubcategorySectionProps {
  subcategory: CategoryInfo;
  companies: CompanyWithCategories[];
  onCompanyClick: (company: CompanyWithCategories) => void;
}

function SubcategorySection({ subcategory, companies, onCompanyClick }: SubcategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const sectionVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      <Button
        variant="ghost"
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 rounded-lg min-h-[80px]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-left flex-1 pr-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{subcategory.name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{subcategory.description}</p>
        </div>
        <div className="flex items-center space-x-3 flex-shrink-0">
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {companies.length} companies
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={sectionVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-200"
          >
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {companies
                  .sort((a, b) => {
                    // Sort by rank (highest first)
                    const aRank = a.categoryRankings.find(r => r.categoryName === subcategory.name)?.rank || 0;
                    const bRank = b.categoryRankings.find(r => r.categoryName === subcategory.name)?.rank || 0;
                    return bRank - aRank;
                  })
                  .map((company) => (
                    <CompanyCard
                      key={company.id}
                      company={company}
                      onClick={() => onCompanyClick(company)}
                    />
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}