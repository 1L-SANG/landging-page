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
                position: "relative",
                transition: "all 300ms ease",
            }}
        >
            {/* Rotating gradient background layer — filter only affects this div, not children */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    background:
                        "conic-gradient(from 180deg, #12ADE6, #4C63FC, #DC4CFC, #FF0080, #EE00FF, #12B4E6, #12ADE6)",
                    animation: "gradientShift 8s linear infinite",
                }}
            />
            <div
                className={innerClassName}
                style={{
                    borderRadius: "22px",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {children}
            </div>
        </div>
    );
}
