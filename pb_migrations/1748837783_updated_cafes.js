/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3450920187")

  // update collection data
  unmarshal({
    "name": "cafe"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3450920187")

  // update collection data
  unmarshal({
    "name": "cafes"
  }, collection)

  return app.save(collection)
})
