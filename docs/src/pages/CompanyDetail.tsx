import { useParams } from "wouter";
import { useState, useEffect } from "react";
import { ArrowLeft, Building2, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { companiesData } from "@/data/companies";
import { getRankColor, getRankLabel } from "@/data/categories";
import { exportToPDF } from "@/utils/pdfExport";
import type { CompanyWithCategories } from "@shared/schema";

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [company, setCompany] = useState<CompanyWithCategories | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompany = async () => {
      try {
        const foundCompany = companiesData.find(c => c.id === parseInt(id || "0"));
        setCompany(foundCompany || null);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load company details",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, [id, toast]);

  const handleExportPDF = () => {
    if (company) {
      exportToPDF([company], "company-profile");
      toast({
        title: "Export Started",
        description: `Generating PDF for ${company.name}...`,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company details...</p>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Not Found</h1>
          <p className="text-gray-600 mb-4">The company you're looking for doesn't exist.</p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                  <div className="flex items-center space-x-2 mt-1">
                    {company.isAiNative && (
                      <Badge variant="secondary">AI-Native</Badge>
                    )}
                    <Badge variant="outline">{company.fundingStage}</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {company.website && (
                <Button
                  variant="outline"
                  onClick={() => window.open(company.website, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              )}
              <Button onClick={handleExportPDF}>
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>Company Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">{company.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="text-sm font-medium">{company.founded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Funding</p>
                    <p className="text-sm font-medium">{company.totalFunding || 'N/A'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {company.keyMetrics.map((metric, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analysis & Reasoning */}
            {company.reasoning && (
              <Card>
                <CardHeader>
                  <CardTitle>Analysis & Reasoning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{company.reasoning}</p>
                </CardContent>
              </Card>
            )}

            {/* Source Links */}
            {company.sourceLinks && company.sourceLinks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Source Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      // Get all source links from category rankings first
                      const categorySourceLinks = company.categoryRankings.flatMap(ranking => 
                        ranking.sourceLinks || []
                      );
                      
                      // Create a map to track source link numbers
                      const sourceLinkNumbers = new Map();
                      let currentNumber = 1;
                      
                      // Number category ranking source links first
                      categorySourceLinks.forEach(link => {
                        if (!sourceLinkNumbers.has(link)) {
                          sourceLinkNumbers.set(link, currentNumber++);
                        }
                      });
                      
                      // Then number any additional company source links
                      company.sourceLinks.forEach(link => {
                        if (!sourceLinkNumbers.has(link)) {
                          sourceLinkNumbers.set(link, currentNumber++);
                        }
                      });
                      
                      return company.sourceLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Source {sourceLinkNumbers.get(link)}
                        </Button>
                      ));
                    })()}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Category Rankings */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Category Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {company.categoryRankings.map((ranking, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{ranking.categoryName}</h4>
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
                          {(() => {
                            // Get all source links from category rankings to maintain consistent numbering
                            const allCategorySourceLinks = company.categoryRankings.flatMap(r => r.sourceLinks || []);
                            const sourceLinkNumbers = new Map();
                            let currentNumber = 1;
                            
                            // Number all category ranking source links first
                            allCategorySourceLinks.forEach(link => {
                              if (!sourceLinkNumbers.has(link)) {
                                sourceLinkNumbers.set(link, currentNumber++);
                              }
                            });
                            
                            return ranking.sourceLinks.map((link, linkIndex) => (
                              <Button
                                key={linkIndex}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                onClick={() => window.open(link, '_blank')}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Source {sourceLinkNumbers.get(link)}
                              </Button>
                            ));
                          })()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
