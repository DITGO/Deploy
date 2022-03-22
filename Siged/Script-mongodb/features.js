use clients_database

db.features.drop()

db.features.insert(
[
{
	"name": "DIABÉTICO",
	"description": "Com taxas de açúcar no sangue superiores a 120 mg/l",
	"color": "Gray"
},
{
	"name": "COVID",
	"description": "Apresenta oxigenação no sangue abaixo de 50%",
	"color": "Blue"
},
{
	"name": "GRUPO DE RISCO",
	"description": "Pessoas com idade avançada",
	"color": "Red"
},
{
	"name": "PSIQUIÁTRICO",
	"description": "Caracterizado por avaliação médica e com prescrição de medicamento",
	"color": "Green"
},
{
	"name": "PCD - PESSOA COM DEFICIÊNCIA",
	"description": "Pessoa que possua qualquer tipo de deficiência",
	"color": "Brown"
},
{
	"name": "HIPERTENSO",
	"description": "Pressão arterial acima de 17 x 10",
	"color": "Purple"
},
{
	"name": "NÃO INFORMADO",
	"description": "Não informado",
	"color": "black"
}
]
)

