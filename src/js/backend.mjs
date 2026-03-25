import PocketBase from "pocketbase";
import { formatDate } from "./utils.mjs";

const pb = new PocketBase("http://127.0.0.1:8090");



export async function getEvenements() {
    const today = new Date().toISOString(); // Récupérer la date du jour. Regardez la doc de la méthode toISOString pour plus d'informations: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
    let Evenements = await pb.collection("Evenements").getFullList(
        {
            sort: "Date",
            order: "desc",
            filter: `date >= "${today}"`,
        }
    ); // Filtrer les événements passés en fonction de la date. Si la colonne date n'est pas dans votre collection, vous pouvez la remplacer par une autre colonne de type date.
    Evenements = Evenements.map((Evenements) => {
        Evenements.img = pb.files.getURL(Evenements, Evenements.imgUrl);
        return Evenements;
    }); // Récupérer l'URL de l'image de chaque événement. Vous pouvez remplacer imgUrl par le nom de la colonne qui contient le nom de l'image.
    Evenements = Evenements.map((Evenements) => {
        Evenements.date = formatDate(Evenements.date);
        return Evenements;
    }); // Formater la date de chaque événement. Vous pouvez remplacer date par le nom de la colonne qui contient la date de l'événement. La fonction formatDate est importée du fichier utils.mjs.
    return Evenements;
}

export async function getOneEvenements(id) {
    try {
        const Evenements = await pb.collection("Evenements").getOne(id);
        Evenements.img = pb.files.getURL(Evenements, Evenements.imgUrl);
        Evenements.formattedDate = formatDate(Evenements.date);
        return Evenements;
    } catch (error) {
        return null;
    }
}


export async function setFavoriteEvenements(id, valeurFavori) {
    try {
        console.log("id", id, "valeurFavori", valeurFavori);
        await pb.collection("Evenements").update(id, { favori: valeurFavori });
        return true;
    } catch (error) {
        console.log("error", error);
        return false;
    }
}
