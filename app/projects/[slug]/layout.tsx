import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details | Annie Phung Portfolio",
  description:
    "Detailed case study of projects by Annie Phung, frontend developer.",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
