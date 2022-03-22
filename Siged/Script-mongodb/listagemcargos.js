use api_roles_db

db.roles.find({}, {"name":1, "_id":1 }).forEach(printjson)

