/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")
  
  // add phone field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1146066909",
    "max": 0,
    "min": 0,
    "name": "phone",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))
  
  // add user_type field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select4133428192",
    "maxSelect": 2,
    "name": "user_type",
    "presentable": false,
    "required": false,
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
  
  // remove user_type field
  collection.fields.removeById("select4133428192")
  
  // remove phone field  
  collection.fields.removeById("text1146066909")

  return app.save(collection)
})