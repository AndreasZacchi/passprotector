migrate((db) => {
  const collection = new Collection({
    "id": "qgwqovuz0b63loh",
    "created": "2023-02-11 22:05:39.658Z",
    "updated": "2023-02-11 22:05:39.658Z",
    "name": "passwords",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "abca1hwj",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      },
      {
        "system": false,
        "id": "xiwmsjyp",
        "name": "website",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 60,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "elsweqve",
        "name": "password",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qgwqovuz0b63loh");

  return dao.deleteCollection(collection);
})
