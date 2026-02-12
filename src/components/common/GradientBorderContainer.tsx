"use client";

import { ReactNode } from "react";

interface GradientBorderContainerProps {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
}

export function GradientBorderContainer({
    children,
    className = "",
    innerClassName = "",
}: GradientBorderContainerProps) {
    return (
        <div
            className={`gradient-border-wrapper group ${className}`}
            style={{
                padding: "2px",
                borderRadius: "24px",
                background:
                    "conic-gradient(from 180deg, #12ADE6, #4C63FC, #DC4CFC, #FF0080, #EE00FF, #12B4E6, #12ADE6)",
                transition: "all 300ms ease",
                animation: "gradientShift 8s linear infinite",
            }}
        >
            <div
                className={innerClassName}
                style={{
                    borderRadius: "22px",
                    overflow: "hidden",
                }}
            >
                {children}
            </div>
        </div>
    );
}
