import { useState, useMemo } from "react";
import { BarChart3, FileText, Download, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { Legend } from "@/components/Legend";
import { CategorySection } from "@/components/CategorySection";
import { CompanyModal } from "@/components/CompanyModal";
import { companiesData } from "@/data/companies";
import { categoriesData } from "@/data/categories";
import { exportToPDF } from "@/utils/pdfExport";
import type { CompanyWithCategories, FilterState } from "@shared/schema";

export default function Home() {
  const { toast } = useToast();
  const [selectedCompany, setSelectedCompany] = useState<CompanyWithCategories | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: "",
    selectedCategories: [],
    selectedRanks: [],
    selectedFundingStages: []
  });

  // Filter companies based on current filters
  const filteredCompanies = useMemo(() => {
    let result = companiesData;

    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(company => 
        company.name.toLowerCase().includes(searchLower) ||
        company.description.toLowerCase().includes(searchLower) ||
        company.keyMetrics.some(metric => metric.toLowerCase().includes(searchLower))
      );
    }

    // Category filter
    if (filters.selectedCategories.length > 0) {
      result = result.filter(company =>
        company.categoryRankings.some(ranking =>
          filters.selectedCategories.includes(ranking.categoryName)
        )
      );
    }

    // Rank filter
    if (filters.selectedRanks.length > 0) {
      result = result.filter(company =>
        company.categoryRankings.some(ranking =>
          filters.selectedRanks.includes(ranking.rank)
        )
      );
    }

    // Funding stage filter
    if (filters.selectedFundingStages.length > 0) {
      result = result.filter(company =>
        company.fundingStage && filters.selectedFundingStages.includes(company.fundingStage)
      );
    }

    return result;
  }, [filters]);

  const handleCompanyClick = (company: CompanyWithCategories) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const handleExportPDF = (company: CompanyWithCategories) => {
    exportToPDF([company], "company-profile");
    toast({
      title: "Export Started",
      description: `Generating PDF for ${company.name}...`,
    });
  };

  const handleExportFiltered = () => {
    exportToPDF(filteredCompanies, "filtered-companies");
    toast({
      title: "Export Started",
      description: `Generating PDF for ${filteredCompanies.length} companies...`,
    });
  };

  const handleExportAll = () => {
    exportToPDF(companiesData, "all-companies");
    toast({
      title: "Export Started",
      description: `Generating PDF for all ${companiesData.length} companies...`,
    });
  };

  const handleSearchChange = (term: string) => {
    setFilters(prev => ({ ...prev, searchTerm: term }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RCM Intelligence Hub</h1>
                <p className="text-sm text-gray-600">AI-Powered Revenue Cycle Management Companies</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleExportAll} className="bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar */}
        <SearchBar
          searchTerm={filters.searchTerm}
          onSearchChange={handleSearchChange}
        />

        {/* Filter Panel */}
        <FilterPanel
          filters={filters}
          onFiltersChange={setFilters}
          onExportFiltered={handleExportFiltered}
        />

        {/* Legend */}
        <Legend />

        {/* Results Summary */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Showing {filteredCompanies.length} of {companiesData.length} companies
                </span>
              </div>
              {filters.selectedCategories.length > 0 && (
                <span className="text-sm text-gray-500">
                  in {filters.selectedCategories.length} selected categories
                </span>
              )}
            </div>
            {filteredCompanies.length !== companiesData.length && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilters({
                  searchTerm: "",
                  selectedCategories: [],
                  selectedRanks: [],
                  selectedFundingStages: []
                })}
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-6">
          {categoriesData.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              companies={filteredCompanies}
              onCompanyClick={handleCompanyClick}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or search terms to find companies.
            </p>
            <Button
              onClick={() => setFilters({
                searchTerm: "",
                selectedCategories: [],
                selectedRanks: [],
                selectedFundingStages: []
              })}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </main>

      {/* Company Modal */}
      <CompanyModal
        company={selectedCompany}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onExportPDF={handleExportPDF}
      />

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">RCM Intelligence Hub</h3>
              <p className="text-gray-600">
                Your comprehensive resource for AI-powered Revenue Cycle Management companies and solutions.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Patient Access</a></li>
                <li><a href="#" className="hover:text-primary">Clinical Documentation</a></li>
                <li><a href="#" className="hover:text-primary">AI Coding</a></li>
                <li><a href="#" className="hover:text-primary">Denials Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Market Reports</a></li>
                <li><a href="#" className="hover:text-primary">Company Profiles</a></li>
                <li><a href="#" className="hover:text-primary">Funding Data</a></li>
                <li><a href="#" className="hover:text-primary">API Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 RCM Intelligence Hub. All rights reserved. Data sourced from industry reports and company disclosures.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
