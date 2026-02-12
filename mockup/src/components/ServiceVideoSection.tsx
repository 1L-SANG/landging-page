import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { GradientBorderContainer } from './GradientBorderContainer';

export function ServiceVideoSection() {
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

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(30px)' }}>
      {/* Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'rgba(235, 230, 220, 0.5)',
        }}
      />
      
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[13px] font-semibold text-[#9E9E9E] tracking-[0.12em] uppercase mb-4">
            SEE IT IN ACTION
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1A1A1A] mb-4">
            직접 확인하세요
          </h2>
          <p className="text-[18px] text-[#6B6B6B] max-w-[560px] mx-auto">
            실제 서비스 이용 과정을 영상으로 확인해 보세요.
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`max-w-[960px] mx-auto transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <GradientBorderContainer>
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E5] flex items-center justify-center group cursor-pointer overflow-hidden">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Play Button */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl transition-all group-hover:scale-110 group-hover:shadow-2xl">
                <Play size={24} className="text-[#1A1A1A] ml-1" fill="#1A1A1A" />
              </div>

              {/* Duration */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-[12px] font-medium">
                2:45
              </div>
            </div>
          </GradientBorderContainer>
        </div>
      </div>
    </section>
  );
}