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
              { emoji: "⏰", title: "Время", line1: "17:00", line2: "" },
              { emoji: "🏛️", title: "Место", line1: "Шатер", line2: "ул. Артельная 21А, Нижний Новгород" },
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
              src="https://yandex.ru/map-widget/v1/?ll=44.004400,56.297643&z=16&l=map&pt=44.004400,56.297643,pm2rdl"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <a
                href="https://yandex.ru/maps/?ll=44.004400,56.297643&z=16&pt=44.004400,56.297643"
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

    </>
  );
}