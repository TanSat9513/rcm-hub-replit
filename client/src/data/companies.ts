import type { Company, CompanyWithCategories } from "@shared/schema";

export const companiesData: CompanyWithCategories[] = [
  {
    id: 1,
    name: "Infinx",
    description:
      "Infinx provides AI-driven patient access and RCM solutions with industry-leading accuracy rates.",
    website: "https://infinx.com",
    founded: "2012",
    fundingStage: "Seed",
    totalFunding: "$150M+",
    keyMetrics: [
      "98%+ accuracy rate in prior authorization",
      "24-48 hour average turnaround time",
      "<2% denial rate for prior auth",
      "2M+ eligibility verification transactions annually",
      "5M+ patients served",
      "2B+ revenue collected",
    ],
    categories: [],
    reasoning:
      "Infinx is recognized as a market leader in AI-powered prior authorization and patient access, offering a hybrid AI/human model with exceptional performance metrics that are among the best in the industry.",
    sourceLinks: [
      "https://infinx.com/solutions/prior-authorization",
      "https://infinx.com/case-studies",
    ],
    isAiNative: false,
    categoryRankings: [
      {
        categoryName: "Eligibility & Verification",
        rank: 3,
        reasoning:
          "Infinx's Patient Access platform provides automated, AI-driven eligibility verification and benefits checks, with 2M+ eligibility verification transactions processed annually, 5M+ patients served, and $2B+ revenue collected.",
        sourceLinks: [
          "https://www.infinx.com/eligibility-verifications-and-benefits-solution/",
        ],
      },
      {
        categoryName: "Prior Authorization",
        rank: 3,
        reasoning:
          "Infinx is recognized as a market leader in AI-powered prior authorization, offering a 98%+ accuracy rate, 24–48 hour average turnaround, <2% denial rate, and a hybrid AI/human model.",
        sourceLinks: [
          "https://www.infinx.com/prior-authorization-solution-ai-and-automation/",
        ],
      },
      {
        categoryName: "CDI Prompt & Query",
        rank: 2,
        reasoning:
          "Infinx improves clean claim rate with accurate patient care records, improves document quality, reduces compliance concerns, and avoids coding and medical necessity-related denials downstream by ensuring documentation supports the coding and charge capture efforts.",
        sourceLinks: [
          "https://www.infinx.com/clinical-documentation-improvement-cdi/",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Luma",
    description:
      "Luma provides AI-powered patient access solutions focused on eligibility verification and patient engagement.",
    website: "https://luma.health",
    founded: "2015",
    fundingStage: "Series C",
    totalFunding: "$130M",
    keyMetrics: [
      "61 days sooner care on average",
      "95% of phone calls completely automated",
      "82% patient verification success rate",
      "1,200 cancellations processed without human interaction",
      "98 manual call center staff hours saved/eliminated",
    ],
    categories: [],
    reasoning:
      "Luma demonstrates exceptional automation capabilities in patient access with high success rates and significant reduction in manual processes.",
    sourceLinks: [
      "https://luma.health/solutions",
      "https://luma.health/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Eligibility & Verification",
        rank: 3,
        reasoning:
          "Luma's AI-powered automation achieves 95% phone call automation with 82% patient verification success rate, significantly reducing manual work. It has led to patients receiving care 61 days sooner on average.",
        sourceLinks: [
          "https://www.lumahealth.io/newsroom/press-releases/luma-health-announces-spark-multi-model-generative-ai-to-tackle-staff-work-and-get-patients-the-care-they-need-more-efficiently/",
        ],
      },
      {
        categoryName: "Digital Billing & Reminders",
        rank: 3,
        reasoning:
          "Luma’s AI-powered automation is configurable to support complex workflows and integrates with EHRs and other systems to optimize operational efficiency. Their Navigator AI tool automates appointment management and after-hours communication, reducing manual staff work and aligning workflows.",
        sourceLinks: [
          "https://www.lumahealth.io/patient-success-platform/payments/",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tennr",
    description:
      "Tennr focuses on making prior authorization and the entire referral process faster through AI automation.",
    website: "https://tennr.com",
    founded: "2021",
    fundingStage: "Series c",
    totalFunding: "$162M",
    keyMetrics: [
      "Reduces denials by 98% while tripling revenue",
      "Referrals 75% faster with 4x volume",
      "Runs benefits investigations automatically",
      "Submits prior auths with high accuracy",
    ],
    categories: [],
    reasoning:
      "Tennr's primary focus on prior authorization automation with exceptional denial reduction rates makes it a top performer in this category.",
    sourceLinks: [
      "https://www.ctol.digital/news/tennr-raises-101m-healthcare-referral-ai-605m-valuation/",
      "https://www.tennr.com/customer-stories",
      "https://www.tennr.com/customer-stories/homemedix",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Eligibility & Verification",
        rank: 3,
        reasoning:
          "Tennr's platform reduces denials by 98% while tripling revenue with comprehensive benefits investigations.",
        sourceLinks: [
          "https://www.ctol.digital/news/tennr-raises-101m-healthcare-referral-ai-605m-valuation/",
        ],
      },
      {
        categoryName: "Prior Authorization",
        rank: 3,
        reasoning:
          "Primary focus on making prior auth and whole referral process faster with case studies showing referrals 75% faster with 4x volume.",
        sourceLinks: ["https://www.tennr.com/customer-stories/homemedix"],
      },
    ],
  },
  {
    id: 4,
    name: "Thoughtful AI",
    description:
      "Thoughtful AI provides AI agents for healthcare RCM automation with focus on accuracy and efficiency.",
    website: "https://thoughtful.ai",
    founded: "2020",
    fundingStage: "Series A",
    totalFunding: "$40M",
    keyMetrics: [
      "95%+ accuracy rates in automated processes",
      "75% reduction in claim denials",
      "40% faster collections",
      "350% year-over-year revenue growth",
      "5x ROI with full deployment in less than 9 months",
    ],
    categories: [],
    reasoning:
      "Thoughtful AI demonstrates strong performance in eligibility verification and payment posting, with emerging capabilities in prior authorization.",
    sourceLinks: [
      "https://thoughtful.ai/solutions",
      "https://www.thoughtful.ai/blog/predictive-ai-the-future-of-streamlined-prior-authorizations",
      "https://www.thoughtful.ai/ai-agent/claims-processing",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Eligibility & Verification",
        rank: 3,
        reasoning:
          "Thoughtful AI's platform is 95% faster than a RCM manual human team, results in 20% decrease in denials due to eligibility errors, and has an 11x increase in frequency of eligibility checks.",
        sourceLinks: [
          "https://www.thoughtful.ai/ai-agent/eligibility-verification",
        ],
      },
      {
        categoryName: "Prior Authorization",
        rank: 2,
        reasoning:
          "PAULA agent reduces prior auth denials by 75% and boasts a 98% first-pass approval rate.",
        sourceLinks: [
          "https://www.thoughtful.ai/blog/predictive-ai-the-future-of-streamlined-prior-authorizations",
        ],
      },
      {
        categoryName: "Claims Scrubbing & Edits",
        rank: 2,
        reasoning:
          "Thoughtful AI's CAM agent scrubs claims to prevent denials and costly rework. It also automates primary and secondary claims processing. It has shown to have a 95% reduction in manual time spent on cleaning and submitting claims.",
        sourceLinks: ["https://www.thoughtful.ai/ai-agent/claims-processing"],
      },
    ],
  },
  {
    id: 5,
    name: "Abridge",
    description:
      "Leading AI scribing technology company focused on improving physician documentation experience.",
    website: "https://abridge.com",
    founded: "2018",
    fundingStage: "Series E",
    totalFunding: "$800M",
    keyMetrics: [
      "90% improvement in physician undivided attention",
      "86% of clinicians work less after-hours",
      "Real-time note generation",
      "Integrated with all major EHR systems",
      "11% increase in wRVUs",
    ],
    categories: [],
    reasoning:
      "Abridge is recognized as a leading startup in AI scribing technology with proven impact on physician workflow and documentation quality.",
    sourceLinks: [
      "https://abridge.com/solutions",
      "https://abridge.com/clinical-studies",
      "https://www.abridge.com/blog/riverside-data",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Ambient AI Scribing",
        rank: 3,
        reasoning:
          "Leading startup in AI scribing technology, improving undivided attention of physicians by 90%, 86% clinicians do less after work hours.",
        sourceLinks: [
          "https://www.abridge.com/case-study/lee-health",
          "https://www.abridge.com/case-study/corewell-health",
        ],
      },
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "Abridge is widely recognized as a leader in clinical documentation, with its AI platform automating the creation of clinically useful and billable notes directly in EHR workflows. Its technology is enterprise-grade, purpose-built by clinicians and AI scientists, and is deployed at major health systems like Mayo Clinic, Johns Hopkins, and Kaiser Permanente. The platform is specifically designed to reduce clinician administrative burden and improve documentation speed and accuracy.",
        sourceLinks: ["https://www.abridge.com/case-study/uvm-health-network"],
      },
    ],
  },
  {
    id: 6,
    name: "Suki.AI",
    description:
      "Voice-enabled AI assistant for healthcare documentation and clinical workflows.",
    website: "https://suki.ai",
    founded: "2017",
    fundingStage: "Series B",
    totalFunding: "$65M",
    keyMetrics: [
      "72% average reduction in documentation/clinical note time",
      "Real-time note generation",
      "Voice AI integration",
      "EHR workflow optimization",
      "Delivering a 9X ROI in year 1"
    ],
    categories: [],
    reasoning:
      "Suki.AI provides comprehensive voice-enabled AI documentation with strong EHR integration and workflow optimization.",
    sourceLinks: ["https://www.suki.ai/news/suki-assistant-receives-93-2-overall-performance-score-in-2024-klas-spotlight-report/", "https://www.athenahealth.com/resources/case-studies/orthoatlanta"],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Ambient AI Scribing",
        rank: 3,
        reasoning:
          "Reduces documentation time by 72% with real-time note generation and voice AI capabilities.",
        sourceLinks: ["https://www.suki.ai/news/suki-assistant-receives-93-2-overall-performance-score-in-2024-klas-spotlight-report/"],
      },
      {
        categoryName: "CDI Prompt & Query",
        rank: 2,
        reasoning:
          "Suki flags missing documentation and prompts for additional details, but is not a full CDI suite. Case studies have reported 12% increase in encounter volume and 19% reduction in claims denial rates",
        sourceLinks: ["https://www.athenahealth.com/resources/case-studies/orthoatlanta"],
      },
    ],
  },
  {
    id: 7,
    name: "Fathom",
    description:
      "Industry-leading autonomous medical coding platform with high accuracy and customer satisfaction.",
    website: "https://fathom.health",
    founded: "2016",
    fundingStage: "Series B",
    totalFunding: "$61M",
    keyMetrics: [
      "90% coding accuracy rate",
      "Significant reduction in charge lag time",
      "High customer satisfaction scores",
      "Autonomous coding capabilities for E/M, CPT, and ICD-10",
    ],
    categories: [],
    reasoning:
      "Fathom is recognized as an industry leader in autonomous medical coding with exceptional accuracy rates and proven charge capture improvements.",
    sourceLinks: [
      "https://www.fathomhealth.com/insights/fathom-earns-100-high-customer-satisfaction-and-full-validation-of-90-coding-automation-rates-in-klas-spotlight-report",
      "https://fathom.health/case-studies", "https://www.fathomhealth.com/insights/fathom-sets-new-industry-automation-rate-benchmark-with-96-live-coding-automation-for-emergency-departments",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "Industry leader with 90% accuracy rate and high customer satisfaction in autonomous medical coding. Solution is available within Epic Toolbox program",
        sourceLinks: ["https://www.fathomhealth.com/insights/fathom-autonomous-medical-coding-available-in-epic-toolbox"],
      },
      {
        categoryName: "Charge Capture",
        rank: 2,
        reasoning:
          "Emphasizes reduction in charge lag time with autonomous coding capabilities. Lack of available statistics makes it hard to classify as a leader in this category.",
        sourceLinks: ["https://www.fathomhealth.com/services"],
      },
    ],
  },
  {
    id: 8,
    name: "Maverick AI",
    description:
      "Real-time medical coding platform with industry-leading direct-to-bill rates and accuracy.",
    website: "https://maverick-ai.com",
    founded: "2018",
    fundingStage: "Seed",
    totalFunding: "$5M",
    keyMetrics: [
      "85% direct-to-bill rate",
      "97%+ accuracy in coding",
      "Real-time coding validation",
      "RadNet and ImagineSoftware deployments",
    ],
    categories: [],
    reasoning:
      "Maverick AI's autonomous, real-time medical coding with published 85% direct-to-bill rate at go-live and 97%+ accuracy significantly above industry averages.",
    sourceLinks: [
      "https://maverick-ai.com/direct-to-bill-autonomous-medical-coding/","https://maverick-ai.com/deeplearningai/",
      "https://maverick-ai.com/ai-autonomous-medical-coding-a-coders-perspective/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "Maverick AI's core offering is autonomous, real-time medical coding with a published 85% direct-to-bill rate and 97%+ accuracy, significantly above industry averages.",
        sourceLinks: ["https://maverick-ai.com/direct-to-bill-autonomous-medical-coding/"],
      },
      {
        categoryName: "Coding Validation",
        rank: 3,
        reasoning:
          "Maverick's platform is a next-generation coding validation tool, providing real-time coding suggestions, autonomous code generation, and validation.",
        sourceLinks: ["https://maverick-ai.com/deeplearningai/"],
      },
    ],
  },
  {
    id: 9,
    name: "Aspirion",
    description:
      "Industry leader in appeals management and denial resolution with exceptional overturn rates.",
    website: "https://aspirion.com",
    founded: "2001",
    fundingStage: "Series B+",
    totalFunding: "$75M",
    keyMetrics: [
      "90%+ day-1 clinical denials overturn rate",
      "40% expected reimbursement yield increase",
      "80% claims paid within 90 days of appeal",
      "Detailed root cause analysis capabilities",
    ],
    categories: [],
    reasoning:
      "Aspirion demonstrates industry-leading performance in appeals management with overturn rates well above typical industry averages.",
    sourceLinks: [
      "https://aspirion.com/solutions",
      "https://aspirion.com/case-studies",
    ],
    isAiNative: false,
    categoryRankings: [
      {
        categoryName: "Appeals Management",
        rank: 3,
        reasoning:
          "Aspirion is an industry leader in appeals management, with a 90%+ day-1 clinical denials overturn rate and a 40% expected reimbursement yield increase.",
        sourceLinks: ["https://aspirion.com/solutions/appeals"],
      },
    ],
  },
  {
    id: 10,
    name: "AKASA",
    description:
      "AI-powered revenue cycle automation platform with comprehensive RCM solutions.",
    website: "https://akasa.com",
    founded: "2019",
    fundingStage: "Series B",
    totalFunding: "$60M",
    keyMetrics: [
      "AI-powered coding and authorization",
      "Comprehensive RCM automation",
      "Healthcare-specific AI agents",
      "EHR integration capabilities",
    ],
    categories: [],
    reasoning:
      "AKASA provides AI-native RCM solutions with focus on coding and authorization automation.",
    sourceLinks: [
      "https://akasa.com/solutions",
      "https://akasa.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "AKASA Coding provides AI-powered autonomous medical coding with healthcare-specific optimization.",
        sourceLinks: ["https://akasa.com/solutions/coding"],
      },
      {
        categoryName: "Prior Authorization",
        rank: 2,
        reasoning:
          "AKASA Authorization Advisor provides AI-powered prior authorization assistance for providers.",
        sourceLinks: ["https://akasa.com/solutions/authorization"],
      },
      {
        categoryName: "ERA/EFT Posting Automation",
        rank: 2,
        reasoning:
          "AKASA's comprehensive RCM automation platform includes AI agents for ERA/EFT posting with healthcare-specific optimization.",
        sourceLinks: ["https://akasa.com/solutions/era-eft"],
      },
    ],
  },
  {
    id: 11,
    name: "Ambience CDI",
    description:
      "Ambient clinical documentation improvement platform leveraging AI for real-time documentation.",
    website: "https://ambience.healthcare",
    founded: "2020",
    fundingStage: "Series A",
    totalFunding: "$40M",
    keyMetrics: [
      "Ambient clinical documentation",
      "Real-time CDI improvement",
      "AI-powered documentation integrity",
      "EHR workflow integration",
    ],
    categories: [],
    reasoning:
      "Ambience CDI focuses on ambient clinical documentation improvement with AI-powered real-time capabilities.",
    sourceLinks: [
      "https://ambience.healthcare/solutions",
      "https://ambience.healthcare/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "Ambience CDI provides ambient clinical documentation improvement with AI-powered real-time capabilities.",
        sourceLinks: ["https://ambience.healthcare/solutions/cdi"],
      },
    ],
  },
  {
    id: 12,
    name: "Regard",
    description:
      "AI-powered clinical documentation integrity platform with real-time capabilities.",
    website: "https://regard.com",
    founded: "2021",
    fundingStage: "Series A",
    totalFunding: "$45M",
    keyMetrics: [
      "Real-time CDI capabilities",
      "AI-powered documentation integrity",
      "Clinical workflow integration",
      "Documentation quality improvement",
    ],
    categories: [],
    reasoning:
      "Regard provides AI-powered clinical documentation integrity with focus on real-time capabilities and quality improvement.",
    sourceLinks: [
      "https://regard.com/solutions",
      "https://regard.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "Regard provides AI-powered clinical documentation integrity with real-time capabilities and quality improvement.",
        sourceLinks: ["https://regard.com/solutions/cdi"],
      },
    ],
  },
  {
    id: 13,
    name: "Adonis Intelligence",
    description:
      "AI-driven revenue cycle automation platform with comprehensive denials management.",
    website: "https://adonis.com",
    founded: "2019",
    fundingStage: "Series A",
    totalFunding: "$31M",
    keyMetrics: [
      "AI-driven revenue cycle automation",
      "Comprehensive denials management",
      "35+ EHR systems supported",
      "Automated claim processing",
    ],
    categories: [],
    reasoning:
      "Adonis Intelligence provides AI-driven revenue cycle automation with strong denials management capabilities.",
    sourceLinks: [
      "https://adonis.com/solutions",
      "https://adonis.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Denial Triage & Categorization",
        rank: 3,
        reasoning:
          "Adonis Intelligence provides AI-driven denials management with automated triage and categorization capabilities.",
        sourceLinks: ["https://adonis.com/solutions/denials"],
      },
      {
        categoryName: "Payment Reconciliation",
        rank: 2,
        reasoning:
          "Adonis Intelligence's AI-driven revenue cycle automation includes payment reconciliation capabilities across 35+ EHR systems.",
        sourceLinks: ["https://adonis.com/solutions/reconciliation"],
      },
    ],
  },
  {
    id: 14,
    name: "PayZen",
    description:
      "AI-powered patient payment optimization platform with predictive analytics.",
    website: "https://payzen.com",
    founded: "2018",
    fundingStage: "Series B",
    totalFunding: "$55M",
    keyMetrics: [
      "AI-powered payment optimization",
      "Predictive analytics for patient payments",
      "Personalized payment plans",
      "Bad debt reduction capabilities",
    ],
    categories: [],
    reasoning:
      "PayZen provides AI-powered patient payment optimization with predictive analytics and personalized payment solutions.",
    sourceLinks: [
      "https://payzen.com/solutions",
      "https://payzen.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Digital Billing & Reminders",
        rank: 3,
        reasoning:
          "PayZen provides AI-powered patient payment optimization with predictive analytics and personalized payment solutions.",
        sourceLinks: ["https://payzen.com/solutions/billing"],
      },
      {
        categoryName: "Payment Reconciliation",
        rank: 2,
        reasoning:
          "PayZen's AI-powered platform includes payment reconciliation capabilities with predictive analytics for optimizing payment collection.",
        sourceLinks: ["https://payzen.com/solutions/reconciliation"],
      },
    ],
  },
  {
    id: 15,
    name: "Cedar Pay",
    description:
      "Patient financial experience platform with AI-powered billing and payment solutions.",
    website: "https://cedar.com",
    founded: "2016",
    fundingStage: "Series C",
    totalFunding: "$200M",
    keyMetrics: [
      "AI personalizes patient billing",
      "35% increase in payment rates",
      "40% improvement in patient acceptance",
      "28% reduction in bad debt",
    ],
    categories: [],
    reasoning:
      "Cedar Pay provides comprehensive patient financial experience with AI-powered billing optimization and payment solutions.",
    sourceLinks: [
      "https://cedar.com/solutions",
      "https://cedar.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Digital Billing & Reminders",
        rank: 3,
        reasoning:
          "AI personalizes patient billing, increasing payment rates by 35% with comprehensive patient financial experience.",
        sourceLinks: ["https://cedar.com/solutions/billing"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 3,
        reasoning:
          "Integrated financing options improve patient acceptance by 40% with predictive analytics creating optimized payment plans, reducing bad debt by 28%.",
        sourceLinks: ["https://cedar.com/solutions/ar"],
      },
      {
        categoryName: "Payment Reconciliation",
        rank: 3,
        reasoning:
          "Cedar's comprehensive patient financial platform includes advanced payment reconciliation capabilities with predictive analytics for optimizing collections.",
        sourceLinks: ["https://cedar.com/solutions/reconciliation"],
      },
    ],
  },
  {
    id: 16,
    name: "Anterior",
    description:
      "AI-powered prior authorization platform designed for health plans and payers.",
    website: "https://anterior.com",
    founded: "2020",
    fundingStage: "Series A",
    totalFunding: "$42M",
    keyMetrics: [
      "AI-powered prior authorization for payers",
      "Automated utilization management",
      "Clinical decision support",
      "Policy automation capabilities",
    ],
    categories: [],
    reasoning:
      "Anterior provides AI-powered prior authorization specifically designed for health plans and payers with automated utilization management.",
    sourceLinks: [
      "https://anterior.com/solutions",
      "https://anterior.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Prior Authorization",
        rank: 3,
        reasoning:
          "Anterior provides AI-powered prior authorization specifically designed for health plans and payers with automated utilization management.",
        sourceLinks: ["https://anterior.com/solutions/prior-auth"],
      },
    ],
  },
  {
    id: 17,
    name: "CodaMetrix",
    description:
      "Autonomous medical coding platform using deep learning for accurate code assignment.",
    website: "https://codametrix.com",
    founded: "2016",
    fundingStage: "Series B",
    totalFunding: "$70M",
    keyMetrics: [
      "Autonomous medical coding",
      "Deep learning algorithms",
      "High accuracy code assignment",
      "Scalable coding solutions",
    ],
    categories: [],
    reasoning:
      "CodaMetrix provides autonomous medical coding using deep learning with focus on accuracy and scalability.",
    sourceLinks: [
      "https://codametrix.com/solutions",
      "https://codametrix.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "CodaMetrix provides autonomous medical coding using deep learning algorithms with high accuracy and scalability.",
        sourceLinks: ["https://codametrix.com/solutions/coding"],
      },
    ],
  },
  {
    id: 18,
    name: "Nym",
    description:
      "AI-powered autonomous coding solution with natural language processing capabilities.",
    website: "https://nym.health",
    founded: "2017",
    fundingStage: "Series A",
    totalFunding: "$47M",
    keyMetrics: [
      "AI-powered autonomous coding",
      "Natural language processing",
      "Automated code assignment",
      "Clinical documentation analysis",
    ],
    categories: [],
    reasoning:
      "Nym provides AI-powered autonomous coding with advanced natural language processing for clinical documentation analysis.",
    sourceLinks: [
      "https://nym.health/solutions",
      "https://nym.health/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "Nym provides AI-powered autonomous coding with natural language processing for clinical documentation analysis.",
        sourceLinks: ["https://nym.health/solutions/coding"],
      },
    ],
  },
  {
    id: 19,
    name: "Cohere Health",
    description:
      "AI-powered prior authorization platform for payers with utilization management capabilities.",
    website: "https://cohere.health",
    founded: "2019",
    fundingStage: "Series B",
    totalFunding: "$50M",
    keyMetrics: [
      "AI-powered prior authorization",
      "Utilization management for payers",
      "Clinical decision support",
      "Automated approval workflows",
    ],
    categories: [],
    reasoning:
      "Cohere Health provides AI-powered prior authorization for payers with comprehensive utilization management capabilities.",
    sourceLinks: [
      "https://cohere.health/solutions",
      "https://cohere.health/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Prior Authorization",
        rank: 3,
        reasoning:
          "Cohere Health provides AI-powered prior authorization for payers with comprehensive utilization management capabilities.",
        sourceLinks: ["https://cohere.health/solutions/prior-auth"],
      },
    ],
  },
  {
    id: 20,
    name: "Collectly",
    description:
      "Digital patient billing and collection platform with AI-powered optimization.",
    website: "https://collectly.com",
    founded: "2019",
    fundingStage: "Series A",
    totalFunding: "$29M",
    keyMetrics: [
      "Digital patient billing",
      "AI-powered collection optimization",
      "Automated payment reminders",
      "Patient engagement tools",
    ],
    categories: [],
    reasoning:
      "Collectly provides digital patient billing and collection with AI-powered optimization for improved patient engagement.",
    sourceLinks: [
      "https://collectly.com/solutions",
      "https://collectly.com/case-studies",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Digital Billing & Reminders",
        rank: 2,
        reasoning:
          "Collectly provides digital patient billing and collection with AI-powered optimization for improved patient engagement.",
        sourceLinks: ["https://collectly.com/solutions/billing"],
      },
    ],
  },
];

// Helper function to get companies by category
export function getCompaniesByCategory(
  categoryName: string,
): CompanyWithCategories[] {
  return companiesData.filter((company) =>
    company.categoryRankings.some(
      (ranking) => ranking.categoryName === categoryName,
    ),
  );
}

// Helper function to get companies by rank
export function getCompaniesByRank(rank: number): CompanyWithCategories[] {
  return companiesData.filter((company) =>
    company.categoryRankings.some((ranking) => ranking.rank === rank),
  );
}

// Helper function to get companies by funding stage
export function getCompaniesByFundingStage(
  fundingStage: string,
): CompanyWithCategories[] {
  return companiesData.filter(
    (company) => company.fundingStage === fundingStage,
  );
}

// Helper function to search companies
export function searchCompanies(searchTerm: string): CompanyWithCategories[] {
  const lowercaseSearch = searchTerm.toLowerCase();
  return companiesData.filter(
    (company) =>
      company.name.toLowerCase().includes(lowercaseSearch) ||
      company.description.toLowerCase().includes(lowercaseSearch) ||
      company.keyMetrics.some((metric) =>
        metric.toLowerCase().includes(lowercaseSearch),
      ),
  );
}
