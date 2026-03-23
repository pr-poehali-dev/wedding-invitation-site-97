export default function StorySection() {
  return (
    <section className="py-20 px-6" style={{ background: "rgba(242,196,196,0.07)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="ornament mb-3">✦ ✦ ✦</p>
        <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
          Наша история
        </h2>
        <div className="section-divider mb-10" />

        <div className="relative inline-block mb-10">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(232,160,160,0.3), rgba(242,196,196,0.2))",
              transform: "rotate(2deg)",
            }}
          />
          <img
            src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/bucket/1c37be5c-2690-4319-aecb-fd48564cac71.png"
            alt="Анастасия и Иван"
            className="relative rounded-2xl shadow-xl"
            style={{
              maxWidth: "340px",
              width: "100%",
              objectFit: "cover",
              border: "4px solid rgba(255,255,255,0.8)",
            }}
          />
        </div>

        <p
          className="text-xl md:text-2xl font-light italic leading-relaxed mb-6"
          style={{ color: "var(--text-mid)", fontFamily: "'Cormorant Infant', serif" }}
        >
          «Любовь — это то, что мы празднуем сегодня...»
        </p>
      </div>
    </section>
  );
}
