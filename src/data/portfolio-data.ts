// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to update all site content
// Aligned to the current résumé (Naveed_DE_C_V1_1) as the
// single source of truth. Every claim here should be
// defensible in an interview and consistent with the resume.
// ═══════════════════════════════════════════════════════════

export const PERSONAL = {
  name: "Naveed Mohiuddin",
  title: "Data Engineer",
  subtitle: "AWS & Azure | Databricks",
  tagline: "Building reliable data pipelines and cloud-native lakehouse platforms.",
  location: "United States",
  email: "naveedmohiuddin0311@gmail.com",
  phone: "+1 773-394-9716",
  linkedin: "https://www.linkedin.com/in/naveed-mohiuddin/",
  github: "https://github.com/NaveedMohiuddin",
  website: "https://naveedmohiuddin.vercel.app",
  resumeUrl: "/Naveed_Mohiuddin_Resume.pdf", // ← Place resume PDF in /public with this name
  heroSummary:
    "Hands-on experience building batch and incremental pipelines across AWS, Azure, and Databricks with an emphasis on reliable reruns, data quality, production troubleshooting, and analytics-ready datasets. Two AWS certifications and a Master's in Computer Science.",
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

// ═══════════════════════════════════════════════════════════
// SKILLS — mirrors the resume's Technical Skills section
// ═══════════════════════════════════════════════════════════

export const SKILLS = [
  {
    category: "Cloud Platforms",
    items: [
      "AWS S3", "Glue", "Glue Data Catalog", "Lambda", "Redshift", "Athena",
      "EventBridge", "Kinesis", "SNS", "EC2", "RDS", "Lake Formation",
      "Azure Data Factory", "Azure Databricks", "Synapse Analytics",
      "ADLS Gen2", "Unity Catalog", "Azure DevOps",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "ETL/ELT", "Data-Lake & Medallion Architecture", "Dimensional Modeling",
      "SCD Type 2", "Batch Pipelines", "Incremental Pipelines",
      "Streaming Pipelines", "Data Quality", "Data Governance & Lineage",
      "Schema Evolution", "Reconciliation",
    ],
  },
  {
    category: "Big Data & Lakehouse",
    items: [
      "Apache Spark", "PySpark", "Spark SQL", "Structured Streaming",
      "Delta Lake", "Delta Live Tables (Lakeflow)", "Auto Loader",
      "Databricks Workflows", "Kafka", "Hadoop", "HDFS", "Hive",
      "MapReduce", "Parquet",
    ],
  },
  {
    category: "Databases & Warehouses",
    items: [
      "Amazon Redshift", "Athena", "Azure Synapse Analytics", "Snowflake",
      "SQL Server", "Oracle", "PostgreSQL", "MySQL",
    ],
  },
  {
    category: "Orchestration",
    items: [
      "Apache Airflow", "Amazon MWAA", "DAG Design", "SLA Monitoring",
      "Retries & Backfill", "Amazon EventBridge", "Azure Data Factory",
      "Databricks Workflows",
    ],
  },
  {
    category: "DevOps & Version Control",
    items: [
      "Git", "GitHub", "Bitbucket", "Azure DevOps", "GitHub Actions",
      "Jenkins", "CI/CD", "Docker", "Linux",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark", "Shell Scripting (Bash)", "Java", "Pandas"],
  },
  {
    category: "Analytics & BI",
    items: ["Amazon QuickSight", "Power BI", "Athena SQL", "Databricks SQL"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    badge: "SAA",
    desc: "Demonstrates ability to design secure, scalable, and cost-optimized cloud architectures using AWS services.",
    tags: ["EC2", "VPC", "IAM", "Lambda", "S3", "RDS"],
  },
  {
    title: "AWS Certified Data Engineer – Associate",
    badge: "DEA",
    desc: "Validates expertise in designing and maintaining data pipelines, data stores, data processing, security, and governance on AWS.",
    tags: ["S3", "Glue", "Redshift", "Athena", "Lake Formation", "Kinesis"],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    badge: "AZ",
    desc: "Covers core Azure services, cloud concepts, security, governance, and pricing fundamentals.",
    tags: ["Azure Core", "Storage", "Governance", "Pricing"],
  },
];

// ═══════════════════════════════════════════════════════════
// EXPERIENCE
// Portfolio bullets run longer than resume bullets, but every
// claim maps back to a resume bullet — no new metrics invented.
// ═══════════════════════════════════════════════════════════

export const EXPERIENCE = [
  {
    role: "Data Engineer",
    company: "Benda Infotech",
    client: null,
    location: "Remote, US",
    dates: "Jan 2025 – Present",
    tech: [
      "AWS S3", "Lambda", "EventBridge", "Glue", "Athena", "MWAA", "Airflow",
      "Azure Data Factory", "Azure Databricks", "Delta Lake", "ADLS Gen2",
      "PySpark", "Spark SQL", "Databricks SQL", "Parquet", "QuickSight",
      "Power BI", "Python", "SQL", "Git", "Azure DevOps",
    ],
    bullets: [
      "Build cloud data pipelines across AWS, Azure, and Databricks covering batch ingestion, transformation, validation, and reporting use cases — working across both stacks depending on where the source systems and consumers live.",
      "On AWS, develop Lambda and EventBridge-based ingestion into S3 with clearly separated raw and curated zones, designed so any load can be traced back to its source file and reprocessed in isolation without touching downstream data.",
      "On Azure, build ADF and Databricks pipelines using Delta Lake medallion layers (Bronze/Silver/Gold) for incremental ingestion, transformation, and curated reporting tables that analysts query directly.",
      "Write PySpark and Spark SQL logic for data cleaning, validation, joins, reconciliations, and curated table creation — standardizing types and applying business rules before data reaches reporting layers.",
      "Use Delta MERGE INTO alongside deterministic S3 object naming so that reruns are safe by design, which cut down the duplicate-load issues that previously required manual cleanup.",
      "Tune Athena and Delta workloads using columnar Parquet, partitioning, partition pruning, OPTIMIZE, and Z-ORDER to reduce both query latency and bytes scanned per query.",
      "Add record-count, load-completion, and quarantine checks at layer boundaries so failed or incomplete loads are caught in the pipeline rather than discovered by an analyst looking at a broken dashboard.",
      "Manage orchestration through Airflow and MWAA alongside ADF and Databricks Workflows, configuring retries, alerting, task dependencies, and parameterized backfill for reprocessing historical windows.",
      "Build Athena, Databricks SQL, QuickSight, and Power BI-ready datasets for operational and business reporting, and partner with analysts to translate reporting requirements into source-to-target mappings, validation rules, and reusable data models.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Applied Information Sciences",
    client: null,
    location: "Hyderabad, India",
    dates: "Feb 2021 – Jul 2023",
    tech: [
      "Azure Data Factory", "ADLS Gen2", "Azure Databricks", "PySpark",
      "Spark SQL", "Snowflake", "SQL Server", "Oracle", "Splunk",
      "Azure DevOps", "REST APIs", "Python", "SQL", "Git",
    ],
    bullets: [
      "Built and supported Azure-based data pipelines for policy, claims, and operational data spanning ADF, Databricks, Snowflake, and SQL-based source systems.",
      "Developed ADF ingestion pipelines pulling from SQL Server, Oracle, REST APIs, and flat files into ADLS Gen2 and Snowflake, handling the schema and connectivity differences each source type brought with it.",
      "Used control-table driven pipeline patterns so onboarding a new source became largely a configuration change rather than net-new ADF development, which cut repeated build work across the team.",
      "Implemented full-load and incremental extraction using watermark columns, runtime parameters, and validation checkpoints so pipelines could run reliably on a schedule without manual date handling.",
      "Wrote PySpark, Spark SQL, and SQL transformations to standardize schemas, apply validation rules, and prepare curated datasets for the Snowflake warehouse.",
      "Built reconciliation queries comparing source and target counts, checking load timestamps, and surfacing duplicate or missing records ahead of reporting cycles — catching issues before business users did.",
      "Investigated production failures across ADF, Databricks, Snowflake, and Splunk, tracing root cause through logs and dashboards, then executing controlled reruns and verifying downstream tables were correct.",
      "Maintained runbooks covering recurring failure patterns, validation steps, rerun procedures, and escalation paths so on-call handoffs didn't depend on tribal knowledge.",
      "Worked with business analysts, QA, and support teams to confirm reported data issues, validate fixes, and keep reporting cycles moving during month-end crunch periods.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// PROJECTS — matches the resume's Projects section
// ═══════════════════════════════════════════════════════════

export const PROJECTS = [
  {
    title: "Chicago Crime Analytics Data Lake",
    summary:
      "Scheduled serverless pipeline pulling public Chicago crime data into a queryable, partitioned S3 data lake with BI dashboards on top.",
    problem:
      "Public API data needed to land reliably on a schedule, stay replayable when transformation logic changed, and be queryable without standing up a warehouse.",
    highlights: [
      "Lambda and EventBridge pull records from the Socrata API on a schedule and store raw responses in S3",
      "Cleaned output written as date-partitioned Parquet for efficient Athena querying",
      "Curated tables registered in the Glue Data Catalog for schema management",
      "QuickSight views covering category, location, and time-of-day trends",
      "Raw layer preserved so the full history can be replayed when transformation logic changes",
    ],
    tech: [
      "AWS Lambda", "EventBridge", "S3", "Glue", "Athena",
      "QuickSight", "Python", "SQL", "Parquet",
    ],
    github: "https://github.com/NaveedMohiuddin/chicago-crime-lakehouse",
  },
  {
    title: "Azure Databricks Lakehouse Pipeline",
    summary:
      "Governed medallion lakehouse on Databricks combining batch and streaming ingestion with data-quality enforcement and access control.",
    problem:
      "Needed a lakehouse that handled both batch and near-real-time ingestion while enforcing data quality and governance inside the pipeline rather than bolting them on afterward.",
    highlights: [
      "Bronze/Silver/Gold architecture with ADF for ingestion and PySpark for validation and transformation",
      "Delta Lake providing versioned, replayable storage with time travel and schema evolution",
      "Delta Live Tables expectations enforcing data quality declaratively within the pipeline",
      "Kafka producers with Structured Streaming consumers for near-real-time ingestion",
      "Unity Catalog access controls covering governance, lineage, and column-level permissions",
    ],
    tech: [
      "Databricks", "Delta Lake", "Delta Live Tables", "Unity Catalog",
      "PySpark", "Structured Streaming", "Kafka", "Azure Data Factory",
    ],
    github: "https://github.com/NaveedMohiuddin",
  },
  {
    title: "Big Data Processing with Spark",
    summary:
      "Multi-format distributed processing on a Hadoop/HDFS cluster with hands-on Spark performance tuning.",
    problem:
      "Datasets exceeded single-machine capacity and an early join implementation was shuffle-bound, making runtimes unpredictable.",
    highlights: [
      "Processed CSV, JSON, and XML datasets on a GCP Dataproc Hadoop/HDFS cluster",
      "PySpark and Spark SQL for schema checks, cleansing, joins, and aggregations against a Hive metastore",
      "Traced a shuffle-heavy join through the Spark UI to identify the bottleneck",
      "Switched the smaller side to a broadcast join and retuned shuffle partitions, cutting data movement and job runtime",
    ],
    tech: [
      "PySpark", "Spark SQL", "HDFS", "Hive", "GCP Dataproc",
      "MapReduce", "Python",
    ],
    github: "https://github.com/NaveedMohiuddin/bigdata-spark-dataproc",
  },
];

// ═══════════════════════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════════════════════

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    dates: "Aug 2023 – May 2025",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Osmania University",
    location: "Hyderabad, India",
    dates: "Aug 2018 – June 2022",
  },
];

// ═══════════════════════════════════════════════════════════
// WHY HIRE ME
// ═══════════════════════════════════════════════════════════

export const WHY_HIRE = [
  {
    title: "Multi-Cloud, Not Just One Stack",
    desc: "Production work across AWS, Azure, and Databricks comfortable picking the right tool rather than forcing everything into one ecosystem.",
  },
  {
    title: "AWS Certified",
    desc: "Solutions Architect and Data Engineer Associate certifications, applied to real pipelines rather than kept on paper.",
  },
  {
    title: "Full Data Lifecycle",
    desc: "Ingestion, transformation, modeling, orchestration, data quality, and the BI layer analysts actually consume.",
  },
  {
    title: "Built for Safe Reruns",
    desc: "Idempotent load patterns, deterministic object naming, and quarantine checks pipelines designed so failures are recoverable, not catastrophic.",
  },
  {
    title: "Production Troubleshooting",
    desc: "Root-cause analysis across ADF, Databricks, Snowflake, and Splunk, with runbooks so fixes don't depend on one person's memory.",
  },
  {
    title: "Works With the Business",
    desc: "Translating reporting requirements into source mappings and validation rules alongside analysts, QA, and support teams.",
  },
];