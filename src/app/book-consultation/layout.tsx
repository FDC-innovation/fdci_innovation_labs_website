import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Consultation",
    description: "Schedule a free consultation with FDC Innovation Labs. Let's discuss your project and technology needs.",
};

export default function BookConsultationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
