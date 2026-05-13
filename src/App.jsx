import "./App.css";

function App() {
  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#profil">Profil</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#experience">Expériences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HEADER */}
      <header>
        <h1>Yaye Maty Ndiaye</h1>
        <p>Data Scientist</p>

        <div>
          <a href="#contact" className="btn">
            Contactez-moi
          </a>

          <a href="#projects" className="btn btn-outline">
            Voir mes projets
          </a>
        </div>
      </header>

      {/* RECHERCHE */}
      <section id="recherche">
        <h2>🎓 Recherche Active</h2>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">📅</div>
            <h3>Disponibilité</h3>
            <p><strong>À partir de Février 2026</strong></p>
            <p>Stage (CDI possible)</p>
          </div>

          <div className="card">
            <div className="card-icon">📍</div>
            <h3>Localisation</h3>
            <p><strong>France</strong></p>
            <p>Mobilité géographique</p>
            <p>Remote possible</p>
          </div>

          <div className="card">
            <div className="card-icon">💼</div>
            <h3>Domaines recherchés</h3>
            <p>Data Engineering • Big Data</p>
            <p>Cloud Computing • DevOps</p>
            <p>Machine Learning Engineering</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>💡 Centres d’intérêt techniques</h2>

        <div className="card">
          <h3>Passion pour la Data & la Transformation Numérique</h3>

          <p
            style={{
              color: "#e0e0e0",
              fontSize: "1.1em",
              lineHeight: "1.8",
            }}
          >
            Passionnée par le Big Data et la transformation numérique, je
            conçois des solutions data permettant de valoriser les données et
            d’accompagner la prise de décision.
          </p>

          <p
            style={{
              color: "#e0e0e0",
              fontSize: "1.1em",
              lineHeight: "1.8",
              marginTop: "18px",
            }}
          >
            Mon intérêt pour le développement full-stack me permet de comprendre
            l’ensemble du cycle d’une application.
          </p>

          <div className="tags" style={{ marginTop: "30px" }}>
            <span className="tag">📊 Big Data</span>
            <span className="tag">☁️ Cloud</span>
            <span className="tag">💻 Développement Full-Stack</span>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil">
        <h2>👨‍💻 Profil</h2>

        <div className="info-grid">
          <div className="info-box">
            <h3>🎓 Formation</h3>
            <p><strong>ESIGELEC</strong></p>
            <p>École d'ingénieurs</p>
            <p style={{ fontSize: "0.9em", marginTop: "10px" }}>
              Spécialisation Big Data
            </p>
          </div>

          <div className="info-box">
            <h3>📚 Classes préparatoires scientifiques</h3>
            <p>Mathématiques • Physique</p>
            <p>Sciences de l’ingénieur • Informatique</p>
          </div>

          <div className="info-box">
            <h3>📍 Localisation</h3>
            <p><strong>Rouen</strong> (études)</p>
            <p><strong>Paris</strong> (résidence)</p>
            <p style={{ fontSize: "0.95em", marginTop: "8px" }}>
              🚗 Permis B
            </p>
          </div>

          <div className="info-box">
            <h3>🎯 Objectif 2026</h3>
            <p><strong>Diplôme Ingénieur Généraliste</strong></p>
          </div>
        </div>
      </section>

      {/* LANGUES */}
      <section id="langues">
        <h2>🌍 Langues</h2>

        <div className="info-grid">
          <div className="info-box">
            <h3>🇫🇷 Français</h3>
            <p><strong>Langue maternelle</strong></p>
            <p>Lu, écrit, parlé</p>

            <div
              className="tags"
              style={{ marginTop: "15px", justifyContent: "center" }}
            >
              <span className="tag">📜 Certification Voltaire</span>
            </div>
          </div>

          <div className="info-box">
            <h3>🇬🇧 Anglais</h3>
            <p><strong>Niveau avancé</strong></p>
            <p>Lu, écrit, parlé</p>

            <div
              className="tags"
              style={{ marginTop: "15px", justifyContent: "center" }}
            >
              <span className="tag">🎯 TOEIC 860 points</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>🛠️ Compétences Techniques</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>☁️ Cloud Computing</h3>

            <div className="skill-item">Google Cloud Platform (GCP)</div>
            <div className="skill-item">Amazon Web Services (AWS)</div>
            <div className="skill-item">IaaS • PaaS • SaaS</div>
            <div className="skill-item">
              Modèle de responsabilité partagée
            </div>
            <div className="skill-item">Migration Cloud</div>
          </div>

          <div className="skill-category">
            <h3>🐳 DevOps & Conteneurisation</h3>

            <div className="skill-item">Docker • Kubernetes</div>
            <div className="skill-item">CI/CD Pipelines</div>
            <div className="skill-item">Infrastructure as Code (IaC)</div>
            <div className="skill-item">Terraform • Ansible</div>
            <div className="skill-item">Git • GitHub Actions</div>
          </div>

          <div className="skill-category">
            <h3>📊 Big Data & Bases de données</h3>

            <div className="skill-item">SQL • PostgreSQL • MySQL</div>
            <div className="skill-item">NoSQL • MongoDB</div>
            <div className="skill-item">Talend • Apache Spark</div>
            <div className="skill-item">ETL • Data Pipelines</div>
            <div className="skill-item">Data Warehousing</div>
          </div>

          <div className="skill-category">
            <h3>💻 Développement & ML</h3>

            <div className="skill-item">Python • Java • C</div>
            <div className="skill-item">
              JavaScript • React • Streamlit
            </div>
            <div className="skill-item">
              Machine Learning • Scikit-learn
            </div>
            <div className="skill-item">API REST • FastAPI</div>
            <div className="skill-item">Pandas • NumPy</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>💼 Mes Projets</h2>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">🏦</div>

            <div className="project-title">
              <h3>SyLo - Structured Loan</h3>
              <p className="project-subtitle">
                Application de regroupement de crédits
              </p>
            </div>
          </div>

          <p className="project-description">
            Application complète de structuration et regroupement de prêts avec
            pipeline de données financières et génération de rapports PDF.
          </p>

          <div className="tags">
            <span className="tag">Python</span>
            <span className="tag">Streamlit</span>
            <span className="tag">ETL</span>
            <span className="tag">Pytest</span>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">💰</div>

            <div className="project-title">
              <h3>Comparateur de Prix</h3>
              <p className="project-subtitle">
                Application de comparaison en temps réel
              </p>
            </div>
          </div>

          <p className="project-description">
            Application web de comparaison de prix avec scraping de données,
            analyse comparative et pipeline automatisé.
          </p>

          <div className="tags">
            <span className="tag">Web Scraping</span>
            <span className="tag">Python</span>
            <span className="tag">SQL</span>
            <span className="tag">Data Analysis</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2>💼 Expériences Professionnelles</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">
              📊 Juillet 2025 – Septembre 2025
            </div>

            <div className="timeline-title">
              Data Analyst Stagiaire
            </div>

            <div className="timeline-company">
              Ministère de l’Économie, du Plan et de la Coopération — Dakar
            </div>

            <p style={{ color: "#e0e0e0", marginTop: "10px" }}>
              Exploitation des données internes et création de tableaux de bord
              Power BI.
            </p>

            <div className="tags" style={{ marginTop: "15px" }}>
              <span className="tag">Power BI</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">KPI</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">
              🌐 Juillet 2023 – Août 2023
            </div>

            <div className="timeline-title">
              Stagiaire Développement Web
            </div>

            <div className="timeline-company">
              DEFAR SCI — Dakar
            </div>

            <p style={{ color: "#e0e0e0", marginTop: "10px" }}>
              Développement d’un site web dynamique avec authentification et
              gestion des données.
            </p>

            <div className="tags" style={{ marginTop: "15px" }}>
              <span className="tag">PHP</span>
              <span className="tag">MySQL</span>
              <span className="tag">CRUD</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>📧 Contact</h2>

        <div className="card" style={{ textAlign: "center", padding: "50px" }}>
          <h3
            style={{
              fontSize: "1.8em",
              marginBottom: "30px",
              color: "#00d4ff",
            }}
          >
            Intéressé par mon profil ?
          </h3>

          <p
            style={{
              fontSize: "1.2em",
              color: "#e0e0e0",
              marginBottom: "40px",
            }}
          >
            Je suis actuellement en recherche active de stage à partir de
            février 2026.
          </p>

          <div>
            <a
              href="mailto:ndiayeyayematy@gmail.com"
              className="btn"
            >
              ✉️ Envoyez-moi un email
            </a>

            <a href="tel:+33629200750" className="btn">
              📞 +33629200750
            </a>

            <a
              href="/assets/CV-maty-stage.pdf"
              className="btn btn-outline"
            >
              📄 Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
          ©️ 2026 Yaye Maty Ndiaye - Tous droits réservés
        </p>

        <p style={{ color: "#b0b0b0" }}>
          Data Scientist Student | Big Data | Cloud & DevOps
        </p>
      </footer>
    </div>
  );
}

export default App;