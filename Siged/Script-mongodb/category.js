use api_database

db.categories.drop()

db.categories.insert(
[
{
	"name": "Suspensão de Porte de Arma",
	"description": "Retirada do porte de arma do servidor mediante recomendação médica",
	"color": "Blue"
},
{
	"name": "Reabilitação",
	"description": "Trabalho de acompanhamento médico",
	"color": "Green"
},
{
	"name": "Licença Psiquiátrica",
	"description": "Licença mediante recomendação médica",
	"color": "Red"
},
{
	"name": "Licença Fisioterápica",
	"description": "Licença mediante recomendação médica",
	"color": "Purple"
}
]
)

