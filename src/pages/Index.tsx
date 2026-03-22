import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import RsvpSection from "@/components/RsvpSection";

export default function Index() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicPlaying(!musicPlaying);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", fontFamily: "'Cormorant Garamond', serif" }}>
      <audio ref={audioRef} loop>
        <source src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/files/miyagi-soya.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(232,160,160,0.4)" }}
        title={musicPlaying ? "Выключить музыку" : "Включить музыку"}
      >
        <span className={`text-xl ${musicPlaying ? "animate-heartbeat" : ""}`}>
          {musicPlaying ? "🎵" : "🎶"}
        </span>
      </button>

      <HeroSection visible={visible} onScrollTo={scrollTo} />

      <DetailsSection />

      <RsvpSection />

      <footer
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(242,196,196,0.2))" }}
      >
        <div className="text-4xl mb-4 animate-heartbeat inline-block">♡</div>
        <p
          className="text-2xl font-light italic mb-2"
          style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
        >
          Анастасия &amp; Иван
        </p>
        <p className="text-sm tracking-widest" style={{ color: "var(--text-light)" }}>
          15 АВГУСТА 2026 · НИЖНИЙ НОВГОРОД
        </p>
        <div className="section-divider mt-6" />
      </footer>
    </div>
  );
}