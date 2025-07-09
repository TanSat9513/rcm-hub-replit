import { motion } from "framer-motion";
import type { CompanyWithCategories } from "@shared/schema";
import { getRankColor, getRankLabel } from "@/data/categories";

interface CompanyCardProps {
  company: CompanyWithCategories;
  onClick: () => void;
}

export function CompanyCard({ company, onClick }: CompanyCardProps) {
  const getTopRanking = () => {
    return company.categoryRankings.reduce((highest, current) => 
      current.rank > highest.rank ? current : highest
    );
  };

  const topRanking = getTopRanking();

  return (
    <motion.div
      className="company-tile p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <h3 className="font-semibold text-gray-900 text-sm">{company.name}</h3>
          {company.isAiNative && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              AI-Native
            </span>
          )}
        </div>
        <div className="flex space-x-1">
          {company.categoryRankings.slice(0, 3).map((ranking, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${getRankColor(ranking.rank)}`}
              title={`${ranking.categoryName}: ${getRankLabel(ranking.rank)}`}
            />
          ))}
          {company.categoryRankings.length > 3 && (
            <div className="w-3 h-3 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-white text-xs font-bold">+{company.categoryRankings.length - 3}</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{company.description}</p>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-1 rounded-full ${getFundingStageColor(company.fundingStage)}`}>
          {company.fundingStage}
        </span>
        <span className="text-xs text-gray-500">
          {company.keyMetrics.length} metrics
        </span>
      </div>
      
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className={`w-2 h-2 rounded-full ${getRankColor(topRanking.rank)}`} />
          <span className="text-xs text-gray-500">
            Top: {getRankLabel(topRanking.rank)}
          </span>
        </div>
        <span className="text-xs text-gray-400">
          {company.categoryRankings.length} categories
        </span>
      </div>
    </motion.div>
  );
}

function getFundingStageColor(stage: string | null): string {
  switch (stage) {
    case "Seed":
      return "bg-yellow-100 text-yellow-800";
    case "Series A":
      return "bg-green-100 text-green-800";
    case "Series B":
    case "Series B+":
      return "bg-blue-100 text-blue-800";
    case "Series C":
    case "Series C+":
      return "bg-purple-100 text-purple-800";
    case "Public":
      return "bg-indigo-100 text-indigo-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
