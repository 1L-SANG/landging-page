"use client";

import { useEffect, useRef, useState } from "react";
import { GradientBorderContainer } from "@/components/common/GradientBorderContainer";
import { Lock } from "lucide-react";

export function ContactSection() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            console.log("Email submitted:", email);
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative bg-[#1A1A1A] py-24 md:py-32 px-6"
        >
            <div className="max-w-[800px] mx-auto">
                <div
                    className={`transition-all duration-600 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    <GradientBorderContainer innerClassName="bg-[#222222]">
                        <div className="p-10 md:p-14 text-center">
                            {/* Title */}
                            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                                지금 바로 시작하세요
                            </h2>

                            {/* Subtitle */}
                            <p className="text-[18px] text-white/65 max-w-[480px] mx-auto mb-10">
                                이메일을 남겨주시면, 서비스 오픈 시 가장 먼저 알려드립니다.
                                <br />
                                얼리버드 혜택도 함께 받아보세요.
                            </p>

                            {/* Form or Success Message */}
                            {!isSubmitted ? (
                                <form
                                    onSubmit={handleSubmit}
                                    className="max-w-[560px] mx-auto mb-4"
                                >
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="이메일을 입력하세요"
                                            required
                                            className="flex-1 px-5 py-4 bg-white/8 border-[1.5px] border-white/15 rounded-xl text-white text-[16px] placeholder:text-white/35 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                        />
                                        <button
                                            type="submit"
                                            className="px-8 py-4 bg-white text-[#1A1A1A] text-[16px] font-semibold rounded-xl hover:bg-white/85 transition-all whitespace-nowrap"
                                        >
                                            알림 신청
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="max-w-[560px] mx-auto mb-4 py-6 animate-fade-in">
                                    <div className="flex items-center justify-center gap-3 text-[#00C48C]">
                                        <div className="w-6 h-6 rounded-full bg-[#00C48C] flex items-center justify-center animate-scale-in">
                                            <svg
                                                className="w-4 h-4 text-white"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[18px] font-medium">
                                            신청이 완료되었습니다! 오픈 시 가장 먼저 알려드릴게요.
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* Security Note */}
                            <div className="flex items-center justify-center gap-2 text-[13px] text-white/35">
                                <Lock size={14} />
                                <span>스팸 없이, 서비스 소식만 보내드립니다.</span>
                            </div>
                        </div>
                    </GradientBorderContainer>
                </div>
            </div>
        </section>
    );
}
