migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgwqovuz0b63loh")

  collection.listRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qgwqovuz0b63loh")

  collection.listRule = null

  return dao.saveCollection(collection)
})
