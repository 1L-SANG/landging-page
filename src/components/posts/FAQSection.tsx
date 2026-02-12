"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "어떤 종류의 제품 사진을 업로드할 수 있나요?",
        answer:
            "의류, 잡화, 액세서리 등 대부분의 패션 제품을 지원합니다. 바닥컷, 행거컷, 마네킹컷 등 어떤 형태든 괜찮습니다. 스마트폰으로 촬영한 사진도 충분합니다.",
    },
    {
        question: "생성된 이미지의 퀄리티는 어느 정도인가요?",
        answer:
            "전문 스튜디오에서 촬영한 것과 동등한 수준의 고해상도 이미지를 제공합니다. 실제 쇼핑몰에 바로 업로드할 수 있는 퀄리티입니다.",
    },
    {
        question: "한 번에 여러 장을 처리할 수 있나요?",
        answer:
            "네, 대량 업로드 기능을 제공합니다. Professional 플랜 이상에서 배치 처리가 가능하며, 수백 장을 한 번에 처리할 수 있습니다.",
    },
    {
        question: "생성에 걸리는 시간은 얼마나 되나요?",
        answer:
            "1장 기준 약 10-30초 정도 소요됩니다. 배치 처리 시에도 장당 처리 시간은 동일하며, 병렬 처리로 빠르게 완료됩니다.",
    },
    {
        question: "무료 체험이 가능한가요?",
        answer:
            "네, 가입 즉시 무료 크레딧이 제공됩니다. 결제 정보 없이도 서비스를 체험해 보실 수 있습니다.",
    },
    {
        question: "기존 쇼핑몰 플랫폼과 연동되나요?",
        answer:
            "카페24, 스마트스토어, 쿠팡 등 주요 플랫폼과의 연동을 지원하며, API를 통한 커스텀 연동도 가능합니다.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="relative py-24 md:py-32 px-6"
            style={{
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                backdropFilter: "blur(30px)",
            }}
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="text-[13px] font-semibold text-[#9E9E9E] tracking-[0.12em] uppercase mb-4">
                        FAQ
                    </div>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4">
                        자주 묻는 질문
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-[760px] mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#F0F0F0] rounded-2xl overflow-hidden transition-all"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-7 py-6 flex items-center justify-between text-left hover:bg-[#FAFAFA] transition-colors"
                            >
                                <span className="text-[16px] md:text-[18px] font-semibold text-[#1A1A1A] pr-4">
                                    {faq.question}
                                </span>
                                <Plus
                                    size={24}
                                    className={`text-[#1A1A1A] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-7 pb-6 pt-0 border-t border-[#F0F0F0]">
                                    <p className="text-[16px] text-[#6B6B6B] leading-[1.7] mt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
