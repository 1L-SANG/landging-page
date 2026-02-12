import { Play, ChevronDown } from 'lucide-react';
import { GradientBorderContainer } from './GradientBorderContainer';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[72px] pb-12">
      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[720px] mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F0F0F0] rounded-full mb-6">
            <span className="text-[12px] font-semibold text-[#1A1A1A] tracking-[0.1em] uppercase">
              AI-Powered Product Photography
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          제품 사진 하나로
          <br />
          쇼핑몰 촬영의 모든 것을
          <br />
          대체하다
        </motion.h1>

        <motion.p
          className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.7] max-w-[520px] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          스튜디오, 모델, 조명 없이. 제품 사진만 올리면 완성됩니다.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-[#1A1A1A] text-white text-[17px] font-semibold rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:bg-[#333333] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all"
          >
            지금 시작하기
          </button>
          <button
            onClick={scrollToFeatures}
            className="flex items-center gap-2 text-[15px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors group"
          >
            서비스 소개 보기
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 text-[14px] text-[#9E9E9E]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
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
        </motion.div>
      </div>

      {/* Demo Video */}
      <motion.div
        className="relative z-10 w-full max-w-[900px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <GradientBorderContainer>
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E5] flex items-center justify-center group cursor-pointer overflow-hidden">
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Play Button */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl transition-all group-hover:scale-110 group-hover:shadow-2xl">
              <Play size={24} className="text-[#1A1A1A] ml-1" fill="#1A1A1A" />
            </div>

            {/* Video duration */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-[12px] font-medium">
              1:30
            </div>
          </div>
        </GradientBorderContainer>
      </motion.div>
    </section>
  );
}
