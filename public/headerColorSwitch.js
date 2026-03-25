// headerColorSwitch.js - Analyse la luminosité de l'image en arrière-plan

// Analyser les pixels réels de l'image pour déterminer sa luminosité
function analyzeImageBrightness(imgElement) {
    return new Promise((resolve) => {
        if (!imgElement) {
            console.warn("❌ Image non trouvée");
            resolve(null);
            return;
        }

        // Créer un canvas pour analyser l'image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        // Permettre l'accès CORS
        img.crossOrigin = "Anonymous";

        img.onload = function () {
            try {
                // Dimensionner le canvas pour l'image
                canvas.width = img.width;
                canvas.height = img.height;

                // Dessiner l'image sur le canvas
                ctx.drawImage(img, 0, 0);

                // Extraire les données des pixels
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                // Analyser un échantillon pour performance
                let totalBrightness = 0;
                let pixelCount = 0;

                // Analyser chaque 10ème pixel pour performance
                for (let i = 0; i < data.length; i += 40) { // i += 40 = 10 pixels (RGBA = 4 valeurs)
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    // Calculer la luminosité perceptuelle
                    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                    totalBrightness += brightness;
                    pixelCount++;
                }

                const avgBrightness = totalBrightness / pixelCount;
                console.log(`📊 Analyse image: ${pixelCount} pixels analysés, luminosité moyenne: ${avgBrightness}`);
                resolve(avgBrightness);
            } catch (error) {
                console.error("❌ Erreur lors de l'analyse de l'image:", error);
                resolve(null);
            }
        };

        img.onerror = function () {
            console.error("❌ Impossible de charger l'image");
            resolve(null);
        };

        // Récupérer le src de l'image
        img.src = imgElement.src || imgElement.currentSrc;
    });
}

async function updateHeaderColors() {
    console.log("🔍 === DÉBUT DE LA DÉTECTION (Analyse du fond visible) ===");

    const header = document.getElementById("main-header");
    const headerWhite = document.getElementById("header-white");
    const headerBlack = document.getElementById("header-black");

    if (!header || !headerWhite || !headerBlack) {
        console.error("❌ Éléments introuvables:", { header, headerWhite, headerBlack });
        return;
    }

    console.log("✅ Tous les éléments trouvés");

    // Récupérer la position du header
    const headerRect = header.getBoundingClientRect();
    console.log("📏 Position du header:", headerRect);

    // Chercher plusieurs points sous le header pour détecter le fond visible
    const points = [
        { x: window.innerWidth / 2, y: headerRect.bottom + 20 },
        { x: window.innerWidth / 2, y: headerRect.bottom + 100 },
        { x: window.innerWidth / 4, y: headerRect.bottom + 50 },
        { x: (window.innerWidth * 3) / 4, y: headerRect.bottom + 50 },
    ];

    let totalBrightness = 0;
    let validPoints = 0;

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const elementBelow = document.elementFromPoint(point.x, point.y);

        console.log(`🎯 Point ${i + 1}:`, {
            coords: point,
            element: elementBelow ? elementBelow.tagName : 'null',
            id: elementBelow ? elementBelow.id : 'null'
        });

        if (!elementBelow || elementBelow === header || header.contains(elementBelow)) {
            console.log(`⏭️ Point ${i + 1} ignoré (header ou null)`);
            continue;
        }

        // Chercher si c'est une image
        if (elementBelow.tagName === 'IMG') {
            console.log(`🖼️ Point ${i + 1} est une IMAGE, analyse en cours...`);
            const brightness = await analyzeImageBrightness(elementBelow);
            if (brightness !== null) {
                console.log(`✓ Image brightness: ${brightness}`);
                totalBrightness += brightness;
                validPoints++;
            }
        } else {
            // Analyser le fond en remontant dans le DOM si nécessaire
            let brightness = getElementBrightness(elementBelow);
            console.log(`💡 Point ${i + 1} luminosité:`, brightness);

            if (brightness !== null) {
                totalBrightness += brightness;
                validPoints++;
            }
        }
    }

    console.log(`📊 Points valides: ${validPoints}, Total brightness: ${totalBrightness}`);

    if (validPoints === 0) {
        console.warn("⚠️ Aucun point valide détecté - header reste blanc par défaut");
        applyHeaderColor(null);
    } else {
        const avgBrightness = totalBrightness / validPoints;
        console.log(`✨ ==> LUMINOSITÉ MOYENNE: ${avgBrightness}`);
        applyHeaderColor(avgBrightness);
    }

    console.log("🔍 === FIN DE LA DÉTECTION ===\n");
}

