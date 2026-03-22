export default function RsvpSection() {
  return (
    <section id="rsvp" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="ornament mb-3">✦ ✦ ✦</p>
        <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--text-dark)" }}>
          Подтвердите присутствие
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-lg font-light mb-10" style={{ color: "var(--text-mid)" }}>
          Пожалуйста, заполните анкету до 1 июля 2026
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe8R0zdUlgFwWkzedrp-QmD-ZwybZdSJ7G8dT_eR2o5qjTvVg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, var(--rose), var(--blush))",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "999px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.15rem",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(232,160,160,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(232,160,160,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(232,160,160,0.4)";
          }}
        >
          Заполнить анкету ✉️
        </a>
      </div>
    </section>
  );
}
