/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.dao().findCollectionByNameOrId("_pb_users_auth_")
  
  // add phone field
  collection.schema.addField(new SchemaField({
    "id": "text1146066909",
    "name": "phone",
    "type": "text",
    "system": false,
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add user_type field
  collection.schema.addField(new SchemaField({
    "id": "select4133428192",
    "name": "user_type",
    "type": "select",
    "system": false,
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "customers",
        "artist"
      ]
    }
  }))

  return app.dao().saveCollection(collection)
}, (app) => {
  const collection = app.dao().findCollectionByNameOrId("_pb_users_auth_")
  
  // remove user_type field
  collection.schema.removeField("select4133428192")
  
  // remove phone field
  collection.schema.removeField("text1146066909")

  return app.dao().saveCollection(collection)
})