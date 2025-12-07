import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Training & Student Empowerment",
    description: "Transform your career with our AI, Cloud, and Full-Stack Development training programs. Live projects, expert mentorship, and placement assistance.",
};

export default function TrainingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
