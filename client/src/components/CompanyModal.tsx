import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Building2, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { CompanyWithCategories } from "@shared/schema";
import { getRankColor, getRankLabel } from "@/data/categories";

interface CompanyModalProps {
  company: CompanyWithCategories | null;
  isOpen: boolean;
  onClose: () => void;
  onExportPDF: (company: CompanyWithCategories) => void;
}

export function CompanyModal({ company, isOpen, onClose, onExportPDF }: CompanyModalProps) {
  if (!company) return null;

  const handleExportPDF = () => {
    onExportPDF(company);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          <motion.div
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-8 h-8 text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      {company.isAiNative && (
                        <Badge variant="secondary">AI-Native</Badge>
                      )}
                      <Badge variant="outline">{company.fundingStage}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {company.website && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(company.website, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleExportPDF}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Company Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building2 className="w-5 h-5" />
                      <span>Company Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{company.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Founded</p>
                          <p className="text-sm font-medium">{company.founded}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Funding</p>
                          <p className="text-sm font-medium">{company.totalFunding || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Key Metrics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {company.keyMetrics.map((metric, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator className="my-6" />

              {/* Category Rankings */}
              <Card>
                <CardHeader>
                  <CardTitle>Category Rankings & Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {company.categoryRankings.map((ranking, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{ranking.categoryName}</h4>
                          <Badge
                            variant="secondary"
                            className={`${getRankColor(ranking.rank)} text-white`}
                          >
                            {getRankLabel(ranking.rank)}
                          </Badge>
                        </div>
                        {ranking.reasoning && (
                          <p className="text-sm text-gray-600 mb-2">{ranking.reasoning}</p>
                        )}
                        {ranking.sourceLinks && ranking.sourceLinks.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {ranking.sourceLinks.map((link, linkIndex) => (
                              <Button
                                key={linkIndex}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                onClick={() => window.open(link, '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Source {linkIndex + 1}
                              </Button>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Analysis & Reasoning */}
              {company.reasoning && (
                <>
                  <Separator className="my-6" />
                  <Card>
                    <CardHeader>
                      <CardTitle>Analysis & Reasoning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{company.reasoning}</p>
                    </CardContent>
                  </Card>
                </>
              )}

              {/* Source Links */}
              {company.sourceLinks && company.sourceLinks.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <Card>
                    <CardHeader>
                      <CardTitle>Source Links</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {company.sourceLinks.map((link, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(link, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Source {index + 1}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
