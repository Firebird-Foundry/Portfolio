migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f17resj9",
    "name": "blurb",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q182dokm15xag1l")

  // remove
  collection.schema.removeField("f17resj9")

  return dao.saveCollection(collection)
})
