// src/data/galleries.ts

export interface Gallery {
    title: string;
    slug: string;
    description: string;
    cover: string | null;
    photos: string[];
}

export const galleries: Gallery[] = [
    {
        title: "Indonésie",
        slug: "indonesie",
        description: "Galerie photographique réalisée en Indonésie en 2023. Cette série se concentre sur les détails que j’ai capturé, afin de traduire en images les ressentis vécus sur place. Prise de vue réalisée avec un Lumix GX80.",
        cover: "/assets/galleries/indonesie/gallery_cover_bali_hdbfqazndd.png",
        photos: [
            "/assets/galleries/indonesie/bali1_37ryhdn2rm.webp",
            "/assets/galleries/indonesie/bali2_7wy8mdweai.webp",
            "/assets/galleries/indonesie/bali3_nona8uk5f6.webp",
            "/assets/galleries/indonesie/bali4_ww9yhrm0lc.webp",
            "/assets/galleries/indonesie/bali5_j25hqie360.webp",
            "/assets/galleries/indonesie/bali6_21crdhrgo2.webp",
            "/assets/galleries/indonesie/bali7_xqvsnlnpqt.webp",
            "/assets/galleries/indonesie/bali8_soyql6ftto.webp",
            "/assets/galleries/indonesie/bali9_egral6hke0.webp",
        ],
    },
    {
        title: "Photoshoot",
        slug: "photoshoot",
        description: "Galerie photographique réalisée à Mulhouse  en 2025. Cette série est née d’un photoshoot réalisé dans le cadre de la préparation d’un court métrage. À travers ces images, nous avons cherché à capturer la fragilité d’une adolescente, suspendue entre deux phases de sa vie, ce moment incertain entre l’adolescence et le passage à l’âge adulte. Prise de vue réalisée avec un Lumix FZ300.",
        cover: "/assets/galleries/photoshoot/gallery_cover_photoshoot_66gae2cq6a.png",
        photos: [
            "/assets/galleries/photoshoot/adeline9_whaubn40t1.webp",
            "/assets/galleries/photoshoot/adeline8_sckkpas1li.webp",
            "/assets/galleries/photoshoot/adeline7_z0nwys7tbr.webp",
            "/assets/galleries/photoshoot/adeline6_x8w1y8qcpu.webp",
            "/assets/galleries/photoshoot/adeline5_9lvwf4jpck.webp",
            "/assets/galleries/photoshoot/adeline4_msygx34q5z.webp",
            "/assets/galleries/photoshoot/adeline3_kcpxdfxoof.webp",
            "/assets/galleries/photoshoot/adeline2_4y56xv4luz.webp",
            "/assets/galleries/photoshoot/adeline1_8hjvi0bv7o.webp",
        ],
    },
    {
        title: "Toronto",
        slug: "toronto",
        description: "Galerie photographique est réalisée à Toronto en 2025. Entre l’énergie de ses rues et l’attention portée aux visages et aux instants, cette série capture Toronto à travers des portraits et des détails qui racontent la ville autrement. Prise de vue réalisée avec un Lumix Panasonic GX80.",
        cover: "/assets/galleries/toronto/gallery_cover_toronto_o8qxtun9qz.png",
        photos: [
            "/assets/galleries/toronto/toronto9_5ptaj254cg.webp",
            "/assets/galleries/toronto/toronto8_ht1xzinnct.webp",
            "/assets/galleries/toronto/toronto7_qk2l472xq7.webp",
            "/assets/galleries/toronto/toronto6_n71c6kpccy.webp",
            "/assets/galleries/toronto/toronto5_ow7v18s4sv.webp",
            "/assets/galleries/toronto/toronto4_duewh0pfuj.webp",
            "/assets/galleries/toronto/toronto3_mj252ztxjq.webp",
            "/assets/galleries/toronto/toronto2_04rm11vjq3.webp",
            "/assets/galleries/toronto/toronto1_g6mv0x317y.webp",
        ],
    },
    {
        title: "Vancouver",
        slug: "vancouver",
        description: "Galerie photographique est réalisée à Vancouver en 2024. Cette série revient sur mon année de césure. Loin de chez moi, j'ai voulu capturer la spontanéité du quotidien, les moments simples, les visages familiers, la ville comme toile de fond d'une vie qui se construisait. Prise de vue réalisée avec un Lumix Panasonic GX80.",
        cover: "/assets/galleries/vancouver/gallery_cover_vancouver_7q5ovry307.png",
        photos: [
            "/assets/galleries/vancouver/vancouver9_dne753lwna.webp",
            "/assets/galleries/vancouver/vancouver8_n6sqifrl0l.webp",
            "/assets/galleries/vancouver/vancouver7_r61lb97mj7.webp",
            "/assets/galleries/vancouver/vancouver6_sqj1xqjslr.webp",
            "/assets/galleries/vancouver/vancouver5_tvvnzwwiwk.webp",
            "/assets/galleries/vancouver/vancouver4_te8alpmmqi.webp",
            "/assets/galleries/vancouver/vancouver3_wloq8jzul8.webp",
            "/assets/galleries/vancouver/vancouver2_w8g0xorlmf.webp",
            "/assets/galleries/vancouver/vancouver1_5rjrrooejn.webp",
        ],
    },
    {
        title: "New York",
        slug: "new-york",
        description: "Galerie photographique réalisée à New York en 2024. Entre l’effervescence des grandes avenues et le calme inattendu de ses ruelles, cette série capture les contrastes de New York à travers ses paysages urbains et ses instants du quotidien. Prise de vue réalisée avec un Lumix Panasonic GX80.",
        cover: "/assets/galleries/new-york/gallery_cover_nyc_af9y5bi9m9.png",
        photos: [
            "/assets/galleries/new-york/ny9_rneqdy69vl.webp",
            "/assets/galleries/new-york/ny8_gcc77ysk5k.webp",
            "/assets/galleries/new-york/ny7_iska8x6v64.webp",
            "/assets/galleries/new-york/ny6_mv0kxwwux7.webp",
            "/assets/galleries/new-york/ny5_fgoa30fw7k.webp",
            "/assets/galleries/new-york/ny4_ygidyy6wzo.webp",
            "/assets/galleries/new-york/ny3_m08se4y0r8.webp",
            "/assets/galleries/new-york/ny2_wsx0gb9ytw.webp",
            "/assets/galleries/new-york/ny1_bi6t1nrfgb.webp",
        ],
    },
    {
        title: "Maroc",
        slug: "maroc",
        description: "Galerie photographique réalisée au Maroc en 2022. Entre l'immensité du Sahara et l'intimité des ruelles de Marrakech, cette série capture les contrastes du Maroc à travers ses paysages et ses détails. Prise de vue réalisée avec un Lumix Panasonic GX80.",
        cover: "/assets/galleries/maroc/gallery_cover_maroc_nqgchyleus.png",
        photos: [
            "/assets/galleries/maroc/maroc9_51wd27m08g.webp",
            "/assets/galleries/maroc/maroc8_ua4umw8ypj.webp",
            "/assets/galleries/maroc/maroc7_7nlcjodevg.webp",
            "/assets/galleries/maroc/maroc6_miurncjfqd.webp",
            "/assets/galleries/maroc/maroc5_mdi6kf8ahw.webp",
            "/assets/galleries/maroc/maroc4_waplc2h22b.webp",
            "/assets/galleries/maroc/maroc3_rc87w6bcnm.webp",
            "/assets/galleries/maroc/maroc2_sda96cgkej.webp",
            "/assets/galleries/maroc/maroc1_iszolews8c.webp",
        ],
    },
];
