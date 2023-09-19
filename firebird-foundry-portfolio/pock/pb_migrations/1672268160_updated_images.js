migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkskj8pl",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d0kkiwgx",
    "name": "isHeaderImage",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // remove
  collection.schema.removeField("qkskj8pl")

  // remove
  collection.schema.removeField("d0kkiwgx")

  return dao.saveCollection(collection)
})
