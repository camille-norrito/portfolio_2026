/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

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
      "UX/UI Design",
      "Conception graphique"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

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
})