// Fonction pour obtenir la luminosité réelle d'un élément en remontant le DOM si nécessaire
function getElementBrightness(element) {
    let current = element;
    let depth = 0;
    const maxDepth = 10; // Limite pour ne pas remonter trop haut

    while (current && depth < maxDepth) {
        const bgColor = window.getComputedStyle(current).backgroundColor;
        console.log(`  └─ Nivel ${depth}: ${current.tagName} (${current.className}) → ${bgColor}`);

        const brightness = getBrightness(bgColor);

        // Si on trouve une couleur non-transparente, on la retourne
        if (brightness !== null) {
            console.log(`  └─ ✓ Couleur valide trouvée à la profondeur ${depth}: ${brightness}`);
            return brightness;
        }

        // Sinon, remonter au parent
        current = current.parentElement;
        depth++;
    }

    console.log(`  └─ ❌ Aucune couleur valide trouvée après ${depth} niveaux`);
    return null;
}

// Appliquer la couleur du header en fonction de la luminosité
function applyHeaderColor(brightness) {
    const headerWhite = document.getElementById("header-white");
    const headerBlack = document.getElementById("header-black");

    if (!headerWhite || !headerBlack) {
        console.error("❌ Headers introuvables!");
        return;
    }

    console.log(`📋 applyHeaderColor appelée avec brightness: ${brightness}`);

    // Si brightness est null, garder le header blanc par défaut
    if (brightness === null) {
        console.log("🌙 DÉFAUT → Header BLANC visible");
        headerWhite.style.opacity = "1";
        headerWhite.style.visibility = "visible";
        headerBlack.style.opacity = "0";
        headerBlack.style.visibility = "hidden";
        console.log("✓ Styles appliqués: blanc visible, noir caché");
        return;
    }

    // Si fond sombre (brightness < 150) → Header blanc
    // Si fond clair (brightness >= 150) → Header noir
    if (brightness < 150) {
        console.log(`🌙 SOMBRE (${brightness} < 150) → Header BLANC`);
        headerWhite.style.opacity = "1";
        headerWhite.style.visibility = "visible";
        headerBlack.style.opacity = "0";
        headerBlack.style.visibility = "hidden";
        console.log("✓ Styles appliqués: blanc visible, noir caché");
    } else {
        console.log(`☀️ CLAIR (${brightness} >= 150) → Header NOIR`);
        headerWhite.style.opacity = "0";
        headerWhite.style.visibility = "hidden";
        headerBlack.style.opacity = "1";
        headerBlack.style.visibility = "visible";
        console.log("✓ Styles appliqués: noir visible, blanc caché");
    }
}

// Calculer la luminosité d'une couleur RGB
function getBrightness(rgbColor) {
    const match = rgbColor.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/,
    );

    if (!match) {
        return null;
    }

    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    const a = match[4] ? parseFloat(match[4]) : 1;

    if (a < 0.5) {
        return null;
    }

    return (r * 299 + g * 587 + b * 114) / 1000;
}


// Mettre à jour au chargement
console.log("🚀 Script header chargé !");

document.addEventListener("DOMContentLoaded", () => {
    console.log("📄 DOMContentLoaded - attente 200ms pour que les images soient chargées");
    setTimeout(() => {
        console.log("⏰ Timeout 200ms - exécution updateHeaderColors");
        updateHeaderColors();
    }, 200);
});

// Mettre à jour au scroll avec throttle
let scrollTimeout = null;
window.addEventListener("scroll", () => {
    if (scrollTimeout) return;
    scrollTimeout = window.setTimeout(() => {
        updateHeaderColors();
        scrollTimeout = null;
    }, 50);
});

// Mettre à jour au resize
window.addEventListener("resize", () => {
    console.log("📐 Resize détecté");
    updateHeaderColors();
});

// Mettre à jour après LoadingAnimation
window.addEventListener("loadingComplete", () => {
    console.log("🎬 LoadingAnimation terminée");
    setTimeout(updateHeaderColors, 300);
});

// Forcer une mise à jour après chargement complet
setTimeout(() => {
    console.log("⏰ Timeout 500ms - exécution forcée");
    updateHeaderColors();
}, 500);

// Attendre que les images soient chargées
window.addEventListener("load", () => {
    console.log("✅ Toutes les images chargées");
    setTimeout(updateHeaderColors, 100);
});