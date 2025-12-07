import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Case Studies",
    description: "Explore our portfolio of successful projects across healthcare, e-commerce, education, finance, and real estate.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
