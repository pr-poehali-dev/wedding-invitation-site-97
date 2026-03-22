import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const BG_IMAGE =
  "https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/files/ae54cdcd-5d52-4dee-9b1b-989c140ff4a8.jpg";

const WEDDING_DATE = new Date("2026-08-15T15:00:00");

const PETALS = ["🌸", "🌺", "🌹", "✿", "❀"];

function Petal({ id }: { id: number }) {
  const left = (id * 137.5) % 100;
  const delay = (id * 0.7) % 8;
  const duration = 8 + (id % 6);
  const swayDuration = 3 + (id % 3);
  const size = 0.8 + (id % 3) * 0.3;
  const petal = PETALS[id % PETALS.length];

  return (
    <span
      className="petal"
      style={{
        left: `${left}%`,
        animationDuration: `${duration}s, ${swayDuration}s`,
        animationDelay: `${delay}s, ${delay * 0.5}s`,
        fontSize: `${size}rem`,
        opacity: 0,
      }}
    >
      {petal}
    </span>
  );
}

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

interface HeroSectionProps {
  visible: boolean;
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ visible, onScrollTo }: HeroSectionProps) {
  const countdown = useCountdown(WEDDING_DATE);

  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <Petal key={i} id={i} />
      ))}

      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(253,246,240,0.65)" }} />

        <div
          className="relative z-10"
          style={{
            transition: "opacity 1s ease, transform 1s ease",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <p className="ornament tracking-widest mb-4">✦ ✦ ✦</p>
          <p
            className="text-sm uppercase tracking-[0.35em] mb-6 font-light"
            style={{ color: "var(--text-light)" }}
          >
            Вы приглашены на свадьбу
          </p>

          <h1
            className="text-6xl md:text-8xl font-light leading-tight"
            style={{ color: "var(--text-dark)", letterSpacing: "-0.01em" }}
          >
            Анастасия
          </h1>
          <div className="text-4xl md:text-5xl my-3 animate-heartbeat inline-block" style={{ color: "var(--rose)" }}>
            ♡
          </div>
          <h1
            className="text-6xl md:text-8xl font-light leading-tight"
            style={{ color: "var(--text-dark)" }}
          >
            Иван
          </h1>

          <div className="section-divider my-8" />

          <p
            className="text-2xl md:text-3xl font-light italic mb-2"
            style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
          >
            15 августа 2026 года
          </p>
          <p className="text-base tracking-widest mb-10" style={{ color: "var(--text-light)" }}>
            Москва
          </p>

          <div className="flex gap-4 justify-center mb-10 flex-wrap">
            {[
              { label: "дней", value: countdown.days },
              { label: "часов", value: countdown.hours },
              { label: "минут", value: countdown.minutes },
              { label: "секунд", value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="timer-block px-5 py-4 min-w-[70px] text-center">
                <div className="text-3xl font-light" style={{ color: "var(--text-dark)" }}>
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest mt-1" style={{ color: "var(--text-light)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onScrollTo("rsvp")}
              className="btn-rose px-8 py-3 rounded-full"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
            >
              Подтвердить присутствие
            </button>
            <button
              onClick={() => onScrollTo("details")}
              className="btn-outline-rose px-8 py-3 rounded-full"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "var(--rose)", border: "1.5px solid var(--rose)", background: "transparent" }}
            >
              Подробнее
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--text-light)" }}>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>
    </>
  );
}