migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqbprgo3",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqbprgo3",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
