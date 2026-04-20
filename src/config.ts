export const siteConfig = {
  name: "Jules Lefèvre",
  title: "Ingénieur en Intelligence Artificielle et Data",
  description: "Portfolio de Jules Lefèvre — Ingénieur en Intelligence Artificielle et Data",
  accentColor: "#2563EB",
  social: {
    email: "contact@juleslefevre.fr",
    linkedin: "https://www.linkedin.com/in/jules-lef%C3%A8vre/",
    github: "https://github.com/JulesLfv",
  },
  aboutMe:
    "Ingénieur en Intelligence Artificielle et Data, je me passionne pour le deep learning, la computer vision et leurs applications dans les domaines médicaux, les véhicules autonomes et l'IoT. Au travers de plusieurs stages de recherche en France et à l'étranger (Reims, Madrid), j'ai développé une expertise pratique allant de la reconstruction 3D de corps humain à la prévision de trafic urbain, en passant par les systèmes embarqués connectés. Je cherche à mettre ces compétences au service de projets à fort impact.",
  skills: [
    "Python",
    "PyTorch",
    "Deep Learning",
    "Computer Vision",
    "Machine Learning",
    "Docker",
    "Azure IoT",
    "IoT / Embarqué",
    "LoRaWAN",
    "MQTT / TLS",
    "FreeRTOS",
    "Java",
    "C",
    "SQL",
    "Android",
  ],
  projects: [
    {
      name: "Reconstruction 3D de corps humain & composition corporelle",
      description:
        "Benchmark de modèles HMR (Human Mesh Recovery) pour la reconstruction 3D de corps humain à partir de photos. Prédiction de la composition corporelle (tissu adipeux) pour l'examen médical.",
      link: "",
      skills: ["Python", "Deep Learning", "Computer Vision", "PyTorch"],
    },
    {
      name: "Prévision de trafic urbain avec LSTM",
      description:
        "Création d'un modèle LSTM sous PyTorch pour la prévision de trafic urbain. Ingénierie des fonctionnalités (lags/rolling), standardisation de l'évaluation et fine-tuning pour des résultats optimaux.",
      link: "",
      skills: ["Python", "PyTorch", "Machine Learning", "Data Science"],
    },
    {
      name: "Middleware Azure IoT pour FreeRTOS — scénarios V2X",
      description:
        "Implémentation d'un middleware Azure IoT pour FreeRTOS ciblant des scénarios V2X (télémesure cloud-vers-appareil). Prototypage de flux de données sécurisés MQTT/TLS et documentation pour des démos reproductibles.",
      link: "",
      skills: ["C", "FreeRTOS", "Azure IoT", "MQTT / TLS", "IoT"],
    },
    {
      name: "Prototypes capteurs environnementaux LoRaWAN",
      description:
        "Construction de prototypes de capteurs environnementaux LoRaWAN (EmBitz/Arduino) et intégration multi-capteurs avec acquisition I2C. Collecte et validation de données terrain.",
      link: "",
      skills: ["C", "Arduino", "LoRaWAN", "IoT / Embarqué"],
    },
    {
      name: "CBIR — Recherche d'images par similarité",
      description:
        "Préparation d'une base d'images, extraction de caractéristiques et implémentation de la recherche par similarité pour la recherche d'images basée sur le contenu (Content-Based Image Retrieval).",
      link: "",
      skills: ["Python", "Computer Vision", "Machine Learning"],
    },
  ],
  experience: [
    {
      company: "Laboratoire CReSTIC — I.U.T Reims-Châlons-Charleville",
      title: "Stagiaire de Recherche",
      dateRange: "Mars 2026 - Présent",
      bullets: [
        "Benchmark de modèles HMR pour la reconstruction 3D de corps humain à partir de photos.",
        "Prédiction de la composition corporelle (tissu adipeux) pour l'examen médical.",
      ],
    },
    {
      company: "Laboratoire Lab-I* — Université de Reims Champagne-Ardenne",
      title: "Stagiaire de Recherche",
      dateRange: "Avril 2025 - Juillet 2025",
      bullets: [
        "Création d'un modèle LSTM de prévision de trafic urbain sous PyTorch.",
        "Fine-tuning du modèle pour des résultats optimaux.",
        "Ingénierie des fonctionnalités (lags/rolling), standardisation de l'évaluation et livraison d'un modèle efficace.",
      ],
    },
    {
      company: "B105 Lab — Universidad Politécnica de Madrid",
      title: "Stagiaire de Recherche",
      dateRange: "Avril 2024 - Juin 2024",
      bullets: [
        "Implémentation d'un middleware Azure IoT pour FreeRTOS ciblant des scénarios V2X (télémesure cloud-vers-appareil).",
        "Prototypage de flux de données sécurisés MQTT/TLS, documentation pour des démos reproductibles appareil-vers-cloud.",
        "Collaboration avec des chercheurs en électronique ; présentation des avancées à des publics techniques mixtes.",
      ],
    },
    {
      company: "Université de Reims Champagne-Ardenne",
      title: "Stagiaire de Recherche",
      dateRange: "Avril 2023 - Juillet 2023",
      bullets: [
        "Construction de prototypes de capteurs environnementaux LoRaWAN (EmBitz/Arduino) et intégration multi-capteurs avec acquisition I2C.",
        "Collecte et validation de données terrain, organisation des tests et des logs pour analyse ultérieure.",
      ],
    },
    {
      company: "Keenton SAS — Paris",
      title: "Stagiaire IT",
      dateRange: "Avril 2022 - Mai 2022",
      bullets: [
        "Support aux utilisateurs finaux et assistance sur les petits déploiements.",
        "Dépannage des problèmes de connectivité et de configuration.",
      ],
    },
  ],
  education: [
    {
      school: "Université de Reims Champagne-Ardenne",
      degree: "Master Informatique — spécialité Intelligence Artificielle",
      dateRange: "Sept. 2024 - Présent",
      achievements: [
        "Implémentation de Word2Vec from scratch (CBOW/Skip-gram) avec visualisation des embeddings.",
        "Système CBIR : extraction de caractéristiques et recherche d'images par similarité.",
        "Application Android/Python de collecte GPS pour prédire les trajectoires et types d'animaux.",
        "Modèle de recommandation de films par filtrage collaboratif.",
        "Configuration Docker pour la communication entre un logiciel de véhicule autonome et un simulateur.",
      ],
    },
    {
      school: "Université de Reims Champagne-Ardenne",
      degree: "Licence Informatique — Cursus Master en Ingénierie (CMI)",
      dateRange: "Sept. 2021 - Juin 2024",
      achievements: [
        "Mise en œuvre d'un flux de travail client-serveur distribué pour la vente de cuisines (Java/PHP, TCP/UDP/HTTP).",
        "Conception du modèle de données et de la base de données pour un laboratoire de recherche.",
        "Animation d'une session pédagogique sur l'IA en biologie pour des élèves de primaire.",
        "Conception d'une application collaborative pour réduire le gaspillage alimentaire.",
      ],
    },
  ],
};
