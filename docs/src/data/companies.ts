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
    website: "https://fathomhealth.com/",
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
      "Industry leader in appeals management and denial resolution with exceptional overturn rates, serving 12 of the nation's 15 largest health systems.",
    website: "https://aspirion.com",
    founded: "2006",
    fundingStage: "Unknown",
    totalFunding: "$Unknown",
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
      "https://www.aspirion.com/services/denials-management/",
      "https://www.aspirion.com/services/payment-variance-recovery/", "https://www.aspirion.com/services/ar-management/", "https://www.aspirion.com/mounting-prior-authorization-denials-worsen-hospital-payer-relations/",
    ],
    isAiNative: false,
    categoryRankings: [
      {
        categoryName: "Appeals Management",
        rank: 3,
        reasoning:
          "Aspirion is an industry leader in appeals management, with a 90%+ day-1 clinical denials overturn rate and a 40% expected reimbursement yield increase.",
        sourceLinks: ["https://www.aspirion.com/services/denials-management/"],
      },
      {
        categoryName: "Payment Reconciliation",
        rank: 2,
        reasoning:
          "While primarily focused on denials management within RCM, Aspirion also offers underpayment detection services, highlighting a 35% underpayment revenue reduction, .25-1% net revenue lift, and 80% of claims paid within 90 days of appeal",
        sourceLinks: ["https://www.aspirion.com/services/payment-variance-recovery/"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 3,
        reasoning:
          "Accelerating accounts receivable is one of Aspirion's key AI offerings. Their powerful combination of highly-skilled experts plus cutting-edge AI technology deliver industry-leading revenue recovery results across all payers—from commercial and government to MCOs and TPL. They offer a 90%+ underpayment reduction rate, ~10-12% reduction in AR days, have 60% of appeals paid within 90 days.",
        sourceLinks: ["https://www.aspirion.com/services/ar-management/"],
      },
      {
        categoryName: "Prior Authorization",
        rank: 1,
        reasoning:
          "While they primarily focus on denials and AR, they also offer prior auth denials services. They advertise prior auth denial services, though do not have key metrics published making it an emerging offering.",
        sourceLinks: ["https://www.aspirion.com/mounting-prior-authorization-denials-worsen-hospital-payer-relations/"],
      },
    ],
  },
  {
    id: 10,
    name: "AKASA",
    description:
      "AI-powered revenue cycle automation platform with comprehensive RCM solutions.",
    website: "https://akasa.com",
    founded: "2018",
    fundingStage: "Series B",
    totalFunding: "$60M",
    keyMetrics: [
      "AI-powered coding and authorization",
      "$3.1 M in potential revenue imapct",
      "8x more coding opportunities compared to other solutions",
      "40% higher coding accuracy vs. GPT-4",
    ],
    categories: [],
    reasoning:
      "AKASA provides AI-native RCM solutions with focus on coding and authorization automation.",
    sourceLinks: [
      "https://akasa.com/blog/why-medical-coding-needs-generative-ai/",
      "https://akasa.com/press/akasa-debuts-cdi-optimizer/", "https://www.dhiwise.com/post/akasa-healthcare-revenue-cycle-automation-platform", "https://akasa.com/solutions/auth-status/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "AKASA is an industry leader in AI coding, with its generative AI models platform delivering up to 85% medical coding accuracy. The system is trained on each health system’s unique data and links code recommendations to supporting clinical text. This improves coding precision, reduces denials, and drives better financial outcomes.",
        sourceLinks: ["https://akasa.com/blog/why-medical-coding-needs-generative-ai/"],
      },
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "AKASA’s CDI Optimizer reviews 100% of inpatient encounters, automatically identifying documentation gaps before billing. It surfaces only high-impact, evidence-backed queries, enabling efficient collaboration between CDI and coding teams. This leads to improved documentation quality and higher capture of clinical metrics.",
        sourceLinks: ["https://akasa.com/press/akasa-debuts-cdi-optimizer/"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 2,
        reasoning:
          "AKASA’s revenue cycle automation streamlines workflows, lowers manual burden, and reduces cost-to-collect for large health systems, saving 300 hours of staff time each month. Its GenAI-driven platform helps organizations process claims faster and with fewer errors. This results in lower denial rates and improved reimbursement timelines",
        sourceLinks: ["https://www.dhiwise.com/post/akasa-healthcare-revenue-cycle-automation-platform"],
      },
      {
        categoryName: "Prior Authorization",
        rank: 2,
        reasoning:
          "AKASA automates prior authorization by integrating GenAI to find payer requirements, extract documentation, and submit complete authorizations. The platform reduces work queue volumes by 22% and finds 15% more relevant clinical documentation to support thorough submissions. It’s a strong solution, but lacks the performance metrics as other companies in the space.",
        sourceLinks: ["https://akasa.com/solutions/auth-status/"],
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
      "27% fewer coding errors than board-certified physicians",
      "$4.50 average revenue increase per E/M visit",
    ],
    categories: [],
    reasoning:
      "Ambience CDI focuses on ambient clinical documentation improvement with AI-powered real-time capabilities.",
    sourceLinks: [
      "https://www.ambiencehealthcare.com/product/cdi",
      "https://www.ambiencehealthcare.com/product/outpatient",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "Ambience CDI provides ambient clinical documentation improvement with AI-powered real-time capabilities. They offer 20% improvement in accurate diagnosis captured with MEAT-compliant criteria, 10% uplift in HCC capture, and $4.50 average revenue increase per E/M visit.",
        sourceLinks: ["https://www.ambiencehealthcare.com/product/cdi"],
      },
      {
        categoryName: "Ambient AI Scribing",
        rank: 3,
        reasoning:
          "Ambience is an industry leader in ambient AI scribing, outperforming competing solutions with 70-80% clinician utilization—significantly higher than the industry average. Its platform generates a 38% average reduction in documentation time according to Epic UAL data and offers robust EHR integration, built-in coding awareness, and a model that speaks the unique language of each specialty and subspecialty.",
        sourceLinks: ["https://www.ambiencehealthcare.com/product/outpatient"],
      },
    ],
  },
  {
    id: 12,
    name: "Regard",
    description:
      "AI-powered clinical documentation integrity platform with real-time capabilities.",
    website: "https://regard.com",
    founded: "2017",
    fundingStage: "Series B",
    totalFunding: "$80M",
    keyMetrics: [
      "Real-time CDI capabilities",
      "75% adoption across all partners ",
      "Increased CC/MCC capture by 17% enabling a 4X ROI per user",
      "$50 million in ROI for customers in 2024",
    ],
    categories: [],
    reasoning:
      "Regard provides AI-powered clinical documentation integrity with focus on real-time capabilities and quality improvement.",
    sourceLinks: [
      "https://regard.com/article/ai-and-proactive-documentation-transforming-healthcare-beyond-reactive-solutions/",
      "https://regard.com/case-study/midwest-health-system-solutions-brief/", "https://regard.com/case-study/ai-close-clinical-insights-gap-for-proactive-documentation/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "CDI Prompt & Query",
        rank: 3,
        reasoning:
          "Regard’s AI powers proactive documentation that identifies documentation gaps and missing diagnoses before billing. Hospitals using Regard see over a 17% increase in capture of CC/MCCs, with 4x ROI per user, and producing a total of $50 million in ROI for all their customers. This comprehensive CDI approach, analyzing 100% of available patient data, positions Regard as a market leader in this category.",
        sourceLinks: ["https://regard.com/article/ai-and-proactive-documentation-transforming-healthcare-beyond-reactive-solutions/"],
      },
    ],
  },
  {
    id: 13,
    name: "Adonis",
    description:
      "AI-driven revenue cycle automation platform with comprehensive denials management.",
    website: "https://adonis.com",
    founded: "2022",
    fundingStage: "Series B",
    totalFunding: "$54M",
    keyMetrics: [
      "Works with over 3,000 different payers + 10,000 providers",
      "Over 10,000 providers served, $13.3B in charges processed",
      "35+ EHR systems supported",
      "90% success rate in autonomous issue resolution",
    ],
    categories: [],
    reasoning:
      "Adonis provides AI-driven revenue cycle automation with strong denials management capabilities.",
    sourceLinks: [
      "https://www.adonis.io/resources/claims-management-automation-with-ai-agents",
      "https://www.adonis.io/case-study/25-fewer-denials-5-7x-roi-fox-valley-orthopedics-ai-powered-rcm-transformation",
    "https://www.adonis.io/case-study/emergency-medicine-provider-boosts-financial-outcomes",],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Denial Triage & Categorization",
        rank: 3,
        reasoning:
          "Adonis Intelligence help prioritize high-value claims, detect underpayments, and prevent denials proactively. The platform has proven a 90% success rate in autonomous issue resolution, fueling strong client revenue growth. Case studies have shown 25% fewer denials with 5.7x ROI.",
        sourceLinks: ["https://www.adonis.io/resources/claims-management-automation-with-ai-agents"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 2,
        reasoning:
          "Adonis supports faster A/R cycles by reducing denials and automating collections workflows. Case studies have shown +22% AR collection velocity, recieving payment 14 days sooner on average. However, the platform is less focused on A/R than denials.",
        sourceLinks: ["https://www.adonis.io/case-study/emergency-medicine-provider-boosts-financial-outcomes"],
      },
    ],
  },
  {
    id: 14,
    name: "PayZen",
    description:
      "AI-powered patient payment optimization platform with predictive analytics.",
    website: "https://payzen.com",
    founded: "2019",
    fundingStage: "Series B",
    totalFunding: "$70M",
    keyMetrics: [
      "30% increase in patient collections after implementation",
      "78% payment plan enrollment rate",
      "Non-recourse financing and fast onboarding",
      "Bad debt reduction capabilities",
    ],
    categories: [],
    reasoning:
      "PayZen provides AI-powered patient payment optimization with predictive analytics and personalized payment solutions.",
    sourceLinks: [
      "https://payzen.com/essential-questions-to-ask-when-evaluating-a-patient-financing-partner/",
      "https://payzen.com/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Digital Billing & Reminders",
        rank: 3,
        reasoning:
          "PayZen uses AI to analyze patient data and offer personalized, interest-free payment plans. By incorporating reminders and flexible payment options, providers using PayZen report a 32% increase in collections and a 30% reduction in bad debt.",
        sourceLinks: ["https://payzen.com/essential-questions-to-ask-when-evaluating-a-patient-financing-partner/"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 2,
        reasoning:
          "PayZen is a top performer in improving A/R by converting patient balances into guaranteed upfront revenue through AI-driven, non-recourse financing. They have demonstrated a 20% increase in pre-service patient collections and 10% lower cost to collect, lowering administrative burden.",
        sourceLinks: ["https://payzen.com/"],
      },
    ],
  },
  {
    id: 15,
    name: "Cedar",
    description:
      "Patient financial experience platform with AI-powered billing and payment solutions.",
    website: "https://cedar.com",
    founded: "2016",
    fundingStage: "Series C",
    totalFunding: "$200M",
    keyMetrics: [
      "30% increase in patient payments after implementation",
      "73% median digital payment rate",
      "95% digital self-service payment adoption",
      "89–88% patient satisfaction rates",
    ],
    categories: [],
    reasoning:
      "Cedar Pay provides comprehensive patient financial experience with AI-powered billing optimization and payment solutions.",
    sourceLinks: [
      "",
      "https://www.cedar.com/solutions/cedarpay/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Digital Billing & Reminders",
        rank: 3,
        reasoning:
          "Cedar Pay is a leading digital billing and payment platform, delivering up to a 30% lift in patient payments and a 73% digital payment rate with automated, omni-channel reminders. Its powerful engagement, personalized payment options, and intuitive UX position it as an industry flagship for digital patient billing.",
        sourceLinks: ["https://cedar.com/solutions/billing"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 3,
        reasoning:
          "Cedar Pay drives faster collections and reduces A/R cycles by empowering patients to pay digitally, matching bills to EOBs, and surfacing HSA balances for immediate resolution. Providers consistently report increased cash flow, reduced cost to collect, and up to $15M+ annual payment lifts at system scale. ",
        sourceLinks: ["https://www.cedar.com/solutions/cedarpay/"],
      },
      {
        categoryName: "Payment Reconciliation",
        rank: 1,
        reasoning:
          "Automated tracking from digital bills and payments through real-time dashboards streamlines payment reconciliation for patient charges. Cedar Pay integrates with provider billing and EHR systems for consolidated financial reporting, though it does not serve as an official reconciliation platform.",
        sourceLinks: ["https://www.cedar.com/novant-health/"],
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
    founded: "2018",
    fundingStage: "Series A",
    totalFunding: "$65M",
    keyMetrics: [
      "Improve coding accuracy to over 95%",
      "Reduce coding costs by up to 35%",
      "Decrease time in accounts receivable by up to 5 days",
      "Reduce claims denial rates by 50% ",
    ],
    categories: [],
    reasoning:
      "Nym provides AI-powered autonomous coding with advanced natural language processing for clinical documentation analysis.",
    sourceLinks: [
      "https://nym.health/product/autonomous-coding/",
      "https://go.nym.health/health-system-reduces-costs-improves-revenue-capture-stabilizes-dnfb-autonomous-coding-case-study", "https://blog.nym.health/reducing-denials-with-autonomous-coding-medical-coding", "https://aviaconnectcontent.s3.amazonaws.com/f68a2971-5112-4581-8c9d-666d2b18b185", 
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "AI Coding (Autonomous)",
        rank: 3,
        reasoning:
          "Nym Health is an industry leader in fully autonomous medical coding, delivering over 95%–96% accuracy at scale. The platform processes millions of charts across complex specialties, resulting in substantial cost savings, rapid reimbursement, and widespread hospital adoption.",
        sourceLinks: ["https://nym.health/product/autonomous-coding/"],
      },
      {
        categoryName: "Charge Capture",
        rank: 2,
        reasoning:
          "By ensuring accurate and complete code assignment from available documentation, Nym improves charge capture and compliance. This closes gaps in billable service assignment, though it operates as a coding automation engine rather than a dedicated charge capture platform.",
        sourceLinks: ["https://go.nym.health/health-system-reduces-costs-improves-revenue-capture-stabilizes-dnfb-autonomous-coding-case-study"],
      },
      {
        categoryName: "Denial Triage & Categorization",
        rank: 3,
        reasoning:
          "Nym delivers industry-leading results in coding-related denial prevention and monitoring. With 97% decrease in radiology professional fee coding-related denial rate and reduced coding-related denials to less than 0.1%.",
        sourceLinks: ["https://blog.nym.health/reducing-denials-with-autonomous-coding-medical-coding"],
      },
      {
        categoryName: "Accounts Receivable",
        rank: 2,
        reasoning:
          "Nym’s automation leads to a reduction of up to 5 days in A/R cycles by ensuring claims are coded correctly and released quickly. While this improves cash flow, the A/R capability is an indirect benefit of upstream automation rather than a dedicated A/R management feature.",
        sourceLinks: ["https://aviaconnectcontent.s3.amazonaws.com/f68a2971-5112-4581-8c9d-666d2b18b185"],
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
    name: "Health Note",
    description:
      "Health Note’s intelligent voice and intake solutions streamline pre-visit workflows—automating routine conversations, improving patient experience, and optimizing access to care.",
    website: "https://www.healthnote.com/",
    founded: "2018",
    fundingStage: "Series A",
    totalFunding: "$20M",
    keyMetrics: [
      "Captures over 500,000 visit summaries monthly",
      "80–100% pre-visit patient intake completion rate",
      "Increase data filed correctly in Epic to 71%",
      "Accelerates reimbursement cycle and prompt error resolution",
    ],
    categories: [],
    reasoning:
      "Health Note delivers digital patient intake and ambient AI scribing with intelligent automation for enhanced clinical documentation and patient experience.",
    sourceLinks: [
      "https://www.healthitoutcomes.com/doc/health-note-adds-ambient-ai-scribing-to-its-clinical-platform-0001",
      "https://www.healthnote.com/health-note-for-epic/",
    ],
    isAiNative: true,
    categoryRankings: [
      {
        categoryName: "Ambient AI Scribing",
        rank: 3,
        reasoning:
          "Health Note is an industry leader in ambient AI scribing, generating and structuring over 500,000 medical visit summaries each month using advanced NLP and generative AI. The solution collects 2.5x more relevant data, results in 50% reduction in clinical documentation, and has written 10.1 million clinical notes.",
        sourceLinks: ["https://www.healthitoutcomes.com/doc/health-note-adds-ambient-ai-scribing-to-its-clinical-platform-0001"],
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
