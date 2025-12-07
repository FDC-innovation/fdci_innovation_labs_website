import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our comprehensive technology services including AI integration, cloud solutions, full-stack development, Salesforce, and more.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
