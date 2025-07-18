import type { CompanyWithCategories } from "@shared/schema";
import { getRankLabel } from "@/data/categories";

export function exportToPDF(companies: CompanyWithCategories[], filename: string): void {
  // Create a comprehensive HTML document for PDF generation
  const htmlContent = generatePDFContent(companies);
  
  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to export PDF');
    return;
  }

  // Write the HTML content to the new window
  printWindow.document.write(htmlContent);
  printWindow.document.close();

  // Wait for content to load, then print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      // Close the window after printing (user can save as PDF)
      setTimeout(() => {
        printWindow.close();
      }, 1000);
    }, 500);
  };
}

function generatePDFContent(companies: CompanyWithCategories[]): string {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RCM Intelligence Hub - Company Report</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: white;
        }
        
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .header p {
            font-size: 1.125rem;
            opacity: 0.9;
        }
        
        .meta-info {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            border-left: 4px solid #2563eb;
        }
        
        .meta-info h2 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #1e293b;
        }
        
        .meta-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .meta-item {
            background: white;
            padding: 1rem;
            border-radius: 6px;
            border: 1px solid #e2e8f0;
        }
        
        .meta-label {
            font-size: 0.875rem;
            color: #64748b;
            font-weight: 500;
        }
        
        .meta-value {
            font-size: 1.125rem;
            font-weight: 600;
            color: #1e293b;
        }
        
        .legend {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .legend h3 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #92400e;
        }
        
        .legend-items {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .rank-indicator {
            width: 16px;
            height: 16px;
            border-radius: 4px;
        }
        
        .rank-high { background-color: #16a34a; }
        .rank-medium { background-color: #ea580c; }
        .rank-low { background-color: #dc2626; }
        
        .company {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            page-break-inside: avoid;
        }
        
        .company-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f1f5f9;
        }
        
        .company-title {
            flex: 1;
        }
        
        .company-name {
            font-size: 1.875rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 0.5rem;
        }
        
        .company-badges {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .badge {
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .badge-ai-native {
            background: #dbeafe;
            color: #1d4ed8;
        }
        
        .badge-funding {
            background: #f3e8ff;
            color: #7c3aed;
        }
        
        .company-info {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .company-description {
            font-size: 1rem;
            color: #4b5563;
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }
        
        .company-details {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 500;
            color: #64748b;
        }
        
        .detail-value {
            font-weight: 600;
            color: #1e293b;
        }
        
        .metrics-section {
            margin-bottom: 2rem;
        }
        
        .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
        }
        
        .metric-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem;
            background: #fafafa;
            border-radius: 6px;
        }
        
        .metric-bullet {
            width: 8px;
            height: 8px;
            background: #2563eb;
            border-radius: 50%;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        
        .metric-text {
            font-size: 0.875rem;
            color: #374151;
        }
        
        .rankings-section {
            margin-bottom: 2rem;
        }
        
        .rankings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
        }
        
        .ranking-item {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .ranking-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .ranking-category {
            font-weight: 600;
            color: #1e293b;
        }
        
        .ranking-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
            color: white;
        }
        
        .ranking-reasoning {
            font-size: 0.875rem;
            color: #4b5563;
            line-height: 1.6;
        }
        
        .analysis-section {
            background: #f0f9ff;
            border: 1px solid #0ea5e9;
            border-radius: 8px;
            padding: 1.5rem;
        }
        
        .analysis-text {
            color: #0f172a;
            line-height: 1.7;
        }
        
        .footer {
            background: #1e293b;
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 3rem;
        }
        
        .footer p {
            opacity: 0.8;
        }
        
        @media print {
            body {
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
            
            .company {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .header {
                page-break-after: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>RCM Intelligence Hub</h1>
        <p>AI-Powered Revenue Cycle Management Companies Report</p>
    </div>
    
    <div class="meta-info">
        <h2>Report Summary</h2>
        <div class="meta-grid">
            <div class="meta-item">
                <div class="meta-label">Generated On</div>
                <div class="meta-value">${currentDate}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Total Companies</div>
                <div class="meta-value">${companies.length}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">AI-Native Companies</div>
                <div class="meta-value">${companies.filter(c => c.isAiNative).length}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Categories Covered</div>
                <div class="meta-value">${getUniqueCategoriesCount(companies)}</div>
            </div>
        </div>
    </div>
    
    <div class="legend">
        <h3>Ranking Legend</h3>
        <div class="legend-items">
            <div class="legend-item">
                <div class="rank-indicator rank-high"></div>
                <span><strong>High (3)</strong> - Market Leader</span>
            </div>
            <div class="legend-item">
                <div class="rank-indicator rank-medium"></div>
                <span><strong>Medium (2)</strong> - Solid Solution</span>
            </div>
            <div class="legend-item">
                <div class="rank-indicator rank-low"></div>
                <span><strong>Low (1)</strong> - Emerging/Potential</span>
            </div>
        </div>
    </div>
    
    ${companies.map(company => generateCompanySection(company)).join('')}
    
    <div class="footer">
        <p>&copy; 2025 RCM Intelligence Hub. All rights reserved.</p>
        <p>Data sourced from industry reports and company disclosures.</p>
    </div>
</body>
</html>`;
}

function generateCompanySection(company: CompanyWithCategories): string {
  return `
    <div class="company">
        <div class="company-header">
            <div class="company-title">
                <h2 class="company-name">${company.name}</h2>
                <div class="company-badges">
                    ${company.isAiNative ? '<span class="badge badge-ai-native">AI-Native</span>' : ''}
                    ${company.fundingStage ? `<span class="badge badge-funding">${company.fundingStage}</span>` : ''}
                </div>
            </div>
        </div>
        
        <div class="company-info">
            <div>
                <p class="company-description">${company.description}</p>
                
                ${company.reasoning ? `
                <div class="analysis-section">
                    <h3 class="section-title">Analysis & Reasoning</h3>
                    <p class="analysis-text">${company.reasoning}</p>
                </div>
                ` : ''}
            </div>
            
            <div class="company-details">
                <div class="detail-row">
                    <span class="detail-label">Founded</span>
                    <span class="detail-value">${company.founded || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Funding</span>
                    <span class="detail-value">${company.totalFunding || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Website</span>
                    <span class="detail-value">${company.website || 'N/A'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Categories</span>
                    <span class="detail-value">${company.categoryRankings.length}</span>
                </div>
            </div>
        </div>
        
        ${company.keyMetrics.length > 0 ? `
        <div class="metrics-section">
            <h3 class="section-title">Key Metrics</h3>
            <div class="metrics-grid">
                ${company.keyMetrics.map(metric => `
                    <div class="metric-item">
                        <div class="metric-bullet"></div>
                        <span class="metric-text">${metric}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        ${company.categoryRankings.length > 0 ? `
        <div class="rankings-section">
            <h3 class="section-title">Category Rankings</h3>
            <div class="rankings-grid">
                ${company.categoryRankings.map(ranking => `
                    <div class="ranking-item">
                        <div class="ranking-header">
                            <span class="ranking-category">${ranking.categoryName}</span>
                            <span class="ranking-badge rank-${getRankLabel(ranking.rank).toLowerCase()}">${getRankLabel(ranking.rank)}</span>
                        </div>
                        ${ranking.reasoning ? `<p class="ranking-reasoning">${ranking.reasoning}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    </div>
  `;
}

function getUniqueCategoriesCount(companies: CompanyWithCategories[]): number {
  const categories = new Set<string>();
  companies.forEach(company => {
    company.categoryRankings.forEach(ranking => {
      categories.add(ranking.categoryName);
    });
  });
  return categories.size;
}

// Alternative implementation using jsPDF (if needed in the future)
export async function exportToPDFAdvanced(companies: CompanyWithCategories[], filename: string): Promise<void> {
  try {
    // This would require installing jsPDF and html2canvas
    // For now, we'll use the print-based approach above
    console.log('Advanced PDF export would be implemented here with jsPDF');
    
    // Fallback to basic export
    exportToPDF(companies, filename);
  } catch (error) {
    console.error('Failed to export PDF:', error);
    throw new Error('PDF export failed');
  }
}

// Utility function to export filtered data as JSON (for debugging)
export function exportToJSON(companies: CompanyWithCategories[], filename: string): void {
  const dataStr = JSON.stringify(companies, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

// Utility function to export as CSV
export function exportToCSV(companies: CompanyWithCategories[], filename: string): void {
  const headers = [
    'Name',
    'Description',
    'Founded',
    'Funding Stage',
    'Total Funding',
    'Website',
    'AI Native',
    'Categories',
    'Top Rank',
    'Key Metrics Count'
  ];
  
  const rows = companies.map(company => {
    const topRank = Math.max(...company.categoryRankings.map(r => r.rank));
    const categories = company.categoryRankings.map(r => r.categoryName).join('; ');
    
    return [
      company.name,
      `"${company.description.replace(/"/g, '""')}"`,
      company.founded || '',
      company.fundingStage || '',
      company.totalFunding || '',
      company.website || '',
      company.isAiNative ? 'Yes' : 'No',
      `"${categories}"`,
      getRankLabel(topRank),
      company.keyMetrics.length.toString()
    ];
  });
  
  const csvContent = [headers, ...rows]
    .map(row => row.join(','))
    .join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}
