migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g54ahwxj",
    "name": "project",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "q182dokm15xag1l",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g54ahwxj",
    "name": "project",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "q182dokm15xag1l",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
})
