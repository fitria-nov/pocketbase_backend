/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select4133428192",
    "maxSelect": 2,
    "name": "user_type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "customers",
      "artist"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select4133428192",
    "maxSelect": 2,
    "name": "user_type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "customers",
      "barista/artist"
    ]
  }))

  return app.save(collection)
})
