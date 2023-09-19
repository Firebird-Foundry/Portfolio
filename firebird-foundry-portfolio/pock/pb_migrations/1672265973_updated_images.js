migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehuvcweo",
    "name": "file",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd")

  // remove
  collection.schema.removeField("ehuvcweo")

  return dao.saveCollection(collection)
})
