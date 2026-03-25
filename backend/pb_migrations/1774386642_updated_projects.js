/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "select3676338126",
    "maxSelect": 12,
    "name": "competences",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Design graphique",
      "Conception d'une campagne visuelle multi-supports",
      "Recherche et argumentation",
      "Maîtrise de Photoshop & Illustrator",
      "Création de logo",
      "Typographie sur mesure",
      "Analyse de marque & positionnement",
      "Travail collaboratif en équipe",
      "Création d'assets graphiques",
      "UX/UI Design & prototypage Figma",
      "Stratégie de communication digitale",
      "Analyse de marché & positionnement"
    ]
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 7,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Campagne publicitaire",
      "Conception de logo",
      "Identité visuelle",
      "Conception de jeu vidéo",
      "Direction artistique",
      "Stratégie de communication",
      "UX/UI Design"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // remove field
  collection.fields.removeById("select3676338126")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "affiche",
      "web",
      "jeu",
      "branding",
      "video"
    ]
  }))

  return app.save(collection)
})
