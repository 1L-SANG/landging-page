import { useState, useCallback } from "react";

const STEPS = [
  { id: "email", type: "email" },
  {
    id: "q1",
    type: "select",
    label: "01",
    q: "현재 제품 촬영은 어떻게 하고 계세요?",
    options: [
      { emoji: "📸", text: "스튜디오 촬영" },
      { emoji: "🤝", text: "외부 대행사" },
      { emoji: "📱", text: "스마트폰 직접" },
      { emoji: "🔄", text: "여러 방식 혼합" },
    ],
  },
  {
    id: "q2",
    type: "select",
    label: "02",
    q: "월 평균 촬영하는 제품 수는?",
    options: [
      { emoji: "🌱", text: "10개 이하" },
      { emoji: "📦", text: "11 ~ 50개" },
      { emoji: "🏭", text: "51 ~ 200개" },
      { emoji: "🚀", text: "200개 이상" },
    ],
  },
  {
    id: "q3",
    type: "select",
    label: "03",
    q: "촬영에서 가장 큰 고민은?",
    options: [
      { emoji: "💸", text: "비용이 부담" },
      { emoji: "⏰", text: "시간이 너무 오래" },
      { emoji: "🎨", text: "퀄리티 불균일" },
      { emoji: "🧑‍🎤", text: "모델 섭외 어려움" },
    ],
  },
  { id: "done", type: "done" },
];

