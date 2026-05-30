export const TRIBUNE_HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Le Tribune Nationale – L'actualité politique française</title>
  <meta name="description" content="Le Tribune Nationale, votre source d'information politique française indépendante." />
  <meta property="og:title" content="Le Tribune Nationale" />
  <meta property="og:description" content="L'actualité politique française en temps réel." />
  <meta property="og:type" content="website" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:ital,wght@0,300;0,400;1,300&family=Bebas+Neue&display=swap" rel="stylesheet" />
  <style>
    :root {
      --noir: #0a0a0a;
      --rouge: #c0001a;
      --gris: #f4f2ee;
      --gris-mid: #d6d3cc;
      --texte: #1a1a1a;
      --or: #b89a5a;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: var(--gris); color: var(--texte); font-family: 'Source Serif 4', Georgia, serif; font-weight: 300; }
    .topbar { background: var(--noir); color: #aaa; font-size: 11px; letter-spacing: 0.08em; padding: 6px 40px; display: flex; justify-content: space-between; align-items: center; }
    .topbar a { color: #aaa; text-decoration: none; }
    header { background: white; border-bottom: 3px solid var(--noir); padding: 0 40px; }
    .header-top { display: flex; justify-content: space-between; align-items: center; padding: 18px 0 10px; border-bottom: 1px solid var(--gris-mid); }
    .date-edition { font-size: 11px; letter-spacing: 0.1em; color: #777; text-transform: uppercase; }
    .logo { text-align: center; }
    .logo h1 { font-family: 'Playfair Display', serif; font-size: 58px; font-weight: 900; letter-spacing: -1px; line-height: 1; color: var(--noir); }
    .logo .tagline { font-size: 11px; letter-spacing: 0.25em; color: var(--rouge); text-transform: uppercase; margin-top: 4px; }
    .header-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
    .btn-abonnement { background: var(--rouge); color: white; border: none; padding: 8px 18px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; }
    .edition-num { font-size: 10px; color: #999; }
    nav { display: flex; border-top: 1px solid var(--gris-mid); padding: 10px 0; }
    nav a { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--noir); text-decoration: none; padding: 4px 18px; border-right: 1px solid var(--gris-mid); }
    nav a.active { color: var(--rouge); font-weight: 700; }
    .breaking { background: var(--rouge); color: white; padding: 8px 40px; display: flex; align-items: center; gap: 16px; font-size: 12px; overflow: hidden; }
    .breaking-label { font-family: 'Bebas Neue', sans-serif; font-size: 14px; letter-spacing: 0.1em; white-space: nowrap; border-right: 1px solid rgba(255,255,255,0.4); padding-right: 16px; }
    .breaking-text { white-space: nowrap; animation: ticker 30s linear infinite; }
    @keyframes ticker { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
    .container { max-width: 1200px; margin: 0 auto; padding: 30px 40px; }
    .main-grid { display: grid; grid-template-columns: 1fr 340px; gap: 40px; }
    .une { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--gris-mid); background: white; }
    .une-principale { grid-column: 1 / -1; border-bottom: 1px solid var(--gris-mid); padding: 28px; }
    .une-principale::before { content: 'À LA UNE'; display: block; font-size: 9px; letter-spacing: 0.25em; color: var(--rouge); margin-bottom: 12px; }
    .une-principale h2 { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 900; line-height: 1.1; margin-bottom: 12px; color: var(--noir); }
    .une-principale .chapeau { font-size: 15px; line-height: 1.6; color: #444; font-style: italic; max-width: 700px; }
    .une-principale .meta { margin-top: 14px; font-size: 10px; color: #999; text-transform: uppercase; }
    .article-card { padding: 22px; border-right: 1px solid var(--gris-mid); }
    .article-card:last-child { border-right: none; }
    .article-card .rubrique { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--rouge); margin-bottom: 8px; }
    .article-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; line-height: 1.25; margin-bottom: 10px; color: var(--noir); }
    .article-card p { font-size: 13px; line-height: 1.6; color: #555; }
    .article-card .meta { margin-top: 12px; font-size: 10px; color: #aaa; }
    .separateur { display: flex; align-items: center; gap: 12px; margin: 30px 0 24px; }
    .separateur span { font-family: 'Bebas Neue', sans-serif; font-size: 18px; letter-spacing: 0.15em; color: var(--noir); white-space: nowrap; }
    .separateur::before, .separateur::after { content: ''; flex: 1; height: 1px; background: var(--noir); }
    .articles-secondaires { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--gris-mid); border: 1px solid var(--gris-mid); }
    .art-sec { background: white; padding: 20px; }
    .art-sec .rubrique { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--or); margin-bottom: 8px; }
    .art-sec h3 { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; line-height: 1.3; color: var(--noir); margin-bottom: 8px; }
    .art-sec p { font-size: 12px; color: #666; line-height: 1.55; }
    .sidebar { display: flex; flex-direction: column; gap: 24px; }
    .sidebar-block { background: white; border: 1px solid var(--gris-mid); padding: 20px; }
    .sidebar-title { font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.15em; border-bottom: 2px solid var(--noir); padding-bottom: 8px; margin-bottom: 16px; color: var(--noir); }
    .sidebar-item { padding: 12px 0; border-bottom: 1px solid var(--gris-mid); }
    .sidebar-item:last-child { border-bottom: none; padding-bottom: 0; }
    .sidebar-item .rubrique { font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--rouge); margin-bottom: 4px; }
    .sidebar-item h4 { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 700; line-height: 1.3; color: var(--noir); }
    .sidebar-item .meta { font-size: 10px; color: #aaa; margin-top: 4px; }
    .opinion-block { background: var(--noir); color: white; padding: 24px; }
    .opinion-block .sidebar-title { color: white; border-color: var(--rouge); }
    .opinion-block .citation { font-family: 'Playfair Display', serif; font-size: 18px; font-style: italic; line-height: 1.4; color: #ddd; margin-bottom: 12px; }
    .opinion-block .auteur { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--or); }
    footer { background: var(--noir); color: #777; padding: 30px 40px; margin-top: 40px; font-size: 11px; display: flex; justify-content: space-between; align-items: center; }
    footer .footer-logo { font-family: 'Playfair Display', serif; font-size: 22px; color: white; font-weight: 900; }
    footer a { color: #777; text-decoration: none; }
  </style>
</head>
<body>
<div class="topbar">
  <div>Vendredi 29 mai 2026 &nbsp;|&nbsp; Édition nationale</div>
  <div><a href="#">Se connecter</a> &nbsp;·&nbsp; <a href="#">S'abonner</a> &nbsp;·&nbsp; <a href="#">Newsletter</a></div>
</div>
<header>
  <div class="header-top">
    <div class="date-edition">Paris · Fondé en 1892</div>
    <div class="logo">
      <h1>Le Tribune Nationale</h1>
      <div class="tagline">Indépendant · Rigoureux · Engagé</div>
    </div>
    <div class="header-actions">
      <button class="btn-abonnement">S'abonner</button>
      <div class="edition-num">N° 47 821</div>
    </div>
  </div>
  <nav>
    <a href="#" class="active">Politique</a>
    <a href="#">France</a>
    <a href="#">Europe</a>
    <a href="#">Monde</a>
    <a href="#">Économie</a>
    <a href="#">Société</a>
    <a href="#">Opinion</a>
    <a href="#">Enquêtes</a>
  </nav>
</header>
<div class="breaking">
  <div class="breaking-label">🔴 En direct</div>
  <div class="breaking-text">Remaniement ministériel : le Premier ministre annonce trois nouveaux secrétaires d'État &nbsp;·&nbsp; Budget 2027 : l'Assemblée nationale entame les débats &nbsp;·&nbsp; Sondage : la cote de popularité du gouvernement en légère hausse &nbsp;·&nbsp; Sénat : vote attendu sur la réforme des collectivités territoriales</div>
</div>
<div class="container">
  <div class="main-grid">
    <div>
      <div class="une">
        <div class="une-principale">
          <h2>Crise gouvernementale : l'exécutif sous pression avant le vote de confiance</h2>
          <p class="chapeau">Le Premier ministre fait face à une fronde interne sans précédent au sein de sa propre majorité. Plusieurs députés menacent de ne pas soutenir le gouvernement lors du vote prévu mercredi prochain, fragilisant davantage une coalition déjà mise à rude épreuve par les récentes réformes sociales.</p>
          <div class="meta">Par Jean-Michel Leroux · Correspondant parlementaire · Il y a 23 minutes</div>
        </div>
        <div class="article-card">
          <div class="rubrique">Élysée</div>
          <h3>Le président reçoit les chefs de partis à l'Élysée dans un climat tendu</h3>
          <p>Une réunion exceptionnelle s'est tenue hier soir dans les salons du palais présidentiel pour tenter de trouver une issue à la crise.</p>
          <div class="meta">Il y a 1h · 4 min de lecture</div>
        </div>
        <div class="article-card">
          <div class="rubrique">Opposition</div>
          <h3>La gauche unie dépose une motion de censure transpartisane</h3>
          <p>Pour la première fois depuis 2011, les partis d'opposition présentent un texte commun visant à renverser le gouvernement.</p>
          <div class="meta">Il y a 2h · 3 min de lecture</div>
        </div>
      </div>
      <div class="separateur"><span>Actualité du jour</span></div>
      <div class="articles-secondaires">
        <div class="art-sec">
          <div class="rubrique">Europe</div>
          <h3>Paris et Berlin s'accordent sur une défense commune renforcée</h3>
          <p>Le traité franco-allemand sur la coopération militaire entre dans sa phase finale après dix-huit mois de discussions.</p>
        </div>
        <div class="art-sec">
          <div class="rubrique">Économie</div>
          <h3>Inflation : le gouvernement annonce un bouclier tarifaire jusqu'à fin 2026</h3>
          <p>Face à la remontée des prix de l'énergie, l'exécutif prolonge son dispositif de protection des ménages modestes.</p>
        </div>
        <div class="art-sec">
          <div class="rubrique">Justice</div>
          <h3>Affaire des marchés publics : trois anciens ministres mis en examen</h3>
          <p>Le parquet national financier a ouvert une instruction judiciaire visant d'anciens membres du gouvernement précédent.</p>
        </div>
        <div class="art-sec">
          <div class="rubrique">Régions</div>
          <h3>Décentralisation : les présidents de régions montent au créneau</h3>
          <p>Réunis à Lyon, ils réclament davantage d'autonomie fiscale et de compétences transférées par l'État central.</p>
        </div>
        <div class="art-sec">
          <div class="rubrique">Social</div>
          <h3>Réforme des retraites : les syndicats annoncent une journée d'action nationale</h3>
          <p>La CGT et FO appellent à une mobilisation le 12 juin contre les nouvelles modalités de calcul des pensions.</p>
        </div>
        <div class="art-sec">
          <div class="rubrique">Diplomatie</div>
          <h3>La France prend la présidence du Conseil de sécurité de l'ONU</h3>
          <p>Paris entend mettre la crise climatique et la sécurité alimentaire au cœur de son agenda pour les trente prochains jours.</p>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="sidebar-block">
        <div class="sidebar-title">Les plus lus</div>
        <div class="sidebar-item">
          <div class="rubrique">Politique</div>
          <h4>Qui sont les ministres en danger dans le prochain remaniement ?</h4>
          <div class="meta">Il y a 3h · 12 847 lectures</div>
        </div>
        <div class="sidebar-item">
          <div class="rubrique">France</div>
          <h4>Sécurité : les nouvelles mesures policières controversées</h4>
          <div class="meta">Il y a 5h · 9 341 lectures</div>
        </div>
        <div class="sidebar-item">
          <div class="rubrique">Économie</div>
          <h4>Pouvoir d'achat : ce qui change au 1er juin 2026</h4>
          <div class="meta">Il y a 6h · 8 102 lectures</div>
        </div>
        <div class="sidebar-item">
          <div class="rubrique">Europe</div>
          <h4>Elections européennes : quelles leçons en tirer un an après ?</h4>
          <div class="meta">Il y a 8h · 6 789 lectures</div>
        </div>
      </div>
      <div class="sidebar-block opinion-block">
        <div class="sidebar-title">Tribune libre</div>
        <div class="citation">« La démocratie ne se défend pas avec des discours, elle se défend avec des actes courageux et des institutions solides. »</div>
        <div class="auteur">— Prof. Hélène Marceau, Sciences Po Paris</div>
      </div>
      <div class="sidebar-block">
        <div class="sidebar-title">Agenda politique</div>
        <div class="sidebar-item">
          <div class="rubrique">Mercredi 3 juin</div>
          <h4>Vote de confiance à l'Assemblée nationale</h4>
        </div>
        <div class="sidebar-item">
          <div class="rubrique">Jeudi 4 juin</div>
          <h4>Conseil européen à Bruxelles</h4>
        </div>
        <div class="sidebar-item">
          <div class="rubrique">Vendredi 5 juin</div>
          <h4>Conférence de presse du Premier ministre</h4>
        </div>
      </div>
    </div>
  </div>
</div>
<footer>
  <div class="footer-logo">Le Tribune Nationale</div>
  <div>© 2026 · Tous droits réservés &nbsp;·&nbsp; <a href="#">Mentions légales</a> &nbsp;·&nbsp; <a href="#">Contact</a> &nbsp;·&nbsp; <a href="#">CGU</a></div>
  <div>Paris · France</div>
</footer>
</body>
</html>`;
