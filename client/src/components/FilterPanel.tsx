import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FilterState } from "@shared/schema";

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onExportFiltered: () => void;
}

export function FilterPanel({ filters, onFiltersChange, onExportFiltered }: FilterPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const categories = [
    "Eligibility & Verification",
    "Prior Authorization",
    "Ambient AI Scribing",
    "CDI Prompt & Query",
    "Workflow Alignment",
    "AI Coding (Autonomous)",
    "Coding Validation",
    "Charge Capture",
    "Claims Scrubbing & Edits",
    "First-Pass Error Resolution",
    "Denial Triage & Categorization",
    "Appeals Management",
    "ERA/EFT Posting Automation",
    "Payment Reconciliation",
    "Digital Billing & Reminders",
    "Accounts Receivable"
  ];

  const fundingStages = []
  //   "Seed",
  //   "Series A",
  //   "Series B",
  //   "Series B+",
  //   "Series C",
  //   "Series C+",
  //   "Public"
  // ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.selectedCategories, category]
      : filters.selectedCategories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, selectedCategories: newCategories });
  };

  const handleRankChange = (rank: number, checked: boolean) => {
    const newRanks = checked
      ? [...filters.selectedRanks, rank]
      : filters.selectedRanks.filter(r => r !== rank);
    
    onFiltersChange({ ...filters, selectedRanks: newRanks });
  };

  const handleFundingStageChange = (stage: string, checked: boolean) => {
    const newStages = checked
      ? [...filters.selectedFundingStages, stage]
      : filters.selectedFundingStages.filter(s => s !== stage);
    
    onFiltersChange({ ...filters, selectedFundingStages: newStages });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      searchTerm: "",
      selectedCategories: [],
      selectedRanks: [],
      selectedFundingStages: []
    });
  };

  const activeFiltersCount = 
    filters.selectedCategories.length + 
    filters.selectedRanks.length + 
    filters.selectedFundingStages.length;

  const panelVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 }
  };

  return (
    <Card className="mb-6">
      <Button
        variant="ghost"
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span className="text-lg font-semibold">Filters & Options</span>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">{activeFiltersCount}</Badge>
          )}
        </div>
        {isCollapsed ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </Button>
      
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={panelVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={filters.selectedCategories.includes(category)}
                          onCheckedChange={(checked) => 
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rank Filter */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Rank</h3>
                  <div className="space-y-2">
                    {[
                      { rank: 3, label: "High (3)", color: "text-green-600" },
                      { rank: 2, label: "Medium (2)", color: "text-orange-600" },
                      { rank: 1, label: "Low (1)", color: "text-red-600" }
                    ].map(({ rank, label, color }) => (
                      <div key={rank} className="flex items-center space-x-2">
                        <Checkbox
                          id={`rank-${rank}`}
                          checked={filters.selectedRanks.includes(rank)}
                          onCheckedChange={(checked) => 
                            handleRankChange(rank, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`rank-${rank}`}
                          className={`text-sm cursor-pointer ${color}`}
                        >
                          {label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Funding Stage Filter */}
                {/* <div>
                  <h3 className="font-medium text-gray-900 mb-3">Funding Stage</h3>
                  <div className="space-y-2">
                    {fundingStages.map((stage) => (
                      <div key={stage} className="flex items-center space-x-2">
                        <Checkbox
                          id={`funding-${stage}`}
                          checked={filters.selectedFundingStages.includes(stage)}
                          onCheckedChange={(checked) => 
                            handleFundingStageChange(stage, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`funding-${stage}`}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {stage}
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Quick Actions */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={clearAllFilters}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Clear All Filters
                    </Button>
                    <Button
                      className="w-full justify-start"
                      size="sm"
                      onClick={onExportFiltered}
                    >
                      Export Filtered Results
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
