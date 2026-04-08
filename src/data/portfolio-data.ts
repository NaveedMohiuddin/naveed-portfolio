// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to update all site content
// ═══════════════════════════════════════════════════════════

export const PERSONAL = {
  name: "Naveed Mohiuddin",
  title: "Data Engineer",
  tagline: "Building scalable data systems and cloud-native platforms.",
  location: "Seattle, WA",
  email: "naveedmohiuddin0311@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveed-mohiuddin/",
  github: "https://github.com/NaveedMohiuddin",
  resumeUrl: "/Naveed_Resume.pdf", // ← Place your resume PDF in the /public folder with this name
  heroSummary:
    "Hands-on experience in production ETL, distributed processing, and data modeling across AWS and Azure — backed by two AWS certifications and a Master's in Computer Science.",
};

export const NAV_ITEMS = [
  "About",
  "Skills",
  "Certifications",
  "Experience",
  "Projects",
  "Why Me",
  "Contact",
];

export const SKILLS = [
  {
    category: "Data Engineering",
    items: [
      "ETL/ELT", "Data Modeling", "Distributed Processing",
      "Batch & Streaming Pipelines", "Medallion Architecture",
      "Star Schema", "SCD Type 2", "Data Quality",
    ],
  },
  {
    category: "Cloud Platforms",
    items: [
      "AWS S3", "AWS Glue", "Redshift", "Lambda", "Athena",
      "EC2", "EventBridge", "Azure Data Factory", "Databricks",
      "Synapse Analytics", "ADLS Gen2",
    ],
  },
  {
    category: "Big Data",
    items: [
      "Apache Spark", "PySpark", "Kafka", "HDFS",
      "Hadoop", "Hive", "Delta Lake", "Apache Iceberg",
    ],
  },
  {
    category: "Orchestration & DevOps",
    items: [
      "Apache Airflow", "CI/CD", "Azure DevOps",
      "Git", "GitHub", "Docker",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark", "Java", "Linux", "Bash"],
  },
  {
    category: "Analytics & BI",
    items: ["Power BI", "Athena Queries", "Synapse", "Redshift Spectrum"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Data Engineer – Associate",
    badge: "DEA",
    desc: "Validates expertise in designing and maintaining data pipelines, data stores, data processing, security, and governance on AWS.",
    tags: ["S3", "Glue", "Redshift", "Athena", "Lake Formation", "Kinesis"],
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    badge: "SAA",
    desc: "Demonstrates ability to design secure, scalable, and cost-optimized cloud architectures using AWS services.",
    tags: ["EC2", "VPC", "IAM", "Lambda", "CloudFormation", "RDS"],
  },
];

// ═══════════════════════════════════════════════════════════
// UPDATED EXPERIENCE — Replace the EXPERIENCE array in
// src/data/portfolio-data.ts with this version
//
// Portfolio bullets are intentionally longer and more
// detailed than resume bullets — this is where recruiters
// come to learn more after the resume hooks them.
// ═══════════════════════════════════════════════════════════

// export const EXPERIENCE = [
//   {
//     role: "Data Engineer",
//     company: "Benda Infotech",
//     client: null,
//     location: "Remote, US",
//     dates: "Jul 2025 – Present",
//     tech: [
//       "AWS S3", "Glue", "Lambda", "Redshift",
//       "Athena", "EventBridge", "PySpark", "Airflow",
//       "SQL", "Python", "Parquet", "CI/CD", "CloudWatch", "SNS",
//     ],
//     bullets: [
//       "Designed and built a fully serverless ETL pipeline using AWS S3, Lambda, and Glue that processes ~1M records daily with 99.9% reliability — replacing fragile EC2-based scripts that failed multiple times per week and required manual restarts",
//       "Developed PySpark transformation jobs in AWS Glue with schema-on-read validation, business-key deduplication via window functions, and type standardization, reducing overall batch processing time by 40% through careful DPU sizing and join optimization",
//       "Modeled dimensional star-schema datasets (fact and dimension tables) and loaded them into Amazon Redshift using idempotent delete-then-insert MERGE patterns, ensuring safe pipeline reruns without duplicates and improving dashboard query performance by 35%",
//       "Orchestrated end-to-end data workflows using Apache Airflow DAGs with SLA monitoring, task-level retries with exponential backoff, and dependency management — reducing manual intervention by 60% and providing full pipeline visibility",
//       "Optimized Athena ad-hoc analytics queries through partition pruning, Parquet columnar conversion with Snappy compression, and Glue Data Catalog integration for centralized schema management, cutting query execution costs by 30–40%",
//       "Built CI/CD pipelines for Glue job deployments with automated record-count validation across pipeline layers, schema-drift detection with diff reporting, and SNS-to-Slack alerting — reducing release cycles from 2 days to hours while maintaining 99%+ data consistency",
//     ],
//   },
//   {
//     role: "Software Engineer (Data Engineering)",
//     company: "Applied Information Sciences",
//     client: "GEICO",
//     location: "Hyderabad, India → Remote US",
//     dates: "Feb 2022 – Jul 2023",
//     tech: [
//       "Azure Data Factory", "Databricks", "PySpark", "Delta Lake",
//       "ADLS Gen2", "Synapse Analytics", "Kafka", "SQL",
//       "Python", "Power BI", "Azure DevOps", "CI/CD",
//     ],
//     bullets: [
//       "Engineered Azure Data Factory pipelines to ingest policy, claims, and CRM data (10M+ records) from SQL Server, Oracle, and CRM sources into ADLS Gen2, using incremental extraction based on modified timestamps and parameterized pipeline templates for reusability across source tables",
//       "Built distributed PySpark transformation workflows in Azure Databricks following a medallion architecture — Bronze for raw ingestion, Silver for cleansed and standardized data, Gold for business-ready dimensional models — reducing overall runtime by 30% through auto-scaling clusters and partition optimization",
//       "Implemented Delta Lake curated layers with SCD Type 2 dimension tables using MERGE logic to preserve full data history for compliance requirements, while reducing reconciliation issues by 25% through Delta's ACID transaction guarantees that eliminated partial writes and dirty reads",
//       "Developed Kafka-based streaming workflows using Databricks Structured Streaming to process time-sensitive claims events in near real-time, replacing batch-only ingestion that had multi-hour latency and tuning consumer parallelism to handle peak-hour volume spikes",
//       "Automated CI/CD deployment of ADF pipelines via Azure DevOps using ARM template exports, making releases repeatable and auditable across dev/test/prod environments and reducing deployment errors by 40% compared to previous manual JSON export-import process",
//       "Delivered analytics-ready dimensional datasets to Azure Synapse Analytics with clean data models and documentation, improving reporting turnaround by 50% and supporting Power BI dashboards used by actuarial, underwriting, and business intelligence teams for daily decision-making",
//     ],
//   },
// ];

export const EXPERIENCE = [
  {
    role: "Data Engineer",
    company: "Benda Infotech",
    client: null,
    location: "Remote, US",
    dates: "Jul 2025 – Present",
    tech: [
      "AWS S3", "Glue", "Lambda", "Redshift",
      "Athena", "PySpark", "Airflow", "CI/CD",
    ],
    bullets: [
      "Architected serverless ETL pipelines on AWS (S3, Lambda, Glue) processing 1M+ records daily at 99.9% reliability",
      "Developed PySpark transformation jobs in Glue, cutting batch processing time by 40% through join optimization and partition tuning",
      "Designed dimensional star-schema models loaded into Redshift, boosting dashboard query performance by 35%",
      "Implemented Airflow scheduling with SLA monitoring, reducing manual intervention by 60%",
      "Optimized Athena queries via partition pruning and compression, lowering execution costs 30–40%",
      "Built CI/CD pipelines that reduced release cycles from 2 days to hours with 99%+ data quality validation",
    ],
  },
  {
    role: "Software Engineer (Data Engineering)",
    company: "Applied Information Sciences",
    client: "GEICO",
    location: "Hyderabad, India → Remote US",
    dates: "Feb 2022 – Jul 2023",
    tech: [
      "Azure Data Factory", "Databricks", "PySpark", "Delta Lake",
      "ADLS Gen2", "Synapse", "Kafka", "Power BI",
    ],
    bullets: [
      "Engineered Azure Data Factory pipelines ingesting policy, claims, and CRM data (10M+ records) into ADLS Gen2",
      "Built distributed PySpark transformations in Databricks, reducing runtime by 30% via auto-scaling and partition optimization",
      "Implemented Delta Lake curated layers with SCD Type 2 MERGE logic, reducing reconciliation issues by 25%",
      "Developed Kafka-based streaming workflows that cut data latency from hours to near real-time",
      "Automated CI/CD deployment of ADF pipelines via Azure DevOps, reducing deployment errors by 40%",
      "Delivered analytics-ready datasets to Synapse, improving reporting turnaround by 50%",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AWS Lakehouse & Analytics Platform",
    summary:
      "End-to-end serverless data lake with dimensional modeling and query-optimized analytics layer on AWS.",
    problem:
      "Needed a cost-efficient, scalable pipeline to ingest, transform, and serve large datasets for analytical workloads without managing servers.",
    highlights: [
      "Serverless ETL with Glue and PySpark for schema evolution and data cleansing",
      "Dimensional models loaded into Redshift with Airflow-orchestrated workflows",
      "Cost-optimized Athena queries with partitioning and Iceberg table format",
      "Automated ingestion from public APIs with deduplication logic",
    ],
    tech: ["AWS S3", "Glue", "Athena", "Redshift", "Airflow", "PySpark", "Iceberg"],
    github: "https://github.com/NaveedMohiuddin", // ← update to specific repo
  },
  {
    title: "Big Data Processing with Spark",
    summary:
      "Large-scale distributed data processing on Hadoop clusters using Spark DataFrames and GCP Dataproc.",
    problem:
      "Processing and analyzing massive datasets that exceeded single-machine capacity, requiring distributed computing with optimized joins.",
    highlights: [
      "Distributed processing using Spark DataFrames on HDFS-backed clusters",
      "Schema validation, data cleansing, and aggregation pipelines",
      "Optimized shuffle operations and join strategies for performance",
      "Deployed on GCP Dataproc for managed cluster orchestration",
    ],
    tech: ["Apache Spark", "HDFS", "GCP Dataproc", "SQL", "Python"],
    github: "https://github.com/NaveedMohiuddin", // ← update to specific repo
  },
  
];

export const WHY_HIRE = [
  {
    title: "Production Engineering Experience",
    desc: "Hands-on work building and supporting data systems at enterprise scale — not just tutorials or coursework.",
  },
  {
    title: "AWS Certified",
    desc: "Two AWS certifications validating cloud architecture and data engineering competency.",
  },
  {
    title: "Full-Stack Data Skills",
    desc: "End-to-end capability across ingestion, transformation, modeling, orchestration, and analytics.",
  },
  {
    title: "Measurable Impact",
    desc: "Consistent track record of reducing costs, improving performance, and automating manual processes.",
  },
  {
    title: "Modern Tooling",
    desc: "Fluent in PySpark, Airflow, Delta Lake, Kafka, and both AWS and Azure ecosystems.",
  },
  {
    title: "Strong Academic Foundation",
    desc: "Master's in CS from Illinois Institute of Technology, combining depth with practical engineering.",
  },
];
