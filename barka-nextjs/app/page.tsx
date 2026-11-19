"use client";

import { ArrowRight, ArrowUpRight, Leaf, ShieldCheck, Truck, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <main>
      <div className="announcement">
        <span><Leaf size={13} /> RACINES D’OR GROUP · Se relever. Grandir. Rayonner.</span>
        <span className="announcement-right">Livraison à définir selon votre zone</span>
      </div>
      <header className="header">
        <a className="brand" href="/" aria-label="RACINE D’OR accueil">
          <img src="/logo-racinedor.svg" alt="RACINE D’OR" style={{ height: 56, width: 190, objectFit: "contain" }} />
        </a>
        <nav className={`nav ${mobileMenu ? "nav-open" : ""}`}>
          <a href="/" onClick={() => setMobileMenu(false)}>Accueil</a>
          <a href="/boutique" onClick={() => setMobileMenu(false)}>La boutique</a>
          <a href="/about" onClick={() => setMobileMenu(false)}>Notre approche</a>
          <a href="/contact" onClick={() => setMobileMenu(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="cart-trigger" href="/boutique"><span>Découvrir</span><b>↗</b></a>
          <button className="icon-btn mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">{mobileMenu ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> SIMPLICITÉ · QUALITÉ · CONFIANCE</div>
          <h1>Le bon goût<br/><em>commence</em> ici.</h1>
          <p className="hero-text">Des farines et céréales choisies avec attention pour accompagner les bons moments de votre quotidien.</p>
          <div className="hero-buttons">
            <a className="button button-dark" href="/boutique">Découvrir la boutique <ArrowUpRight size={17}/></a>
            <a className="text-link" href="/about">Notre approche <ArrowRight size={15}/></a>
          </div>
          <div className="hero-note"><span className="note-icon"><Leaf size={17}/></span><span><b>Des essentiels bien choisis</b><small>Une sélection simple, pour tous les jours.</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"/>
          <div className="hero-stamp"><span>LE GOÛT<br/>DU BON</span><Leaf size={22}/></div>
          <div className="hero-caption"><span>01 / 01</span><i/> RACINES D’OR GROUP</div>
        </div>
        <div className="hero-side-label">BONS PRODUITS · BONS MOMENTS</div>
      </section>

      <section className="trust-strip">
        <div><Leaf/><span><b>Sélection attentive</b><small>Des produits choisis avec soin</small></span></div>
        <div><ShieldCheck/><span><b>Informations claires</b><small>Des détails utiles et transparents</small></span></div>
        <div><Truck/><span><b>Commande simple</b><small>Contact direct avec RACINE D’OR</small></span></div>
        <div><Heart/><span><b>Proche de vous</b><small>Un service à votre écoute</small></span></div>
      </section>

      <section className="story-section" id="approche">
        <div className="story-image"><div className="story-image-inner"/><div className="story-vertical">RACINE D’OR · DEPUIS LE DÉBUT</div></div>
        <div className="story-copy"><div className="eyebrow"><span className="eyebrow-line"/> NOTRE APPROCHE</div><h2>Le quotidien mérite<br/><em>le meilleur.</em></h2><p>Chez RACINE D’OR, nous croyons que les bons produits ont leur place dans les petits rituels de chaque jour. Notre ambition : proposer une sélection alimentaire claire, pratique et agréable à découvrir.</p><p>Nous avançons avec vous, produit après produit, en privilégiant la transparence sur les informations essentielles.</p><a className="text-link" href="/about">En savoir plus <ArrowRight size={15}/></a></div>
      </section>

      <section className="newsletter" id="contact">
        <div><div className="eyebrow light"><span className="eyebrow-line"/> RESTONS EN CONTACT</div><h2>Une question ?<br/><em>Parlons-en.</em></h2><p>Besoin d’une information sur un produit ou une commande ? Contactez notre équipe.</p></div>
        <a className="button button-light" href="/contact">Nous contacter <ArrowUpRight size={17}/></a>
      </section>

      <footer className="footer">
        <a className="brand brand-footer" href="/"><img src="/logo-racinedor.svg" alt="RACINE D’OR" style={{ height: 56, width: 190, objectFit: "contain" }} /></a>
        <p>Des essentiels alimentaires, choisis avec attention.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} RACINES D’OR GROUP. Tous droits réservés.</span><span>Conçu avec soin.</span></div>
      </footer>
    </main>
  );
}
