// src/data/projets.ts

export interface Projet {
    title: string;
    slug: string;
    subtitle: string;
    description: string;
    intention: string;
    recherches: string;
    conception: string;
    critiques: string;
    category: string[];
    competences: string[];
    hasDetailPage: boolean;
    externalLink: string;
    cover: string | null;
    heroImages: string[];
    planches: string[];
}

// Catégories du site
export const categories = [
    { label: "Affiche",     key: "affiche",     match: ["Conception graphique"] },
    { label: "Identité",    key: "identite",    match: ["Identité visuelle"] },
    { label: "UX/UI & Jeu vidéo", key: "uxui-jeu", match: ["UX/UI", "Conception de jeu"] },
    { label: "Audiovisuel", key: "audiovisuel", match: ["Production audiovisuelle"] },
];

export function projetsByCategory(match: string[]): Projet[] {
    return projets.filter((p) => p.category.some((c) => match.some((m) => c.includes(m))));
}

export const projets: Projet[] = [
    {
        title: "Judo Club Gardéen",
        slug: "judo-club-gardeen",
        subtitle: "Refonte d’identité visuelle",
        description: "Après deux mois de stage au Judo Club Gardéen, j’ai imaginé une refonte de l’identité visuelle du club pour ses 60 ans : moderniser son image tout en restant fidèle à son héritage. Un projet où la tradition rencontre la modernité.",
        intention: "Pour les 60 ans du club, l’objectif était d’apporter une énergie nouvelle à son image, sans perdre ce qui fait son identité et son histoire.",
        recherches: "Le défi : faire évoluer l’identité visuelle tout en préservant un symbole emblématique, la fleur de cerisier, clin d’œil au Japon et aux racines du judo.",
        conception: "J’ai retravaillé la palette d’origine bleue et rouge en y introduisant de l’orange et de subtils accents brun bordeaux, pour une identité plus équilibrée, cohérente et singulière. À partir de cette direction artistique, j’ai décliné la nouvelle identité sur différents supports : logo animé, tee-shirt, kimonos et packaging.",
        critiques: "",
        category: [
            "Identité visuelle",
            "Conception de logo",
        ],
        competences: [
            "Refonte de logo",
            "Identité visuelle",
            "Direction artistique",
            "Déclinaison multi-supports",
        ],
        hasDetailPage: true,
        externalLink: "",
        cover: "/assets/projets/judo-club-gardeen/cover.webp",
        heroImages: [],
        planches: [
            "/assets/projets/judo-club-gardeen/tee-shirt.webp",
            "/assets/projets/judo-club-gardeen/canette.webp",
            "/assets/projets/judo-club-gardeen/kimonos.webp",
            "/assets/projets/judo-club-gardeen/second-logo.mp4",
        ],
    },
    {
        title: "Prenez Place",
        slug: "prenez-place-belfort",
        subtitle: "Campagne pour la Ville de Belfort",
        description: "Deux jours pour se glisser dans la peau du service communication de la Ville de Belfort. La mission : faire venir les habitants à l’inauguration de la place de la République, un ancien parking devenu jardin public, et leur donner envie d’y revenir.",
        intention: "Inviter les habitants à l’inauguration du samedi 22 mai 2027, puis leur donner envie de s’approprier la place, avec un message central sur ce qu’elle apporte aux Belfortains et à la ville.",
        recherches: "",
        conception: "Le slogan « Prenez place, Belfort prend le temps » joue sur le double sens : venir s’installer sur la nouvelle place et ralentir au cœur de la vieille ville. Une palette bleu et rouge, des illustrations en trame du monument des Trois-Sièges et des bancs de la place, déclinées en affiches et en flyer recto verso pour les informations pratiques (accès, parkings, point info).",
        critiques: "",
        category: [
            "Communication institutionnelle",
            "Conception graphique",
        ],
        competences: [
            "Communication institutionnelle",
            "Design graphique",
            "Conception print",
            "Hiérarchie de l’information",
        ],
        hasDetailPage: true,
        externalLink: "",
        cover: "/assets/projets/prenez-place-belfort/affiches.webp",
        heroImages: [],
        planches: [
            "/assets/projets/prenez-place-belfort/affiches.webp",
            "/assets/projets/prenez-place-belfort/poster-1.webp",
            "/assets/projets/prenez-place-belfort/poster-2.webp",
            "/assets/projets/prenez-place-belfort/flyer-1.webp",
            "/assets/projets/prenez-place-belfort/flyer-2.webp",
        ],
    },
    {
        title: "Mōdulo",
        slug: "modulo",
        subtitle: "refonte identité visuelle",
        description: "Ce projet a été réalisé dans le cadre d’un cours de conception de logo, autour de la refonte de l’identité visuelle d’une marque de mobilier d’intérieur. Le travail a commencé par une phase d’analyse approfondie : étude de l’image existante de la marque, de sa cible, de son positionnement et de sa gamme de prix, afin de comprendre ses codes et ses intentions.",
        intention: "L’intention du projet était de proposer un logo plus contemporain, capable de traduire l’univers du design et du mobilier, tout en restant accessible et fonctionnel. Je souhaitais créer une identité qui évoque à la fois la qualité des matériaux et la mobilité des objets.",
        recherches: "À partir de ces recherches, l’objectif était de proposer une identité plus en phase avec l’univers du design contemporain, tout en restant accessible et cohérente avec les valeurs de la marque. Je me suis particulièrement inspirée de meubles de designers, et notamment du tabouret Curva en métal, pour nourrir ma réflexion formelle.",
        conception: "Cette référence m’a permis de travailler une typographie sur mesure, en m’appuyant sur des formes courbes et une structure modulable, évoquant à la fois la solidité du mobilier et l’idée de mobilité. Le logo a été pensé comme un élément flexible, capable de s’adapter à différents supports, tout en conservant une identité forte et reconnaissable.",
        critiques: "Ce projet m’a permis de lier recherche, références design et expérimentation typographique, et de réfléchir à la manière dont un logo peut traduire l’usage, la matière et l’esprit d’une marque de mobilier.",
        category: [
            "Conception de logo",
            "Identité visuelle",
        ],
        competences: [
            "Création de logo",
            "Typographie sur mesure",
            "Analyse de marque & positionnement",
        ],
        hasDetailPage: true,
        externalLink: "",
        cover: "/assets/projets/modulo/mockup_modulo_t_shirt_zy96eijusa.webp",
        heroImages: [],
        planches: [
            "/assets/projets/modulo/modulo_carton21_v6vhcu0g0f.webp",
            "/assets/projets/modulo/modulo_s2q3zv1cs3.webp",
            "/assets/projets/modulo/mock_up_camion_modulo1_lrqo2vp13u.webp",
            "/assets/projets/modulo/modulo_moodboard_6kew4q0wxh.webp",
            "/assets/projets/modulo/modulo_finis_csitric6sq.webp",
        ],
    },
    {
        title: "Protection animale",
        slug: "protection-animale",
        subtitle: "Campagne de sensibilisation",
        description: "Ce projet a été réalisé dans le cadre d’un cours autour de la publicité de sensibilisation, sur des sujets imposés. J’ai choisi de travailler sur la thématique de la protection animale, en me concentrant plus précisément sur le braconnage des rhinocéros et le trafic de leurs cornes. L’objectif était de sensibiliser le public à la disparition progressive de l’espèce à travers une approche métaphorique.",
        intention: "L’idée était de traduire la fragilité de la vie animale et l’urgence de la situation. Le brief imposait une approche métaphorique. J’ai donc choisi de travailler autour de la bougie comme métaphore : Chaque vie est représentée par une flamme, fragile, vacillante, prête à s’éteindre à tout moment. Cette idée symbolise la disparition progressive de l’espèce et l’urgence de la situation.",
        recherches: "En amont du projet, j’ai mené une recherche approfondie autour du sujet. Je me suis appuyée sur des articles et des ressources de la WWF, qui m’ont permis de collecter la majorité des données utilisées : chiffres, constats, et enjeux liés à la disparition progressive de l’espèce.",
        conception: "À partir de ce concept, j’ai décliné l’idée sur l’ensemble des visuels afin de créer une cohérence de campagne. J’ai opté pour une ambiance sombre et dramatique, avec un fond volontairement discret afin de guider le regard vers l’élément central. La réalisation graphique a été faite sur Photoshop et Illustrator. J’ai travaillé particulièrement les ombres, la fumée, la cire de la bougie et les textures, afin de renforcer le réalisme et l’impact émotionnel des visuels.",
        critiques: "Avec du recul, un point d’amélioration serait la cohérence de la bougie utilisée : selon les affiches, la forme varie (bougie ronde, chandelle…). Pour renforcer encore l’impact visuel et l’unité de la campagne, il aurait été pertinent d’utiliser une seule et même bougie sur l’ensemble des supports, afin de créer un symbole encore plus fort et reconnaissable.",
        category: [
            "Campagne publicitaire",
            "Conception graphique",
        ],
        competences: [
            "Design graphique",
            "Conception d'une campagne visuelle multi-supports",
            "Recherche et argumentation",
            "Maîtrise de Photoshop & Illustrator",
        ],
        hasDetailPage: true,
        externalLink: "",
        cover: "/assets/projets/protection-animale/billboard_mockup_9kf0yo55df.webp",
        heroImages: [],
        planches: [
            "/assets/projets/protection-animale/billboard_mockup1_vs9o44m8js.webp",
            "/assets/projets/protection-animale/group10_6wopgjpy48.webp",
            "/assets/projets/protection-animale/group11_iyhbtdvynn.webp",
            "/assets/projets/protection-animale/affiche_moodboard_qmzi3e7s46.webp",
            "/assets/projets/protection-animale/ii_1_1_lq4u9ncdds.webp",
        ],
    },
    {
        title: "La Quête",
        slug: "la-quete",
        subtitle: "Jeu Vidéo d'Aventure Pirate",
        description: "Ce projet a été réalisé dans le cadre d’un cours de design interactif autour de la création d’un jeu vidéo. En groupe, nous avons imaginé l’univers, l’histoire et les éléments graphiques du jeu. Inspiré de l’univers des pirates, le joueur incarne un jeune pirate en quête d’un trésor légendaire. Pour y parvenir, il doit traverser plusieurs niveaux et récupérer trois clés permettant d’ouvrir le coffre.",
        intention: "L'intention du projet était de créer un jeu cohérent sur tous les plans — visuel, narratif et interactif. Je souhaitais proposer une expérience qui progresse en intensité, où chaque niveau incarne une valeur du code pirate : la Force en mer, le Courage en jungle, la Sagesse dans le lagon — et donne au joueur le sentiment de grandir avec Elio.",
        recherches: "Le défi de ce projet était de garantir la cohérence visuelle entre tous les niveaux. Nous avons beaucoup brainstormé, réalisé des moodboards et fait des points réguliers à chaque étape de création. Ces démarches ont permis de définir une direction commune pour l’univers, les personnages et les environnements.",
        conception: "On a conçu chaque élément de A à Z : fonds, personnages, objets et animations. Le logo a été pensé comme un reflet de l'univers — brut, aventurier et lisible. L'identité visuelle a été construite pour s'adapter à chaque niveau tout en conservant une cohérence forte et immersive.",
        critiques: "Ce projet nous a permis de lier game design, narration et identité visuelle, et de réfléchir à la manière dont un univers cohérent peut traduire les émotions, les mécaniques et l'esprit d'un jeu d'aventure de A à Z.",
        category: [
            "Conception de jeu vidéo",
            "Direction artistique",
        ],
        competences: [
            "Création d'assets graphiques",
            "Game design & narration",
            "Travail collaboratif",
        ],
        hasDetailPage: true,
        externalLink: "https://lison33.582helvetica.com/La-Quete/",
        cover: "/assets/projets/la-quete/cover_laquete_22l9svon9j.png",
        heroImages: [],
        planches: [
            "/assets/projets/la-quete/moodboard_laquete_04chrvwvue.png",
        ],
    },
    {
        title: "Yumly",
        slug: "yumly",
        subtitle: "Plateforme e-commerce",
        description: "Ce projet a été réalisé dans le cadre d'un cours de communication et développement web en groupe. Nous avons conçu de A à Z une plateforme e-commerce permettant aux utilisateurs de découvrir et acheter des produits alimentaires issus des cultures asiatiques, africaines, latino-américaines et méditerranéennes.",
        intention: "L'objectif était de créer une expérience digitale intuitive et immersive, capable de valoriser la richesse des cuisines du monde tout en soutenant les épiceries locales. Je souhaitais proposer une interface à la fois esthétique et accessible, en accord avec les valeurs d'authenticité et de découverte de la marque.",
        recherches: "Nous avons mené une analyse approfondie du marché des épiceries ethniques en France : étude de la concurrence, analyse SWOT, définition de personas et de cibles. Cette phase nous a permis de construire un positionnement différenciant et de définir une stratégie d'acquisition cohérente.",
        conception: "À partir de ces recherches, nous avons développé l'identité visuelle de Yumly — nom, slogan, charte graphique — ainsi que l'architecture du site et les maquettes UX/UI sur Figma. Chaque choix de design a été pensé pour refléter l'univers multiculturel de la plateforme.",
        critiques: "Avec du recul, la gestion du temps entre la partie communication et la partie développement a parfois manqué d'équilibre. Il aurait été pertinent de définir plus tôt une direction artistique commune afin d'assurer une cohérence totale entre le dossier de communication et les maquettes visuelles.",
        category: [
            "Stratégie de communication",
            "UX/UI Design",
        ],
        competences: [
            "UX/UI Design & prototypage Figma",
            "Stratégie de communication digitale",
            "Analyse de marché & positionnement",
            "Travail collaboratif",
        ],
        hasDetailPage: true,
        externalLink: "",
        cover: "/assets/projets/yumly/mokeup_take_away_tgkzedd3bq.webp",
        heroImages: [],
        planches: [],
    },
    {
        title: "Vlog Toronto",
        slug: "vlog-toronto",
        subtitle: "",
        description: "Un projet vidéo conçu pour retranscrire l'énergie brute de Toronto — la vitesse, la lumière, le soleil qui se reflète entre les buildings. Chaque séquence capte l'atmosphère unique de la ville, son rythme effréné et sa vitalité à travers un montage pensé pour ressentir autant que voir.",
        intention: "",
        recherches: "",
        conception: "",
        critiques: "",
        category: [
            "Production audiovisuelle & motion design",
        ],
        competences: [],
        hasDetailPage: false,
        externalLink: "https://youtu.be/zsKKjr98Ti4",
        cover: "/assets/projets/vlog-toronto/toronto_cover_oxxfgqu04c.webp",
        heroImages: [],
        planches: [],
    },
    {
        title: "Showreel 2027",
        slug: "showreel-2027",
        subtitle: "Retour sur mes projets 2026",
        description: "Affiches, direction artistique, vidéo, montage, UI/UX, photographie… Une année à concrétiser des projets, de Montréal à Toulon, pour des marques, des clubs et bien plus encore.",
        intention: "",
        recherches: "",
        conception: "",
        critiques: "",
        category: [
            "Production audiovisuelle & motion design",
        ],
        competences: [
            "Montage vidéo",
            "Motion design",
            "Direction artistique",
        ],
        hasDetailPage: false,
        externalLink: "",
        cover: "/assets/projets/showreel-2027/cover.webp",
        heroImages: [],
        planches: ["/showreel-2027.mp4"],
    },
    {
        title: "A la fut",
        slug: "a-la-fut",
        subtitle: "",
        description: "Conception d'une série d'affiches pour la microbrasserie artisanale À la Fût, autour d'une métaphore centrale : la bière comme or liquide. L'or incarne ici la rareté, le prestige et l'excellence Le visuel joue sur les codes de la richesse et de l'artisanat d'exception pour élever la bière au rang d'objet de convoitise aussi rare et recherché qu'une pépite d'or.",
        intention: "",
        recherches: "",
        conception: "",
        critiques: "",
        category: [
            "Campagne publicitaire",
            "Conception graphique",
        ],
        competences: [],
        hasDetailPage: false,
        externalLink: "",
        cover: "/assets/projets/a-la-fut/alafut_l6umnvykji.webp",
        heroImages: [],
        planches: [
            "/assets/projets/a-la-fut/a_la_fut1_vtvjofs3y8.webp",
            "/assets/projets/a-la-fut/a_la_fut2_431ftfynp3.webp",
            "/assets/projets/a-la-fut/a_la_fut3_ut338gxqbs.webp",
        ],
    },
    {
        title: "Tabasco",
        slug: "tabasco",
        subtitle: "",
        description: "Création d'une affiche promotionnelle pour la sauce Scorpion de Tabasco, la plus piquante de leur gamme. Le concept repose sur une métaphore visuelle forte — une langue marquée au fer rouge par un scorpion — pour exprimer une chaleur intense, addictive et mémorable. Taste the fire, wear the mark.",
        intention: "",
        recherches: "",
        conception: "",
        critiques: "",
        category: [
            "Campagne publicitaire",
            "Conception graphique",
        ],
        competences: [
            "Maîtrise de Photoshop & Illustrator",
            "Design graphique",
            "Travail collaboratif",
        ],
        hasDetailPage: false,
        externalLink: "",
        cover: "/assets/projets/tabasco/tabasco_hh03ng7c40.webp",
        heroImages: [],
        planches: [
            "/assets/projets/tabasco/tabasco_qh7yghwbfw.webp",
        ],
    },
];
