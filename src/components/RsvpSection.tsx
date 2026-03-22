interface RsvpData {
  name: string;
  attending: string;
  guests: string;
  dietary: string;
  song: string;
  message: string;
}

interface RsvpSectionProps {
  rsvpData: RsvpData;
  setRsvpData: (data: RsvpData) => void;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RsvpSection({ rsvpData, setRsvpData, submitted, onSubmit }: RsvpSectionProps) {
  return (
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
          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-8 md:p-10 space-y-6">
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
  );
}
