import { useState, useEffect, useRef } from "react";
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

export default function Index() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    dietary: "",
    song: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const countdown = useCountdown(WEDDING_DATE);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)", fontFamily: "'Cormorant Garamond', serif" }}>
      {Array.from({ length: 12 }, (_, i) => (
        <Petal key={i} id={i} />
      ))}

      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
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

      {/* HERO */}
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
            Анна
          </h1>
          <div className="text-4xl md:text-5xl my-3 animate-heartbeat inline-block" style={{ color: "var(--rose)" }}>
            ♡
          </div>
          <h1
            className="text-6xl md:text-8xl font-light leading-tight"
            style={{ color: "var(--text-dark)" }}
          >
            Михаил
          </h1>

          <div className="section-divider my-8" />

          <p
            className="text-2xl md:text-3xl font-light italic mb-2"
            style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
          >
            15 августа 2026 года
          </p>
          <p className="text-base tracking-widest mb-10" style={{ color: "var(--text-light)" }}>
            15:00 · Москва
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
              onClick={() => scrollTo("rsvp")}
              className="btn-rose px-8 py-3 rounded-full"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
            >
              Подтвердить присутствие
            </button>
            <button
              onClick={() => scrollTo("details")}
              className="btn-outline-rose px-8 py-3 rounded-full"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "var(--rose)", border: "1.5px solid var(--rose)", background: "transparent" }}
            >
              Подробнее
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--text-light)" }}>
          <span className="text-xs tracking-widest uppercase">Листай вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="ornament mb-3">✦ ✦ ✦</p>
            <h2
              className="text-4xl md:text-5xl font-light mb-4"
              style={{ color: "var(--text-dark)" }}
            >
              Детали торжества
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "📅", title: "Дата", line1: "15 августа 2026", line2: "Суббота" },
              { emoji: "⏰", title: "Время", line1: "Церемония в 15:00", line2: "Банкет в 17:00" },
              { emoji: "🏛️", title: "Место", line1: "Ресторан «Розовый сад»", line2: "ул. Цветочная, 12, Москва" },
            ].map((card, i) => (
              <div
                key={card.title}
                className="glass-card rounded-2xl p-8 text-center"
                style={{
                  animation: `scale-in 0.8s ease ${0.1 + i * 0.1}s both`,
                }}
              >
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="text-xl font-light mb-3" style={{ color: "var(--rose)" }}>
                  {card.title}
                </h3>
                <p className="text-lg font-light" style={{ color: "var(--text-dark)" }}>
                  {card.line1}
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--text-light)" }}>
                  {card.line2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-lg photo-frame" style={{ height: "360px", position: "relative" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.6173,55.7558&z=14&l=map&pt=37.6173,55.7558,pm2rdl"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <a
                href="https://yandex.ru/maps/?ll=37.6173,55.7558&z=14"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose px-6 py-2 rounded-full flex items-center gap-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", textDecoration: "none", display: "inline-flex" }}
              >
                <Icon name="MapPin" size={16} />
                Открыть в картах
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="ornament mb-3">✦ ✦ ✦</p>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
            Наша история
          </h2>
          <div className="section-divider mb-12" />

          <div
            className="relative mx-auto rounded-3xl overflow-hidden photo-frame flex items-center justify-center flex-col gap-4"
            style={{
              maxWidth: "460px",
              aspectRatio: "4/5",
              background: "linear-gradient(135deg, rgba(242,196,196,0.25), rgba(212,184,224,0.25), rgba(245,213,192,0.25))",
            }}
          >
            <div className="text-6xl">📸</div>
            <p className="text-lg font-light italic" style={{ color: "var(--text-mid)" }}>
              Здесь будет ваше фото
            </p>
            <button
              className="btn-outline-rose px-6 py-2 rounded-full text-sm mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--rose)", border: "1.5px solid var(--rose)", background: "transparent" }}
            >
              Загрузить фото
            </button>
          </div>

          <p
            className="mt-10 text-xl font-light italic leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
          >
            "Мы встретились, и мир стал другим.<br />
            Теперь мы хотим разделить этот особенный день<br />
            с теми, кого любим."
          </p>
        </div>
      </section>

      {/* DRESSCODE */}
      <section
        className="py-16 px-6"
        style={{ background: "linear-gradient(135deg, rgba(242,196,196,0.12), rgba(212,184,224,0.12))" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="ornament mb-3">✦ ✦ ✦</p>
          <h2 className="text-4xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
            Дресс-код
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg font-light mb-8" style={{ color: "var(--text-mid)" }}>
            Нежные пастельные тона — розовый, кремовый, лавандовый, персиковый.
            <br />Без белого и чёрного, пожалуйста 🌸
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            {[
              { color: "#f2c4c4", name: "Пудровый" },
              { color: "#fdf6f0", name: "Кремовый" },
              { color: "#d4b8e0", name: "Лаванда" },
              { color: "#f5d5c0", name: "Персиковый" },
              { color: "#c8dab8", name: "Мятный" },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-full shadow-md"
                  style={{ backgroundColor: c.color, border: "2px solid rgba(232,160,160,0.3)" }}
                />
                <span className="text-xs tracking-wide" style={{ color: "var(--text-light)" }}>
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="ornament mb-3">✦ ✦ ✦</p>
            <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
              Подтвердите присутствие
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-lg font-light" style={{ color: "var(--text-mid)" }}>
              Пожалуйста, ответьте до 1 июля 2026
            </p>
          </div>

          {submitted ? (
            <div className="glass-card rounded-3xl p-12 text-center">
              <div className="text-5xl mb-4 animate-heartbeat inline-block">💌</div>
              <h3 className="text-3xl font-light mb-3" style={{ color: "var(--rose)" }}>
                Спасибо!
              </h3>
              <p className="text-lg font-light" style={{ color: "var(--text-mid)" }}>
                Мы с нетерпением ждём встречи с вами!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-6">
              <div>
                <label className="block text-sm tracking-widest uppercase mb-2" style={{ color: "var(--text-light)" }}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="wedding-input"
                  placeholder="Иван Иванов"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm tracking-widest uppercase mb-3" style={{ color: "var(--text-light)" }}>
                  Вы придёте?
                </label>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { value: "yes", label: "С радостью! 🎉" },
                    { value: "no", label: "К сожалению, нет 😢" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRsvpData({ ...rsvpData, attending: opt.value })}
                      style={
                        rsvpData.attending === opt.value
                          ? {
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1rem",
                              background: "linear-gradient(135deg, var(--rose), var(--blush))",
                              color: "white",
                              border: "none",
                              padding: "8px 20px",
                              borderRadius: "999px",
                              cursor: "pointer",
                              boxShadow: "0 4px 20px rgba(232,160,160,0.4)",
                            }
                          : {
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1rem",
                              background: "transparent",
                              color: "var(--rose)",
                              border: "1.5px solid var(--rose)",
                              padding: "8px 20px",
                              borderRadius: "999px",
                              cursor: "pointer",
                            }
                      }
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {rsvpData.attending === "yes" && (
                <>
                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2" style={{ color: "var(--text-light)" }}>
                      Количество гостей
                    </label>
                    <select
                      className="wedding-input"
                      value={rsvpData.guests}
                      onChange={(e) => setRsvpData({ ...rsvpData, guests: e.target.value })}
                    >
                      {["1", "2", "3", "4"].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === "1" ? "гость" : "гостя"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2" style={{ color: "var(--text-light)" }}>
                      Пожелания к меню
                    </label>
                    <input
                      type="text"
                      className="wedding-input"
                      placeholder="Вегетарианское, без глютена…"
                      value={rsvpData.dietary}
                      onChange={(e) => setRsvpData({ ...rsvpData, dietary: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm tracking-widest uppercase mb-2" style={{ color: "var(--text-light)" }}>
                      Ваша любимая песня для танцпола 🎵
                    </label>
                    <input
                      type="text"
                      className="wedding-input"
                      placeholder="Исполнитель — Название"
                      value={rsvpData.song}
                      onChange={(e) => setRsvpData({ ...rsvpData, song: e.target.value })}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm tracking-widest uppercase mb-2" style={{ color: "var(--text-light)" }}>
                  Пожелание молодожёнам
                </label>
                <textarea
                  className="wedding-input"
                  rows={3}
                  placeholder="Напишите тёплые слова…"
                  value={rsvpData.message}
                  onChange={(e) => setRsvpData({ ...rsvpData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, var(--rose), var(--blush))",
                  color: "white",
                  border: "none",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(232,160,160,0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(232,160,160,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(232,160,160,0.4)";
                }}
              >
                Отправить ответ ✉️
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(242,196,196,0.2))" }}
      >
        <div className="text-4xl mb-4 animate-heartbeat inline-block">♡</div>
        <p
          className="text-2xl font-light italic mb-2"
          style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
        >
          Анна &amp; Михаил
        </p>
        <p className="text-sm tracking-widest" style={{ color: "var(--text-light)" }}>
          15 АВГУСТА 2026 · МОСКВА
        </p>
        <div className="section-divider mt-6" />
      </footer>
    </div>
  );
}
