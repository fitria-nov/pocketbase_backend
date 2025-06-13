/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3450920187")

  // remove field
  collection.fields.removeById("json1090999472")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1090999472",
    "max": 0,
    "min": 0,
    "name": "specialties",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3450920187")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "json1090999472",
    "maxSize": 0,
    "name": "specialties",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("text1090999472")

  return app.save(collection)
})
