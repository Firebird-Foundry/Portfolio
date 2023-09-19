migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8l9u6jro",
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
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // remove
  collection.schema.removeField("8l9u6jro")

  return dao.saveCollection(collection)
})
