"use client";

import { useEffect, useRef, useState } from "react";
import { GradientBorderContainer } from "@/components/common/GradientBorderContainer";
import { Star } from "lucide-react";

const testimonials = [
    {
        rating: 5,
        quote:
            "촬영 비용이 월 200만원에서 거의 0원이 됐어요. 퀄리티는 오히려 더 일관성 있고요.",
        name: "김○○ 대표",
        role: "여성의류 전문 쇼핑몰",
    },
    {
        rating: 5,
        quote:
            "신상품 등록 속도가 3배 빨라졌어요. 이제 촬영 일정에 맞출 필요가 없으니까요.",
        name: "이○○ MD",
        role: "온라인 편집샵",
    },
    {
        rating: 5,
        quote:
            "모델 섭외, 스튜디오 예약... 이 스트레스가 사라진 것만으로도 가치 있습니다.",
        name: "박○○ 실장",
        role: "남성복 브랜드",
    },
];

export function TestimonialsSection() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = itemRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                },
                { threshold: 0.15 }
            );

            if (ref) observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <section
            className="relative py-24 md:py-32 px-6"
            style={{
                backgroundColor: "rgba(245, 245, 247, 0.6)",
                backdropFilter: "blur(30px)",
            }}
        >
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{ background: "rgba(235, 230, 220, 0.5)" }}
            />

            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="text-[13px] font-semibold text-[#9E9E9E] tracking-[0.12em] uppercase mb-4">
                        TESTIMONIALS
                    </div>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4">
                        셀러들의 실제 반응
                    </h2>
                    <p className="text-[18px] text-[#6B6B6B] max-w-[560px] mx-auto">
                        Wearless를 먼저 경험한 셀러들의 이야기
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1100px] mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className={`transition-all duration-600 ${visibleItems.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            <GradientBorderContainer innerClassName="bg-white">
                                <div className="p-8 hover:-translate-y-1 transition-transform duration-300">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className="text-[#FFB800] fill-[#FFB800]"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-[18px] font-medium text-[#1A1A1A] leading-[1.7] mb-6 italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>

                                    {/* Profile */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E5E5E5] to-[#F0F0F0]" />
                                        <div>
                                            <div className="text-[16px] font-semibold text-[#1A1A1A]">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-[14px] text-[#9E9E9E]">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GradientBorderContainer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
