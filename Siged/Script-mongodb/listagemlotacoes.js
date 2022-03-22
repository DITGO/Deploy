use clients_database

db.lotacaos.find({}, {"_id":1, "name":1}).forEach(printjson)

