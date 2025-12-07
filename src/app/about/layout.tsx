import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about FDC Innovation Labs - Uttarakhand's first AI-focused innovation community. Our mission, vision, and commitment to empowering students and businesses.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
