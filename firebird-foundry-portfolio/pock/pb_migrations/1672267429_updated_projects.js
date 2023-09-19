migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkhfeay6",
    "name": "sortOrder",
    "type": "number",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkhfeay6",
    "name": "sortOrder",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})