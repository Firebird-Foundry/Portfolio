migrate((db) => {
  const collection = new Collection({
    "id": "umjfghcoxbyuvxd",
    "created": "2022-12-27 16:39:19.650Z",
    "updated": "2022-12-27 16:39:19.650Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "lyhcy0eb",
        "name": "isCoverImage",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("umjfghcoxbyuvxd");

  return dao.deleteCollection(collection);
})
