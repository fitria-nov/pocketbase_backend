/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.schema.addField(new SchemaField({
    "id": "text1294150441",
    "name": "registeredAt",
    "type": "text",
    "system": false,
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 0,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.schema.removeField("text1294150441")

  return dao.saveCollection(collection)
})