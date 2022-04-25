use clients_database

db.clients.drop()

db.clients.insert(
[
{ "userID": "625ec190bbf25e0054e3f1c9", "name": "ABADIO SOUZA E SILVA", "cpf": "54885957168", "email": "abadio.silva@policiacivil.go.gov.br", "phone": "62984953422", "secondaryPhone": "06232012652", "office": "DELEGADO DE POLÍCIA CLASSE ESPECIAL", "location": "625ecbab2dab701016bd7849", "address": "Não Informado", "history": [{ "userID": "625ec190bbf25e0054e3f1c9", "date": "2021-11-03T13:57:39.000z", "label": "created" }], "active": true, "features": "625ecbab25baeba1cacc0824", "image": "", "gender": "Masculino", "birthdate": "1971/06/03" },
{ "userID": "625ec190bbf25e0054e3f1c9", "name": "ABIMAR LEONEL GOMES", "cpf": "47668075100", "email": "abimarlg@policiacivil.go.gov.br", "phone": "06199378657", "secondaryPhone": "06136371145", "office": "AGENTE AUXILIAR POLICIAL", "location": "625ecbab2dab701016bd777c", "address": "Não Informado", "history": [{ "userID": "625ec190bbf25e0054e3f1c9", "date": "2021-11-03T13:57:39.000z", "label": "created" }], "active": true, "features": "625ecbab25baeba1cacc0824", "image": "", "gender": "Masculino", "birthdate": "1969/02/16" },
{ "userID": "625ec190bbf25e0054e3f1c9", "name": "ZULMIRA ESPINDOLA ROSA", "cpf": "79489249149", "email": "zulmira.rosa@policiacivil.go.gov.br", "phone": "06186029419", "secondaryPhone": "06232714272", "office": "AGENTE DE POLÍCIA DA 1ª CLASSE", "location": "625ecbab2dab701016bd776b", "address": "Não Informado", "history": [{ "userID": "625ec190bbf25e0054e3f1c9", "date": "2021-11-03T13:57:39.000z", "label": "created" }], "active": true, "features": "625ecbab25baeba1cacc0824", "image": "", "gender": "Feminino", "birthdate": "1974/04/09" }
]
)
