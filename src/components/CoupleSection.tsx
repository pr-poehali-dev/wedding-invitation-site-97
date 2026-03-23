export default function CoupleSection() {
  return (
    <>
      {/* ЖЕНИХ И НЕВЕСТА */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="ornament mb-3">✦ ✦ ✦</p>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(232,160,160,0.3), rgba(242,196,196,0.2))",
                    transform: "rotate(-2deg)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/bucket/8d4f12eb-ee1f-4e0e-858d-2bbad05bd2b3.jpg"
                  alt="Жених"
                  className="relative rounded-2xl shadow-xl"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    border: "4px solid rgba(255,255,255,0.8)",
                  }}
                />
              </div>
              <p className="text-2xl font-light italic" style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}>
                Жених
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(232,160,160,0.3), rgba(242,196,196,0.2))",
                    transform: "rotate(2deg)",
                  }}
                />
                <img
                  src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/bucket/40db659a-9be7-4533-b847-82b8b2a79b39.jpg"
                  alt="Невеста"
                  className="relative rounded-2xl shadow-xl"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    border: "4px solid rgba(255,255,255,0.8)",
                  }}
                />
              </div>
              <p className="text-2xl font-light italic" style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}>
                Невеста
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ПОДАРКИ */}
      <section className="py-16 px-6" style={{ background: "rgba(242,196,196,0.07)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="ornament mb-3">✦ ✦ ✦</p>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
            Подарки
          </h2>
          <div className="section-divider mb-8" />
          <p
            className="text-xl font-light leading-relaxed"
            style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
          >
            В качестве подарка будем благодарны за любой, даже символический вклад в бюджет нашей молодой семьи.
          </p>
        </div>
      </section>
    </>
  );
}
