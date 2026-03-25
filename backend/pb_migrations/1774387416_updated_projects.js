/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
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
      "Analyse de marché & positionnement",
      "Game design & narration"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
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

  return app.save(collection)
})
