import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search companies..." 
}: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-3 text-base border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}
