use clients_database

db.clients.drop()

db.clients.insert(
[
{ "userID": "6182bd65871bb40056e97348", "name": "ABADIO SOUZA E SILVA", "cpf": "54885957168", "email": "ABADIO.SILVA@POLICIACIVIL.GO.GOV.BR", "phone": "62984953422", "secondaryPhone": "06232012652", "address": "Não Informado", "office": "DELEGADO DE POLÍCIA CLASSE ESPECIAL", "location": "6182cd3b555069694281e393", "address": "Não Informado", "history": [{ "userID": "6182bd65871bb40056e97348", "date": "2021-11-03T13:57:39.000z", "label": "created" }], "active": true, "features": "6182cd3a5827d211cd5aedf2", "image": "" },
{ "userID": "6182bd65871bb40056e97348", "name": "ABIMAR LEONEL GOMES", "cpf": "47668075100", "email": "ABIMARLG@POLICIACIVIL.GO.GOV.BR", "phone": "06199378657", "secondaryPhone": "06136371145", "address": "Não Informado", "office": "AGENTE AUXILIAR POLICIAL", "location": "6182cd3b555069694281e2c6", "address": "Não Informado", "history": [{ "userID": "6182bd65871bb40056e97348", "date": "2021-11-03T13:57:39.000z", "label": "created" }], "active": true, "features": "6182cd3a5827d211cd5aedf2", "image": "" },
]
)
