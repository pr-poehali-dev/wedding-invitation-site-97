import Icon from "@/components/ui/icon";

export default function DetailsSection() {
  return (
    <>
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
    </>
  );
}
