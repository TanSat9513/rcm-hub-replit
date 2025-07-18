import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { CompanyWithCategories, FilterState } from "@shared/schema";

export function useCompanyData() {
  const {
    data: companies = [],
    isLoading,
    error
  } = useQuery<CompanyWithCategories[]>({
    queryKey: ["/api/companies"],
    queryFn: async () => {
      const response = await fetch("/api/companies");
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      return response.json();
    }
  });

  return {
    companies,
    isLoading,
    error
  };
}

export function useCompanySearch(filters: FilterState) {
  const [filteredCompanies, setFilteredCompanies] = useState<CompanyWithCategories[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const {
    data: searchResults,
    isLoading,
    error
  } = useQuery<CompanyWithCategories[]>({
    queryKey: ["/api/companies/search", filters],
    queryFn: async () => {
      const response = await fetch("/api/companies/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });
      
      if (!response.ok) {
        throw new Error("Failed to search companies");
      }
      
      return response.json();
    },
    enabled: !!(
      filters.searchTerm ||
      filters.selectedCategories.length > 0 ||
      filters.selectedRanks.length > 0 ||
      filters.selectedFundingStages.length > 0
    )
  });

  useEffect(() => {
    if (searchResults) {
      setFilteredCompanies(searchResults);
    }
  }, [searchResults]);

  return {
    filteredCompanies,
    isSearching: isLoading,
    searchError: error
  };
}

export function useCompanyDetails(id: number) {
  const {
    data: company,
    isLoading,
    error
  } = useQuery<CompanyWithCategories>({
    queryKey: ["/api/companies", id],
    queryFn: async () => {
      const response = await fetch(`/api/companies/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch company details");
      }
      return response.json();
    },
    enabled: !!id
  });

  return {
    company,
    isLoading,
    error
  };
}
