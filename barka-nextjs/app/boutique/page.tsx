export default function BoutiquePage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fbfaf6", color: "#20251e", fontFamily: "sans-serif", padding: "8% 7%" }}>
      <a href="/" style={{ color: "#455b42", textDecoration: "none" }}>← Retour à l’accueil BARKA</a>
      <p style={{ letterSpacing: ".18em", color: "#455b42", marginTop: 50 }}>LA SÉLECTION BARKA</p>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 400, lineHeight: 1.1 }}>La boutique<br/><i style={{ color: "#455b42" }}>BARKA.</i></h1>
      <p style={{ maxWidth: 620, lineHeight: 1.9, color: "#74796f" }}>Retrouvez nos farines et céréales, sélectionnées avec attention. La boutique complète est en cours de réorganisation.</p>
      <a href="/" style={{ display: "inline-block", marginTop: 25, padding: "14px 18px", background: "#293b2c", color: "#fff", textDecoration: "none" }}>Voir les produits disponibles sur l’accueil →</a>
    </main>
  );
}
