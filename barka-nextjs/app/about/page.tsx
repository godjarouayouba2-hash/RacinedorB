export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fbfaf6", color: "#20251e", fontFamily: "sans-serif", padding: "8% 7%" }}>
      <a href="/" style={{ color: "#455b42", textDecoration: "none" }}>← Retour à l’accueil BARKA</a>
      <p style={{ letterSpacing: ".18em", color: "#455b42", marginTop: 50 }}>NOTRE APPROCHE</p>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 400, lineHeight: 1.1 }}>Le quotidien mérite<br/><i style={{ color: "#455b42" }}>le meilleur.</i></h1>
      <p style={{ maxWidth: 620, lineHeight: 1.9, color: "#74796f" }}>Chez BARKA, nous croyons que les bons produits ont leur place dans les petits rituels de chaque jour. Notre ambition : proposer une sélection alimentaire claire, pratique et agréable à découvrir.</p>
      <p style={{ maxWidth: 620, lineHeight: 1.9, color: "#74796f" }}>Nous avançons avec vous, produit après produit, en privilégiant la transparence sur les informations essentielles.</p>
      <a href="/boutique" style={{ display: "inline-block", marginTop: 25, padding: "14px 18px", background: "#293b2c", color: "#fff", textDecoration: "none" }}>Découvrir la boutique →</a>
    </main>
  );
}
