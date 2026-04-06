import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveed Mohiuddin | Data Engineer — AWS Certified",
  description:
    "Data Engineer with production experience in AWS, Azure, PySpark, ETL pipelines, and cloud data platforms. AWS Certified Solutions Architect & Data Engineer. MS in Computer Science.",
  keywords: [
    "Data Engineer", "Software Engineer", "AWS Certified", "Cloud Engineer",
    "Python", "SQL", "ETL", "Databricks", "Azure Data Factory", "Spark",
    "PySpark", "Azure", "AWS", "Data Modeling", "Redshift", "Airflow",
    "Delta Lake", "Kafka", "Data Pipeline", "Chicago"
  ],
  authors: [{ name: "Naveed Mohiuddin" }],
  openGraph: {
    title: "Naveed Mohiuddin | Data Engineer — AWS Certified",
    description:
      "Data Engineer building scalable cloud-native data platforms across AWS and Azure. Two AWS certifications, 3+ years experience, MS in Computer Science.",
    type: "website",
    locale: "en_US",
    // url: "https://naveedmohiuddin.com", // ← update with your domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveed Mohiuddin | Data Engineer",
    description:
      "AWS Certified Data Engineer with production experience in ETL, PySpark, cloud platforms, and distributed data systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
