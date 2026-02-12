import { useEffect, useRef, useState } from 'react';
import { GradientBorderContainer } from './GradientBorderContainer';
import { Wand2, Users, Palette, Zap } from 'lucide-react';

const features = [
  {
    number: '01',
    title: '원클릭 배경 제거 & 생성',
    description: '제품 사진을 올리면 배경이 자동으로 분리되고, 원하는 분위기의 새로운 배경이 즉시 생성됩니다.',
    tag: '배경 자동 생성',
    icon: Wand2,
  },
  {
    number: '02',
    title: '모델 없는 착용 컷',
    description: '모델 섭외, 스튜디오 예약 없이도 자연스러운 착용 이미지를 만들어 드립니다.',
    tag: 'AI 가상 피팅',
    icon: Users,
  },
  {
    number: '03',
    title: '일관된 쇼핑몰 톤 유지',
    description: '한번 설정한 브랜드 톤 앤 매너에 맞춰 모든 제품 이미지가 통일된 퀄리티로 생성됩니다.',
    tag: '브랜드 일관성',
    icon: Palette,
  },
  {
    number: '04',
    title: '대량 생산, 즉시 적용',
    description: '수백 장의 제품 이미지도 몇 분 안에 완성. 바로 쇼핑몰에 업로드할 수 있는 고해상도 결과물.',
    tag: '대량 처리',
    icon: Zap,
  },
];

export function FeaturesSection() {
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
    <section id="features" className="relative py-24 md:py-32 px-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(30px)' }}>
      {/* Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'rgba(235, 230, 220, 0.5)',
        }}
      />
      
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-[13px] font-semibold text-[#9E9E9E] tracking-[0.12em] uppercase mb-4">
            CORE FEATURES
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4">
            왜 Wearless인가요?
          </h2>
          <p className="text-[18px] text-[#6B6B6B] max-w-[560px] mx-auto">
            기존 촬영 프로세스의 한계를 넘어, 제품 사진 하나로 모든 것을 해결합니다.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => {
            const isImageLeft = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex flex-col ${
                  isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-16 max-w-[1100px] mx-auto transition-all duration-600 ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${(index % 2) * 200}ms`,
                }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <GradientBorderContainer>
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E5] rounded-[20px] overflow-hidden flex items-center justify-center group">
                      <Icon size={80} className="text-[#9E9E9E] transition-transform group-hover:scale-110" strokeWidth={1.5} />
                    </div>
                  </GradientBorderContainer>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="text-[14px] font-bold text-[#9E9E9E] mb-3">{feature.number}</div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#1A1A1A] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.7] max-w-[440px] mb-5 mx-auto md:mx-0">
                    {feature.description}
                  </p>
                  <div className="inline-flex px-4 py-2 bg-[#F0F0F0] rounded-full">
                    <span className="text-[14px] font-medium text-[#1A1A1A]">{feature.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}