export default function DressCodeSection() {
  return (
    <section
      className="py-16 px-6"
      style={{ background: "linear-gradient(135deg, rgba(242,196,196,0.12), rgba(212,184,224,0.12))" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="ornament mb-3">✦ ✦ ✦</p>
        <h2 className="text-4xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
          Дресс-код
        </h2>
        <div className="section-divider mb-10" />
        <img
          src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/bucket/f5f8b521-3afe-4b72-8d54-1a4f43bba98f.png"
          alt="Дресс-код палитра"
          className="mx-auto rounded-2xl shadow-lg mb-8"
          style={{ maxWidth: "160px", width: "100%" }}
        />
        <img
          src="https://cdn.poehali.dev/projects/9044207e-e474-4d9e-a73f-e8677ca885cf/bucket/8736008a-44b7-4356-97ef-453a85087060.png"
          alt="Примеры образов"
          className="mx-auto rounded-2xl shadow-lg"
          style={{ maxWidth: "320px", width: "100%" }}
        />
      </div>
    </section>
  );
}