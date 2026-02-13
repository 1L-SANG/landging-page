"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GradientBorderContainer } from "@/components/common/GradientBorderContainer";
import { SurveyModal } from "@/components/common/SurveyModal";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function HeroSection() {
    const [surveyOpen, setSurveyOpen] = useState(false);

    const scrollToFeatures = () => {
        smoothScrollTo("features", 1200);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[72px] pb-12"
        >
            {/* Hero Text */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[720px] mb-12 md:mb-16">
                <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F0F0F0] rounded-full mb-6">
                        <span className="text-[12px] font-semibold text-[#1A1A1A] tracking-[0.1em] uppercase">
                            AI-Powered Product Photography
                        </span>
                    </div>
                </div>

                <h1
                    className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 animate-fade-up"
                    style={{ animationDelay: "200ms" }}
                >
                    제품 사진 하나로
                    <br />
                    쇼핑몰 촬영의 모든 것을
                    <br />
                    대체하다
                </h1>

                <p
                    className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.7] max-w-[520px] mb-10 animate-fade-up"
                    style={{ animationDelay: "500ms" }}
                >
                    스튜디오, 모델, 조명 없이. 제품 사진만 올리면 완성됩니다.
                </p>

                {/* Inline Survey (replaces CTA button when open) */}
                <div
                    className="w-full max-w-[500px] animate-fade-up"
                    style={{ animationDelay: "700ms" }}
                >
                    <SurveyModal open={surveyOpen} onOpenChange={setSurveyOpen} />
                </div>

                {/* Secondary CTA */}
                <div
                    className="flex items-center gap-4 mt-6 animate-fade-up"
                    style={{
                        animationDelay: "700ms",
                        opacity: surveyOpen ? 0 : 1,
                        transform: surveyOpen ? "translateY(10px)" : "translateY(0)",
                        transition: "all 0.35s ease",
                        pointerEvents: surveyOpen ? "none" : "auto",
                    }}
                >
                    <button
                        onClick={scrollToFeatures}
                        className="flex items-center gap-2 text-[15px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors group"
                    >
                        서비스 소개 보기
                        <ChevronDown size={16} className="animate-bounce" />
                    </button>
                </div>

                <div
                    className="flex items-center gap-3 text-[14px] text-[#9E9E9E] mt-6 animate-fade-up"
                    style={{
                        animationDelay: "900ms",
                        opacity: surveyOpen ? 0 : 1,
                        transition: "opacity 0.35s ease",
                    }}
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E5E5E5] to-[#F0F0F0] border-2 border-white"
                            />
                        ))}
                    </div>
                    <span>이미 1,200+ 셀러가 관심을 보이고 있습니다</span>
                </div>
            </div>

            {/* Demo Video */}
            <div
                className="relative z-10 w-full max-w-[900px] animate-fade-up"
                style={{ animationDelay: "1100ms" }}
            >
                <GradientBorderContainer>
                    <div className="relative overflow-hidden bg-black">
                        <video
                            src="/demo.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto block"
                        />
                    </div>
                </GradientBorderContainer>
            </div>
        </section>
    );
}
