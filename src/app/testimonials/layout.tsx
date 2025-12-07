import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials",
    description: "Read success stories from our students and clients. See how FDC Innovation Labs has transformed careers and businesses.",
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