export default function WearlessSurveyGlass() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState({});

  const current = STEPS[step];
  const totalQ = STEPS.filter((s) => s.type === "select").length;
  const qIdx = STEPS.slice(0, step).filter((s) => s.type === "select").length;
  const progress = step === 0 ? 0 : Math.min((step / (STEPS.length - 1)) * 100, 100);
  const isFull = progress >= 100;

  const goBack = useCallback(() => {
    if (step > 0) setStep(step - 1);
  }, [step]);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => { setStep(0); setEmail(""); setSelected({}); }, 400);
    } else {
      setStep(0);
      setOpen(true);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) setStep(1);
  };

  const handleSelect = (id, i) => {
    setSelected((p) => ({ ...p, [id]: i }));
    setStep((s) => s + 1);
  };

  return (
    <div style={styles.page}>
      {/* ── Orb Background ── */}
      <div style={styles.orbWrap}>
        <div style={styles.orb1} />
        <div style={styles.orb2} />
        <div style={styles.orb3} />
        <div style={styles.orbGlow} />
      </div>
      <div style={styles.grain} />

      {/* ── Hero ── */}
      <div style={styles.hero}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          <span style={styles.badgeLabel}>AI-Powered Product Photography</span>
        </div>

        <h1 style={styles.h1}>
          제품 사진 하나로
          <br />
          쇼핑몰 촬영의 모든 것을
          <br />
          대체하다
        </h1>
        <p style={styles.sub}>
          스튜디오, 모델, 조명 없이. 제품 사진만 올리면 완성됩니다.
        </p>

        {/* ── CTA / Survey Zone ── */}
        <div style={styles.ctaZone}>
          <div style={styles.crossfade}>
            {/* Button — same grid cell */}
            <button
              onClick={handleToggle}
              style={{
                ...styles.cta,
                gridArea: "1/1",
                opacity: open ? 0 : 1,
                transform: open ? "scale(0.9)" : "scale(1)",
                pointerEvents: open ? "none" : "auto",
              }}
              onMouseEnter={(e) => {
                if (!open) {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.22)";
                }
              }}
              onMouseLeave={(e) => {
                if (!open) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.15)";
                }
              }}
            >
              지금 시작하기 →
            </button>

            {/* Glass Panel — same grid cell, crossfade */}
            <div
              style={{
                ...styles.glassCard,
                gridArea: "1/1",
                opacity: open ? 1 : 0,
                transform: open ? "scale(1)" : "scale(0.96)",
                pointerEvents: open ? "auto" : "none",
              }}
            >
              {/* progress */}
              <div style={styles.progTrack}>
                <div style={{
                  ...styles.progFill,
                  width: `${progress}%`,
                  ...(isFull ? {
                    background: "linear-gradient(90deg,#12ADE6,#4C63FC,#DC4CFC,#FF0080,#12B4E6)",
                    backgroundSize: "200% 100%",
                    animation: "progShimmer 2.5s linear infinite",
                  } : {}),
                }} />
              </div>

              {/* close */}
              <button
                onClick={handleToggle}
                style={styles.closeBtn}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="#999" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>

              {/* content */}
              <div key={step} style={styles.stepWrap}>

                {/* ── EMAIL ── */}
                {current.type === "email" && (
                  <div style={styles.emailBlock}>
                    <div style={styles.mailIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="4" width="20" height="16" rx="3" stroke="#fff" strokeWidth="1.7" />
                        <path d="M2 7L12 13L22 7" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p style={styles.emailH}>얼리버드로 시작하세요</p>
                    <p style={styles.emailP}>
                      서비스 오픈 시 가장 먼저 알려드릴게요.
                      <br />
                      간단한 설문 참여 시 특별 혜택을 드립니다.
                    </p>
                    <form onSubmit={handleEmailSubmit} style={{ width: "100%" }}>
                      <div
                        style={styles.inputBox}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(26,26,26,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(26,26,26,0.06)"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          style={styles.input}
                          autoFocus
                        />
                        <button
                          type="submit"
                          style={{ ...styles.submitBtn, opacity: email.includes("@") ? 1 : 0.35 }}
                          onMouseEnter={(e) => email.includes("@") && (e.currentTarget.style.background = "#333")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1A1A")}
                        >
                          완료
                        </button>
                      </div>
                    </form>
                    <p style={styles.lockNote}>
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ marginRight: 4, verticalAlign: -1 }}>
                        <rect x="3" y="5.5" width="6" height="4.5" rx="1" stroke="#bbb" strokeWidth="1.1" />
                        <path d="M4.5 5.5V3.5a1.5 1.5 0 013 0V5.5" stroke="#bbb" strokeWidth="1.1" strokeLinecap="round" />
                      </svg>
                      스팸 없이, 서비스 소식만 보내드립니다.
                    </p>
                  </div>
                )}

                {/* ── QUESTION ── */}
                {current.type === "select" && (
                  <div>
                    <div style={styles.qTop}>
                      <span style={styles.qLabel}>{current.label}</span>
                      <span style={styles.qOf}>{qIdx + 1} / {totalQ}</span>
                    </div>
                    <p style={styles.qText}>{current.q}</p>
                    <div style={styles.opts}>
                      {current.options.map((o, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(current.id, i)}
                          style={{
                            ...styles.opt,
                            ...(selected[current.id] === i ? styles.optActive : {}),
                          }}
                          onMouseEnter={(e) => {
                            if (selected[current.id] !== i) {
                              e.currentTarget.style.background = "rgba(255,255,255,0.85)";
                              e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                              e.currentTarget.style.transform = "translateY(-2px)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selected[current.id] !== i) {
                              e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                              e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                              e.currentTarget.style.transform = "translateY(0)";
                            }
                          }}
                        >
                          <span style={styles.optEmoji}>{o.emoji}</span>
                          <span style={styles.optLabel}>{o.text}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={goBack}
                      style={styles.backBtn}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 4 }}>
                        <path d="M9 2.5L4 7L9 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      이전으로
                    </button>
                  </div>
                )}

                {/* ── DONE ── */}
                {current.type === "done" && (
                  <div style={styles.doneBlock}>
                    <div style={styles.doneCircle}>
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M8 14.5L12.5 19L20 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={styles.doneH}>신청 완료!</p>
                    <p style={styles.doneP}>
                      <strong style={{ color: "#1A1A1A" }}>{email}</strong>
                      <span>으로</span>
                      <br />오픈 소식을 가장 먼저 보내드릴게요.
                    </p>
                    <div style={styles.doneBadge}>🎉 얼리버드 혜택 적용 완료</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        * { margin:0; padding:0; box-sizing:border-box; }

        @keyframes progShimmer {
          0%   { background-position:-200% 0; }
          100% { background-position:200% 0; }
        }
        @keyframes orbA {
          0%,100% { transform:translate(-50%,-50%) rotate(0deg) scale(1); }
          33%     { transform:translate(-47%,-53%) rotate(120deg) scale(1.06); }
          66%     { transform:translate(-53%,-47%) rotate(240deg) scale(0.94); }
        }
        @keyframes orbB {
          0%,100% { transform:translate(-50%,-50%) rotate(360deg); }
          50%     { transform:translate(-53%,-50%) rotate(180deg) scale(1.1); }
        }
        @keyframes orbC {
          0%,100% { transform:translate(-50%,-50%) rotate(0deg); }
          50%     { transform:translate(-47%,-53%) rotate(180deg); }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes checkIn {
          0%   { transform:scale(0); opacity:0; }
          60%  { transform:scale(1.15); }
          100% { transform:scale(1); opacity:1; }
        }
        @keyframes badgeIn {
          from { transform:translateY(8px); opacity:0; }
          to   { transform:translateY(0); opacity:1; }
        }

        input::placeholder { color:#bbb; }
        @media(max-width:480px){
          h1 { font-size:28px!important; }
        }
      `}</style>
    </div>
  );
}

/* ── styles ── */
const glass = {
  background: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(40px) saturate(1.6)",
  WebkitBackdropFilter: "blur(40px) saturate(1.6)",
  border: "1px solid rgba(255,255,255,0.5)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.6) inset",
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#FAFAFA",
    fontFamily: "'Pretendard',-apple-system,BlinkMacSystemFont,sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },

  /* orbs */
  orbWrap: {
    position: "absolute", top: "42%", left: "50%",
    transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 0,
  },
  orb1: {
    position: "absolute", width: 420, height: 420, borderRadius: "50%",
    background: "conic-gradient(from 0deg,#12ADE6,#4C63FC,#DC4CFC,#12ADE6)",
    filter: "blur(80px)", opacity: 0.16,
    top: "50%", left: "50%",
    animation: "orbA 14s ease-in-out infinite",
  },
  orb2: {
    position: "absolute", width: 320, height: 320, borderRadius: "50%",
    background: "conic-gradient(from 120deg,#FF0080,#EE00FF,#4797FF,#FF0080)",
    filter: "blur(100px)", opacity: 0.11,
    top: "50%", left: "50%",
    animation: "orbB 18s ease-in-out infinite",
  },
  orb3: {
    position: "absolute", width: 260, height: 260, borderRadius: "50%",
    background: "conic-gradient(from 240deg,#DC4CFC,#12B4E6,#fff,#DC4CFC)",
    filter: "blur(65px)", opacity: 0.13,
    top: "50%", left: "50%",
    animation: "orbC 12s ease-in-out infinite",
  },
  orbGlow: {
    position: "absolute", width: 140, height: 140, borderRadius: "50%",
    background: "radial-gradient(circle,rgba(255,255,255,0.85) 0%,transparent 70%)",
    filter: "blur(30px)",
    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
  },
  grain: {
    position: "fixed", inset: 0, opacity: 0.025, pointerEvents: "none", zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  },

  /* hero */
  hero: {
    position: "relative", zIndex: 10,
    display: "flex", flexDirection: "column", alignItems: "center",
    textAlign: "center", padding: "40px 20px 60px", maxWidth: 600, width: "100%",
  },
  badge: {
    display: "inline-flex", alignItems: "center", gap: 8,
    ...glass,
    background: "rgba(255,255,255,0.5)",
    borderRadius: 9999, padding: "7px 16px 7px 12px", marginBottom: 32,
  },
  badgeDot: {
    width: 6, height: 6, borderRadius: "50%", background: "#1A1A1A",
    animation: "pulse 2s ease-in-out infinite", flexShrink: 0,
  },
  badgeLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.07em",
    textTransform: "uppercase", color: "#555",
  },
  h1: {
    fontSize: "clamp(30px,5vw,50px)", fontWeight: 800, color: "#111",
    lineHeight: 1.18, letterSpacing: "-0.035em", wordBreak: "keep-all",
  },
  sub: {
    fontSize: 17, fontWeight: 400, color: "#888",
    marginTop: 20, lineHeight: 1.65, maxWidth: 400,
  },

  /* CTA zone */
  ctaZone: {
    marginTop: 36,
    display: "flex", flexDirection: "column", alignItems: "center",
    width: "100%", maxWidth: 440,
  },
  cta: {
    background: "#1A1A1A", color: "#fff",
    fontSize: 16, fontWeight: 600, padding: "16px 44px",
    borderRadius: 9999, border: "none", cursor: "pointer",
    boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
    transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease",
    willChange: "opacity, transform",
    letterSpacing: "0.01em",
    fontFamily: "'Pretendard',sans-serif",
  },

  /* crossfade container */
  crossfade: {
    display: "grid",
    placeItems: "center",
    width: "100%",
  },

  /* glass card */
  glassCard: {
    width: "100%",
    ...glass,
    background: "rgba(255,255,255,0.42)",
    borderRadius: 22,
    overflow: "hidden",
    position: "relative",
    transition: "opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)",
    willChange: "opacity, transform",
  },
  progTrack: { height: 2, background: "rgba(0,0,0,0.04)" },
  progFill: {
    height: "100%", background: "#1A1A1A", borderRadius: 2,
    transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
  },
  closeBtn: {
    position: "absolute", top: 14, right: 14, background: "transparent",
    border: "none", cursor: "pointer", padding: 6, borderRadius: 8,
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 5, transition: "background 0.15s",
  },

  stepWrap: {
    padding: "26px 26px 24px",
    overflow: "hidden",
  },

  /* email */
  emailBlock: { textAlign: "center" },
  mailIcon: {
    width: 44, height: 44, borderRadius: 13, background: "#1A1A1A",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    marginBottom: 14,
  },
  emailH: {
    fontSize: 19, fontWeight: 700, color: "#111",
    marginBottom: 6, letterSpacing: "-0.02em",
  },
  emailP: { fontSize: 13.5, color: "#999", lineHeight: 1.6, marginBottom: 22 },
  inputBox: {
    display: "flex", gap: 6,
    background: "rgba(255,255,255,0.7)",
    border: "1.5px solid rgba(0,0,0,0.08)",
    borderRadius: 14, padding: 5,
    transition: "all 0.2s ease",
  },
  input: {
    flex: 1, padding: "11px 14px", border: "none", background: "transparent",
    fontSize: 15, outline: "none", color: "#1A1A1A", minWidth: 0,
    fontFamily: "'Pretendard',sans-serif",
  },
  submitBtn: {
    padding: "11px 20px", background: "#1A1A1A", color: "#fff",
    border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600,
    cursor: "pointer", transition: "all 0.2s",
    fontFamily: "'Pretendard',sans-serif",
    whiteSpace: "nowrap", flexShrink: 0,
    display: "inline-flex", alignItems: "center",
  },
  lockNote: {
    fontSize: 11.5, color: "#bbb", marginTop: 14,
    display: "flex", alignItems: "center", justifyContent: "center",
  },

  /* question */
  qTop: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginBottom: 12,
  },
  qLabel: {
    fontSize: 11, fontWeight: 700, color: "#bbb",
    letterSpacing: "0.12em",
  },
  qOf: { fontSize: 11, color: "#bbb", fontWeight: 500 },
  qText: {
    fontSize: 17, fontWeight: 700, color: "#111", lineHeight: 1.4,
    marginBottom: 18, letterSpacing: "-0.015em", textAlign: "left",
  },
  opts: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 },
  opt: {
    padding: "14px 10px",
    background: "rgba(255,255,255,0.55)",
    border: "1.5px solid rgba(0,0,0,0.06)",
    borderRadius: 14, cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.16,1,0.3,1)",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
    fontFamily: "'Pretendard',sans-serif",
  },
  optActive: {
    borderColor: "rgba(26,26,26,0.6)",
    background: "rgba(255,255,255,0.8)",
    transform: "scale(0.97)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  optEmoji: { fontSize: 22, lineHeight: 1 },
  optLabel: { fontSize: 13, fontWeight: 600, color: "#333" },

  /* back */
  backBtn: {
    marginTop: 14,
    display: "inline-flex", alignItems: "center",
    background: "none", border: "none", cursor: "pointer",
    fontSize: 13, fontWeight: 500, color: "#bbb",
    fontFamily: "'Pretendard',sans-serif",
    transition: "color 0.15s",
    padding: "4px 0",
  },

  /* done */
  doneBlock: { textAlign: "center", padding: "8px 0 2px" },
  doneCircle: {
    width: 52, height: 52, borderRadius: "50%", background: "#1A1A1A",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    marginBottom: 14,
    animation: "checkIn 0.5s cubic-bezier(0.16,1,0.3,1)",
  },
  doneH: {
    fontSize: 20, fontWeight: 800, color: "#111",
    marginBottom: 6, letterSpacing: "-0.02em",
  },
  doneP: { fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 18 },
  doneBadge: {
    display: "inline-block", padding: "10px 20px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(0,0,0,0.05)",
    borderRadius: 12, fontSize: 13, fontWeight: 600, color: "#333",
    animation: "badgeIn 0.4s cubic-bezier(0.16,1,0.3,1) 0.25s both",
  },
};
