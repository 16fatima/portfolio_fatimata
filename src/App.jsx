export default function Portfolio() {
  const projects = [
    {
      title: "Projet PING – SyLo (Structured Loan)",
      organization: "ESIGELEC",
      date: "En cours, 2025",
      location: "Rouen, France",
      mission:
        "Développement d’une application intelligente d’aide à la décision pour analystes financiers. Le projet permet d’analyser la solvabilité d’une entreprise, de comparer ses ratios financiers à son secteur et de simuler un regroupement de prêts.",
      details: [
        "Import et traitement de fichiers financiers entreprise et sectoriels.",
        "Analyse automatique de solvabilité et génération d’un rapport financier.",
        "Simulation de restructuration de prêts avec comparaison avant/après.",
        "Intégration d’une IA locale basée sur Qwen et de l’API ChatGPT.",
        "Mise en place d’une authentification sécurisée avec rôles utilisateur/admin.",
      ],
      tools:
        "Python, Streamlit, Pandas, OpenAI API, Qwen, YAML, Excel/CSV, Git, serveur ROOC, GPU",
      skills:
        "Analyse financière, IA générative, prompt engineering, automatisation, sécurité, UX, gestion de projet",
      icon: "💼",
    },
    {
      title: "Projet Gocod – Backend & Bases NoSQL",
      organization: "ESIGELEC",
      date: "2025",
      location: "Rouen, France",
      mission:
        "Développement backend d’une application avec gestion des utilisateurs, services applicatifs et exploitation de bases NoSQL adaptées à différents cas d’usage.",
      details: [
        "Développement de services backend et de fonctionnalités utilisateurs.",
        "Gestion de données avec MongoDB et extension d’un graphe Neo4j.",
        "Mise en place de tests unitaires pour sécuriser le fonctionnement du projet.",
        "Utilisation de Docker et GitHub Actions pour l’automatisation et l’intégration continue.",
      ],
      tools:
        "Python, FastAPI, MongoDB, Neo4j, Docker, GitHub Actions, Pytest, SCRUM",
      skills:
        "Backend, NoSQL, API, tests, CI/CD, travail agile",
      icon: "🗄️",
    },
    {
      title: "Projet Web Scraping – Comparateur de prix",
      organization: "ESIGELEC / Projet personnel",
      date: "2025",
      location: "Rouen, France",
      mission:
        "Création d’un outil permettant de collecter automatiquement des données produits et prix sur plusieurs sources afin de comparer les offres et d’identifier les meilleurs prix.",
      details: [
        "Scraping multi-sites avec extraction de données produits.",
        "Nettoyage, structuration et stockage des données collectées.",
        "Mise en place d’une interface affichant les résultats et les prix les plus bas.",
        "Utilisation de Docker pour faciliter l’exécution et l’environnement du projet.",
      ],
      tools: "Python, Scrapy, BeautifulSoup, Requests, MySQL, Docker, HTML/CSS",
      skills:
        "Web scraping, automatisation, data cleaning, bases de données, conteneurisation",
      icon: "🛒",
    },
    {
      title: "Projet RFID – Machine Learning & données capteurs",
      organization: "ESIGELEC",
      date: "2025",
      location: "Rouen, France",
      mission:
        "Exploitation de données RFID issues de capteurs afin d’analyser des processus logistiques et de prédire des erreurs de préparation.",
      details: [
        "Prétraitement, nettoyage et normalisation de données RFID.",
        "Analyse exploratoire des distributions et des tendances.",
        "Comparaison de modèles de classification pour prédire les erreurs de pick/packing.",
        "Conception d’une interface permettant d’afficher les prédictions.",
      ],
      tools: "Python, Pandas, Scikit-learn, Random Forest, SVM, LSTM, C#, ASP.NET",
      skills:
        "Machine learning, données capteurs, classification, feature engineering, visualisation",
      icon: "📡",
    },
    {
      title: "Projet Cloud – Déploiement API FastAPI",
      organization: "Veille technologique / Projet académique",
      date: "2025",
      location: "Rouen, France",
      mission:
        "Mise en place d’une démonstration de migration cloud avec déploiement d’une API FastAPI conteneurisée sur Google Cloud Run.",
      details: [
        "Développement d’une API simple avec FastAPI.",
        "Conteneurisation de l’application avec Docker.",
        "Configuration de Google Cloud SDK et déploiement sur Cloud Run.",
        "Gestion des services cloud, des images Docker et des permissions projet.",
      ],
      tools: "FastAPI, Docker, Google Cloud Platform, Cloud Run, Cloud Build, Git",
      skills:
        "Cloud computing, API, Docker, déploiement, architecture cloud, DevOps",
      icon: "☁️",
    },
    {
      title: "Projet LLM – IA Générative & automatisation",
      organization: "Projet personnel / académique",
      date: "2025",
      location: "France",
      mission:
        "Exploration des modèles de langage et de l’IA générative pour automatiser l’analyse, générer du texte et structurer des informations.",
      details: [
        "Tests de modèles LLM et comparaison des réponses générées.",
        "Travail sur le prompt engineering pour améliorer la qualité des résultats.",
        "Réflexion autour du RAG pour rendre les réponses plus fiables et contextualisées.",
        "Exploration de cas d’usage autour du résumé, de l’assistance et de l’analyse documentaire.",
      ],
      tools: "Python, OpenAI API, Qwen, Hugging Face, Transformers, Jupyter Notebook",
      skills:
        "IA générative, NLP, prompt engineering, analyse critique, automatisation",
      icon: "🤖",
    },
    {
      title: "Projet PIC – Sensibilisation à la pollution marine",
      organization: "ESIGELEC",
      date: "2024",
      location: "Rouen, France",
      mission:
        "Projet éducatif visant à sensibiliser des élèves d’école primaire à la pollution de la mer et à ses conséquences sur l’environnement marin.",
      details: [
        "Création d’un aquarium pédagogique avec les enfants.",
        "Animation d’une séance de sensibilisation adaptée à un jeune public.",
        "Vulgarisation des enjeux liés aux déchets plastiques et à la protection des océans.",
        "Travail en équipe pour concevoir une activité simple, interactive et marquante.",
      ],
      tools: "Gestion de projet, communication, créativité, animation, pédagogie",
      skills:
        "Travail d’équipe, vulgarisation, communication, gestion de projet, sensibilité environnementale",
      icon: "🌊",
    },
  ];

  const experiences = [
    {
      period: "2024",
      role: "Stage technicien – Data Analyst / Business Intelligence",
      company: "SONATEL – Groupe Orange, Dakar",
      description:
        "Analyse et valorisation de données clients pour accompagner les décisions marketing et commerciales. Création de dashboards Power BI, extraction de données via SQL/HQL et construction d’indicateurs de suivi.",
      tools: "Power BI, DAX, Power Query, SQL/HQL, Hadoop, Excel",
    },
    {
      period: "2023",
      role: "Stagiaire Développement Web",
      company: "DEFAR SCI – Dakar, Sénégal",
      description:
        "Participation au développement d’une application web et mobile de gestion de commandes dans le domaine de la restauration. Contribution au backend, à la base de données et aux fonctionnalités principales de l’application.",
      tools: "PHP, SQL Developer, phpMyAdmin, HTML/CSS, Android, Git, Trello",
    },
    {
      period: "2023",
      role: "Stage exécutant – Femme de chambre",
      company: "Club Med",
      description:
        "Entretien et préparation des chambres dans le respect des standards d’hygiène et de qualité. Cette expérience m’a permis de développer rigueur, sens du détail, organisation et travail en équipe.",
      tools: "Organisation, gestion du temps, rigueur, travail d’équipe",
    },
  ];

  const skills = [
    {
      category: "Data & IA",
      items: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "LLM", "NLP", "Prompt Engineering"],
    },
    {
      category: "BI & Data Viz",
      items: ["Power BI", "DAX", "Power Query", "Excel", "KPI", "Dashboards"],
    },
    {
      category: "Data Engineering & Cloud",
      items: ["SQL", "HQL", "Hadoop", "Docker", "FastAPI", "Google Cloud", "Git/GitHub"],
    },
    {
      category: "Développement",
      items: ["PHP", "HTML/CSS", "FastAPI", "Streamlit", "API REST", "Git"],
    },
    {
      category: "Soft Skills",
      items: ["Rigueur", "Communication", "Travail d’équipe", "Autonomie", "Adaptabilité"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef7f8] text-slate-900">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#eef7f8]/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-xl text-[#7b4b35]">Fatimata Diakhoumpa</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <a href="#about" className="hover:text-[#7b4b35]">À propos</a>
            <a href="#skills" className="hover:text-[#7b4b35]">Compétences</a>
            <a href="#projects" className="hover:text-[#7b4b35]">Projets</a>
            <a href="#experience" className="hover:text-[#7b4b35]">Expériences</a>
            <a href="#contact" className="hover:text-[#7b4b35]">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d7eef2] via-white to-[#ead8c8] p-8 md:p-14 shadow-xl border border-white">
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#8ecad3]/40 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#b88b68]/30 blur-3xl" />

          <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#7b4b35] font-bold mb-4">
                Portfolio Data / IA
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Fatimata Diakhoumpa
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-6">
                Étudiante ingénieure à l’ESIGELEC — spécialisation Big Data pour la transformation numérique.
              </p>
              <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                Passionnée par la data, l’intelligence artificielle et les solutions numériques utiles, je souhaite évoluer vers les métiers de Data Scientist ou Data Engineer. J’aime transformer les données en informations exploitables et construire des solutions concrètes pour aider à la prise de décision.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="px-6 py-3 rounded-full bg-[#7b4b35] text-white font-semibold shadow-lg hover:scale-105 transition">
                  Voir mes projets
                </a>
                <a href="#contact" className="px-6 py-3 rounded-full bg-white text-[#7b4b35] font-semibold border border-[#d9b99f] hover:scale-105 transition">
                  Me contacter
                </a>
                <a href="https://github.com/16fatima" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#8ecad3] text-slate-900 font-semibold hover:scale-105 transition">
                  GitHub
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-lg border border-white">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#8ecad3] to-[#7b4b35] text-white flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-xl">
                FD
              </div>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-[#eef7f8]">
                  <p className="text-slate-500">Recherche</p>
                  <p className="font-bold">Stage Data Science / Data Engineering</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f7efe8]">
                  <p className="text-slate-500">Localisation</p>
                  <p className="font-bold"> • Mobile sur toute la France</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#eef7f8]">
                  <p className="text-slate-500">Domaines</p>
                  <p className="font-bold">Data • IA • Cloud • BI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-md border border-slate-100">
              <h2 className="text-3xl font-black mb-4 text-[#7b4b35]">À propos</h2>
              <p className="text-slate-700 leading-relaxed">
                Mon parcours s’est progressivement orienté vers l’informatique, la data et l’intelligence artificielle. À travers mes stages et projets, j’ai travaillé sur des problématiques variées : business intelligence, développement web, analyse financière, web scraping, données capteurs, cloud computing et IA générative. Ce portfolio présente les projets qui illustrent le mieux mon profil : technique, analytique, curieux et orienté solutions.
              </p>
            </div>

            <div className="bg-[#7b4b35] text-white rounded-[2rem] p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Objectif</h3>
              <p className="leading-relaxed text-white/90">
                Rejoindre une équipe data pour contribuer à des projets concrets mêlant analyse, automatisation, IA et création de valeur métier.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="pb-16">
          <h2 className="text-4xl font-black mb-8 text-center">Compétences</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-6 shadow-md border border-slate-100 hover:-translate-y-2 transition">
                <h3 className="text-xl font-bold mb-4 text-[#7b4b35]">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-2 rounded-full bg-[#eef7f8] text-slate-700 text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="pb-16">
          <h2 className="text-4xl font-black mb-3 text-center">Projets</h2>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
            Présentation de mes projets sous forme mission / outils / compétences, comme dans un CV technique.
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <article key={index} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-2xl transition">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#eef7f8] flex items-center justify-center text-3xl shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900">{project.title}</h3>
                        <p className="text-[#7b4b35] font-semibold">{project.organization}</p>
                      </div>
                      <div className="text-sm text-slate-500 md:text-right">
                        <p>Date : {project.date}</p>
                        <p>Lieu : {project.location}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_0.8fr] gap-6 mt-6">
                      <div>
                        <p className="font-bold text-[#7b4b35] mb-2">Mission</p>
                        <p className="text-slate-700 leading-relaxed mb-5">{project.mission}</p>

                        <p className="font-bold text-[#7b4b35] mb-2">Réalisations</p>
                        <ul className="space-y-2 text-slate-700 list-none pl-0">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="mt-2 w-2 h-2 rounded-full bg-[#8ecad3] shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-[#eef7f8]">
                          <p className="font-bold text-[#7b4b35] mb-2">Tools</p>
                          <p className="text-slate-700 text-sm leading-relaxed">{project.tools}</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-[#f7efe8]">
                          <p className="font-bold text-[#7b4b35] mb-2">Compétences</p>
                          <p className="text-slate-700 text-sm leading-relaxed">{project.skills}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="pb-16">
          <h2 className="text-4xl font-black mb-8 text-center">Expériences professionnelles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 shadow-md border border-slate-100">
                <p className="text-sm text-slate-500 mb-2">{experience.period}</p>
                <h3 className="text-2xl font-black mb-2">{experience.role}</h3>
                <p className="font-semibold text-[#7b4b35] mb-4">{experience.company}</p>
                <p className="text-slate-700 leading-relaxed mb-5">{experience.description}</p>
                <p className="text-sm bg-[#eef7f8] p-4 rounded-2xl text-slate-700">
                  <span className="font-bold text-[#7b4b35]">Outils / compétences : </span>
                  {experience.tools}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="pb-10">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#7b4b35] to-[#8ecad3] text-white p-10 md:p-14 shadow-xl text-center">
            <h2 className="text-4xl font-black mb-4">Contact</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Je suis ouverte aux opportunités de stage en Data Science, Data Engineering, IA et/ou suivi d'une alternance pur un mastère spécialisé(Bac+6) en Big data et IA .
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:fatimata.diakhoumpa@groupe-esigelec.org" className="px-6 py-3 rounded-full bg-white text-[#7b4b35] font-bold hover:scale-105 transition">
                Email
              </a>
              <a href="tel:+33783138984" className="px-6 py-3 rounded-full bg-white/20 border border-white/40 font-bold hover:scale-105 transition">
                +33 7 83 13 89 84
              </a>
              <a href="https://github.com/16fatima" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/20 border border-white/40 font-bold hover:scale-105 transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/fatimata-diakhoumpa-74b20a26a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbdRhuqesQfKfJ0RXiiVOxw%3D%3D" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white/20 border border-white/40 font-bold hover:scale-105 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
