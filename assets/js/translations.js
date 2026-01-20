const translations = {
  en: {
    /* ============================================================
       INDEX.HTML - Navigation
       ============================================================ */
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact",

    /* ============================================================
       INDEX.HTML - Hero Section
       ============================================================ */
    hero_title: "My name is Timothy",
    hero_subtitle: "and I am a",
    hero_typed:
      "Full Stack Developer, E-Commerce Specialist, Business Owner, Digital Marketing Specialist, Data Analyst",

    /* ============================================================
       INDEX.HTML - About Section
       ============================================================ */
    about_title: "About me",
    about_name: "Name:",
    about_name_value: "Timothy Lovato",
    about_profile: "Profile:",
    about_profile_value: "Full Stack Developer",
    about_email: "Email:",
    about_skill: "Skill",
    about_text_1:
      "Passionate about web development, I master both front-end and back-end technologies to create high-performance, intuitive applications. My Full Stack approach allows me to build complete solutions, from core architecture to optimized user interfaces. Always seeking innovation, I integrate best practices in responsive design, UX/UI, and web performance.",
    about_text_2:
      "An entrepreneur at heart, I have founded and developed my own brand, combining e-commerce and custom branding. My goal? Turning ideas into tangible, profitable projects. With a strategic vision and a data-driven approach, I implement tailored solutions to meet market demands and maximize growth and impact.",
    about_text_3:
      "As a digital marketing expert, I design and execute high-impact strategies to boost visibility and sales. From SEO optimization to targeted ad campaigns and influencer marketing, I leverage the latest tools to create maximum impact. My experience allows me to combine branding and performance to ensure a strong market presence.",

    /* ============================================================
       INDEX.HTML - Services Section
       ============================================================ */
    services_title: "Services",
    services_subtitle: "Please contact me for more information on my services.",
    service_web_design: "Web Design",
    service_web_design_desc:
      "Creation of modern, responsive and user-friendly interfaces. I design unique visual experiences tailored to your brand, optimizing user experience and conversion.",
    service_web_dev: "Web Development",
    service_web_dev_desc:
      "Full Stack development of high-performance web applications. From front-end to back-end, I build robust and scalable solutions using the latest technologies.",
    service_data_analytics: "Data Analytics",
    service_data_analytics_desc:
      "Development of custom data analysis solutions and interactive dashboards. From statistical modeling to data visualization tools, I transform your raw data into actionable insights to drive strategic decision-making.",
    service_ecommerce: "E-commerce",
    service_ecommerce_desc:
      "Development of complete e-commerce solutions. Online stores, payment systems, inventory management and optimization of the customer journey for maximum conversions.",
    service_cybersecurity: "Cybersecurity",
    service_cybersecurity_desc:
      "Implementation of security solutions to protect your applications and data. Security audits, vulnerability testing and best practices to ensure the integrity of your systems.",
    service_digital_marketing: "Digital Marketing Services",
    service_digital_marketing_desc:
      "Comprehensive digital marketing strategies: SEO/SEM, social media campaigns, content marketing and performance analytics to grow your online presence and ROI.",

    /* ============================================================
       INDEX.HTML - Counter Section
       ============================================================ */
    counter_works: "WORKS COMPLETED",
    counter_experience: "YEARS OF EXPERIENCE",
    counter_clients: "TOTAL CLIENTS",
    counter_awards: "AWARDS WON",

    /* ============================================================
       INDEX.HTML - Portfolio Section
       ============================================================ */
    portfolio_title: "Portfolio",
    portfolio_subtitle: "Discover my latest projects and achievements.",
    guessing_game: "Guessing Game App",
    gest_azur: "Website for Insurance Broker",
    sensory_tool: "Custom Excel Tool",

    /* ============================================================
       INDEX.HTML - Testimonials Section
       ============================================================ */
    testimonials_title: "What you say...",
    testimonial_1_author: "Bruno",
    testimonial_1_text:
      "Very happy with the work done by Timothy. He was able to meet my expectations and deliver a quality website.",
    testimonial_2_author: "Lucilia & Jessica",
    testimonial_2_text:
      "He was really a great help for automating our process. Very professional and attentive to our needs.",

    /* ============================================================
       INDEX.HTML - Blog Section
       ============================================================ */
    blog_title: "Blog",
    blog_subtitle:
      "Insights, tutorials and thoughts on web development and technology.",

    /* ============================================================
       INDEX.HTML - Contact Section
       ============================================================ */
    contact_title: "Send Message Us",
    contact_get_in_touch: "Get in Touch",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_loading: "Loading",
    contact_error: "Error sending message",
    contact_success: "Your message has been sent. Thank you!",
    contact_info_text:
      "Feel free to reach out for collaboration opportunities, project inquiries, or just to say hello. I'm always open to discussing new projects and creative ideas.",

    /* ============================================================
       INDEX.HTML - Footer
       ============================================================ */
    footer_rights: "All Rights Reserved",
    footer_designed: "Designed by",

    /* ============================================================
       PROJECT PAGES - Common Elements
       ============================================================ */
    project_details: "Details",
    project_info_title: "Project informations",
    project_details_title: "Details",
    project_category: "Category",
    project_client: "Client",
    project_date: "Project date",
    project_url: "Project URL",
    project_hosting: "Hosting & Deployment",
    project_skills: "Skills Developed",
    project_git: "Git - Version Control",
    project_github: "GitHub - Source code repository",
    project_responsive: "Responsive Design",
    project_cat_webdev: "Web Development",
    project_cat_webdesign: "Web design",
    project_cat_data: "Data Analytics",

    /* ============================================================
       GUESSINGGAME.HTML - Guessing Game Project
       ============================================================ */
    project_gg_title: "Guessing Game",
    project_gg_personal: "Personal Project",
    project_gg_date: "Jan. 2026",
    project_gg_desc1:
      "A daily guessing game inspired by the One Piece universe. Players must identify 3 mystery characters each day using clues like gender, crew, devil fruit, etc. Visual feedback (green, yellow, red) and directional arrows guide players toward the correct answer.",
    project_gg_desc2:
      "Built with Vue.js 3 and TypeScript on the frontend, featuring a responsive design with Tailwind CSS and smooth animations. The backend runs on Node.js serverless functions deployed on Vercel, exposing a REST API for daily character selection and search functionality.",
    project_gg_desc3:
      "The project implements game state persistence via localStorage, a hint system unlocked after 10 attempts, and Google AdSense integration for monetization (not active). A custom hash algorithm ensures varied daily character selection across the 150+ complete characters database.",
    project_gg_serverless: "Vercel Serverless Functions",
    project_gg_hosting1: "Vercel Platform for hosting",
    project_gg_skill1:
      "Development of a modern, interactive game design interface, fully responsive",
    project_gg_skill2:
      "Building a backend system to manage game logic and user interactions",
    project_gg_skill3: "API services management",
    project_gg_skill4: "JSON data manipulation",
    project_gg_skill5: "CI/CD, serverless architecture",
    project_gg_skill6: "Client-side data persistence",

    /* ============================================================
       GESTAZUR.HTML - Gest-Azur Project
       ============================================================ */
    project_ga_title: "Gest-Azur Project - Insurance Broker Website",
    project_ga_date: "27 Sep. 2025",
    project_ga_desc1:
      "Led the complete design, development, and deployment of a professional showcase website for Gest-Azur Sàrl, a Swiss insurance brokerage serving clients throughout Switzerland.",
    project_ga_desc2:
      "Managed the full project lifecycle from client requirements analysis to production launch, delivering a responsive single-page application featuring six specialized insurance service sections, an intelligent contact form with real-time validation, and an interactive FAQ system. Implemented modern web standards with mobile-first responsive design to ensure seamless user experience across all devices.",
    project_ga_desc3:
      "Handled comprehensive infrastructure setup including Swiss hosting configuration (Infomaniak), DNS management, HTTPS security implementation, and third-party API integration (Formspree) for contact form processing. This turnkey solution demonstrates my capability to deliver production-grade web applications that meet both technical requirements and Swiss business standards, particularly in regulated sectors.",
    project_ga_spa: "Single Page Application with Anchor Navigation",
    project_ga_formspree: "Formspree services for contact form",
    project_ga_api: "Third-party API integration for request processing",
    project_ga_hosting1: "Web server configuration",
    project_ga_hosting2: "DNS management and production deployment",
    project_ga_hosting3: "HTTPS protocol",
    project_ga_skill1: "Development of a modern, intuitive user interface",
    project_ga_skill2:
      "Implementation of a dynamic contact form with validation UX/UI optimization for the insurance sector",
    project_ga_skill3: "One-page architecture with multiple sections",
    project_ga_skill4: "B2B client communication",
    project_ga_skill5: "Understanding of a regulated sector (insurance)",
    project_ga_skill6: "End-to-end project delivery",

    /* ============================================================
       CUSTOMEXCEL.HTML - Custom Excel Project
       ============================================================ */
    project_ce_title: "Custom Excel Tool",
    project_ce_date: "Dec. 2025",
    project_ce_desc1:
      "Design and development of an automated evaluation system for sensory panels, analyzing multiple key parameters. The project combines advanced VBA functions handling complex cases (tied values, nulls) with multi-criteria evaluation logic generating global scores per attribute.",
    project_ce_desc2:
      "The solution integrates ranking algorithms tolerant to variations, intelligent detection of rating trends, and a configurable rules system. The modular architecture and comprehensive documentation ensure maintainability and enable future evolution toward modern web technologies.",
    project_ce_techstack: "Tech Stack",
    project_ce_excel: "Advanced Excel Formulas",
    project_ce_skill1: "Data structure management (Collections, Arrays)",
    project_ce_skill2: "Complex conditional logic (multiple case handling)",
    project_ce_skill3: "Custom VBA function development",
    project_ce_skill4: "Comprehensive user documentation writing",
    project_ce_skill5:
      "Technical communication (complex concept simplification)",
    project_ce_skill6: "Evolving requirements management",
  },

  fr: {
    /* ============================================================
       INDEX.HTML - Navigation
       ============================================================ */
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_projects: "Projets",
    nav_blog: "Blog",
    nav_contact: "Contact",

    /* ============================================================
       INDEX.HTML - Hero Section
       ============================================================ */
    hero_title: "Je m'appelle Timothy",
    hero_subtitle: "et je suis un",
    hero_typed:
      "Développeur Full Stack, Spécialiste E-Commerce, Chef d'Entreprise, Spécialiste Marketing Digital",

    /* ============================================================
       INDEX.HTML - About Section
       ============================================================ */
    about_title: "À propos de moi",
    about_name: "Nom :",
    about_name_value: "Timothy Lovato",
    about_profile: "Profil :",
    about_profile_value: "Développeur Full Stack",
    about_email: "Email :",
    about_skill: "Compétences",
    about_text_1:
      "Passionné par le développement web, je maîtrise les technologies front-end et back-end pour créer des applications performantes et intuitives. Mon approche Full Stack me permet de concevoir des solutions complètes, de l'architecture de base aux interfaces utilisateur optimisées. Toujours en quête d'innovation, j'intègre les meilleures pratiques en design responsive, UX/UI et performance web.",
    about_text_2:
      "Entrepreneur dans l'âme, j'ai fondé et développé ma propre marque, alliant e-commerce et branding personnalisé. Mon objectif ? Transformer des idées en projets concrets et rentables. Avec une vision stratégique et une approche data-driven, je mets en œuvre des solutions sur mesure pour répondre aux exigences du marché et maximiser la croissance et l'impact.",
    about_text_3:
      "En tant qu'expert en marketing digital, je conçois et exécute des stratégies à fort impact pour booster la visibilité et les ventes. De l'optimisation SEO aux campagnes publicitaires ciblées en passant par le marketing d'influence, j'exploite les derniers outils pour créer un impact maximal. Mon expérience me permet de combiner branding et performance pour assurer une présence forte sur le marché.",

    /* ============================================================
       INDEX.HTML - Services Section
       ============================================================ */
    services_title: "Services",
    services_subtitle:
      "Contactez-moi pour plus d'informations sur mes services.",
    service_web_design: "Web Design",
    service_web_design_desc:
      "Création d'interfaces modernes, responsives et conviviales. Je conçois des expériences visuelles uniques adaptées à votre marque, optimisant l'expérience utilisateur et la conversion.",
    service_web_dev: "Développement Web",
    service_web_dev_desc:
      "Développement Full Stack d'applications web performantes. Du front-end au back-end, je construis des solutions robustes et évolutives utilisant les dernières technologies.",
    service_data_analytics: "Analyse de Données",
    service_data_analytics_desc:
      "Développement de solutions d'analyse de données personnalisées et de tableaux de bord interactifs. De la modélisation statistique aux outils de visualisation de données, je transforme vos données brutes en insights actionnables pour guider la prise de décision stratégique.",
    service_ecommerce: "E-commerce",
    service_ecommerce_desc:
      "Développement de solutions e-commerce complètes. Boutiques en ligne, systèmes de paiement, gestion des stocks et optimisation du parcours client pour des conversions maximales.",
    service_cybersecurity: "Cybersécurité",
    service_cybersecurity_desc:
      "Mise en place de solutions de sécurité pour protéger vos applications et données. Audits de sécurité, tests de vulnérabilité et meilleures pratiques pour garantir l'intégrité de vos systèmes.",
    service_digital_marketing: "Services de Marketing Digital",
    service_digital_marketing_desc:
      "Stratégies de marketing digital complètes : SEO/SEM, campagnes sur les réseaux sociaux, marketing de contenu et analyses de performance pour développer votre présence en ligne et votre ROI.",

    /* ============================================================
       INDEX.HTML - Counter Section
       ============================================================ */
    counter_works: "PROJETS RÉALISÉS",
    counter_experience: "ANNÉES D'EXPÉRIENCE",
    counter_clients: "CLIENTS AU TOTAL",
    counter_awards: "RÉCOMPENSES OBTENUES",

    /* ============================================================
       INDEX.HTML - Portfolio Section
       ============================================================ */
    portfolio_title: "Portfolio",
    portfolio_subtitle: "Découvrez mes derniers projets et réalisations.",
    guessing_game: 'App "Qui est-ce ?"',
    gest_azur: "Site Web // Courtier en Assurances",
    sensory_tool: "Outil Excel Personnalisé",

    /* ============================================================
       INDEX.HTML - Testimonials Section
       ============================================================ */
    testimonials_title: "Ce que vous en dites...",
    testimonial_1_author: "Bruno",
    testimonial_1_text:
      "Très content du travail effectué par Timothy. Il a su répondre à mes attentes et livrer un site web de qualité.",
    testimonial_2_author: "Lucilia & Jessica",
    testimonial_2_text:
      "Il nous a vraiment été d'une grande aide pour l'automatisation de notre processus. Très professionnel et à l'écoute de nos besoins.",

    /* ============================================================
       INDEX.HTML - Blog Section
       ============================================================ */
    blog_title: "Blog",
    blog_subtitle:
      "Conseils, tutoriels et réflexions sur le développement web et la technologie.",

    /* ============================================================
       INDEX.HTML - Contact Section
       ============================================================ */
    contact_title: "Envoyez-nous un message",
    contact_get_in_touch: "Contactez-moi",
    contact_name: "Votre nom",
    contact_email: "Votre email",
    contact_subject: "Sujet",
    contact_message: "Message",
    contact_send: "Envoyer le message",
    contact_loading: "Chargement",
    contact_error: "Erreur lors de l'envoi du message",
    contact_success: "Votre message a été envoyé. Merci !",
    contact_info_text:
      "N'hésitez pas à me contacter pour des opportunités de collaboration, des demandes de projets ou simplement pour dire bonjour. Je suis toujours ouvert à discuter de nouveaux projets et d'idées créatives.",

    /* ============================================================
       INDEX.HTML - Footer
       ============================================================ */
    footer_rights: "Tous droits réservés",
    footer_designed: "Conçu par",

    /* ============================================================
       PROJECT PAGES - Common Elements
       ============================================================ */
    project_details: "Détails",
    project_info_title: "Informations du projet",
    project_details_title: "Détails",
    project_category: "Catégorie",
    project_client: "Client",
    project_date: "Date du projet",
    project_url: "URL du projet",
    project_hosting: "Hébergement & Déploiement",
    project_skills: "Compétences développées",
    project_git: "Git - Contrôle de version",
    project_github: "GitHub - Dépôt de code source",
    project_responsive: "Design Responsive",
    project_cat_webdev: "Développement Web",
    project_cat_webdesign: "Web design",
    project_cat_data: "Analyse de données",

    /* ============================================================
       GUESSINGGAME.HTML - Guessing Game Project
       ============================================================ */
    project_gg_title: "Jeu de Devinettes",
    project_gg_personal: "Projet Personnel",
    project_gg_date: "Jan. 2026",
    project_gg_desc1:
      "Un jeu de devinettes quotidien inspiré de l'univers One Piece. Les joueurs doivent identifier 3 personnages mystères chaque jour en utilisant des indices comme le genre, l'équipage, le fruit du démon, etc. Un retour visuel (vert, jaune, rouge) et des flèches directionnelles guident les joueurs vers la bonne réponse.",
    project_gg_desc2:
      "Développé avec Vue.js 3 et TypeScript côté frontend, avec un design responsive grâce à Tailwind CSS et des animations fluides. Le backend fonctionne sur des fonctions serverless Node.js déployées sur Vercel, exposant une API REST pour la sélection quotidienne de personnages et la fonctionnalité de recherche.",
    project_gg_desc3:
      "Le projet implémente la persistance de l'état du jeu via localStorage, un système d'indices débloqué après 10 tentatives, et l'intégration de Google AdSense pour la monétisation (non active). Un algorithme de hachage personnalisé assure une sélection quotidienne variée de personnages parmi plus de 150 personnages complets dans la base de données.",
    project_gg_serverless: "Fonctions Serverless Vercel",
    project_gg_hosting1: "Plateforme Vercel pour l'hébergement",
    project_gg_skill1:
      "Développement d'une interface de jeu moderne et interactive, entièrement responsive",
    project_gg_skill2:
      "Construction d'un système backend pour gérer la logique du jeu et les interactions utilisateur",
    project_gg_skill3: "Gestion des services API",
    project_gg_skill4: "Manipulation de données JSON",
    project_gg_skill5: "CI/CD, architecture serverless",
    project_gg_skill6: "Persistance des données côté client",

    /* ============================================================
       GESTAZUR.HTML - Gest-Azur Project
       ============================================================ */
    project_ga_title: "Projet Gest-Azur - Site Web Courtier en Assurances",
    project_ga_date: "27 Sep. 2025",
    project_ga_desc1:
      "Direction de la conception, du développement et du déploiement complets d'un site vitrine professionnel pour Gest-Azur Sàrl, un courtier en assurances suisse servant des clients dans toute la Suisse.",
    project_ga_desc2:
      "Gestion du cycle de vie complet du projet, de l'analyse des besoins client au lancement en production, livrant une application monopage responsive comportant six sections de services d'assurance spécialisés, un formulaire de contact intelligent avec validation en temps réel, et un système de FAQ interactif. Implémentation des standards web modernes avec un design mobile-first pour garantir une expérience utilisateur fluide sur tous les appareils.",
    project_ga_desc3:
      "Gestion de l'infrastructure complète incluant la configuration d'hébergement suisse (Infomaniak), la gestion DNS, l'implémentation de la sécurité HTTPS, et l'intégration d'API tierces (Formspree) pour le traitement du formulaire de contact. Cette solution clé en main démontre ma capacité à livrer des applications web de niveau production répondant aux exigences techniques et aux standards commerciaux suisses, particulièrement dans les secteurs réglementés.",
    project_ga_spa: "Application monopage avec navigation par ancres",
    project_ga_formspree: "Services Formspree pour formulaire de contact",
    project_ga_api: "Intégration d'API tierces pour le traitement des requêtes",
    project_ga_hosting1: "Configuration de serveur web",
    project_ga_hosting2: "Gestion DNS et déploiement en production",
    project_ga_hosting3: "Protocole HTTPS",
    project_ga_skill1:
      "Développement d'une interface utilisateur moderne et intuitive",
    project_ga_skill2:
      "Implémentation d'un formulaire de contact dynamique avec validation et optimisation UX/UI pour le secteur des assurances",
    project_ga_skill3: "Architecture one-page avec sections multiples",
    project_ga_skill4: "Communication client B2B",
    project_ga_skill5: "Compréhension d'un secteur réglementé (assurances)",
    project_ga_skill6: "Livraison de projet de bout en bout",

    /* ============================================================
       CUSTOMEXCEL.HTML - Custom Excel Project
       ============================================================ */
    project_ce_title: "Outil Excel Personnalisé",
    project_ce_date: "Déc. 2025",
    project_ce_desc1:
      "Conception et développement d'un système d'évaluation automatisé pour panels sensoriels, analysant de multiples paramètres clés. Le projet combine des fonctions VBA avancées gérant les cas complexes (valeurs ex aequo, nulles) avec une logique d'évaluation multicritère générant des scores globaux par attribut.",
    project_ce_desc2:
      "La solution intègre des algorithmes de classement tolérants aux variations, une détection intelligente des tendances de notation, et un système de règles configurable. L'architecture modulaire et la documentation complète assurent la maintenabilité et permettent une évolution future vers des technologies web modernes.",
    project_ce_techstack: "Stack Technique",
    project_ce_excel: "Formules Excel avancées",
    project_ce_skill1:
      "Gestion des structures de données (Collections, Tableaux)",
    project_ce_skill2:
      "Logique conditionnelle complexe (gestion de cas multiples)",
    project_ce_skill3: "Développement de fonctions VBA personnalisées",
    project_ce_skill4: "Rédaction de documentation utilisateur complète",
    project_ce_skill5:
      "Communication technique (simplification de concepts complexes)",
    project_ce_skill6: "Gestion des exigences évolutives",
  },
};
