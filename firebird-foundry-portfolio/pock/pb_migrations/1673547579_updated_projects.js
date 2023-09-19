migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rargaga",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rargaga",
    "name": "description",
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
