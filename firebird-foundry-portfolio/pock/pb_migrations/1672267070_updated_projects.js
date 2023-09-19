migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // remove
  collection.schema.removeField("dkhfeay6")

  return dao.saveCollection(collection)
})
