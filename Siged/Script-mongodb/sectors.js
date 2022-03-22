use api_database

db.sectors.drop()

db.sectors.insert(
[
{
	"name": "Recepção",
	"description": "Atendimento Inicial"
},
{
	"name": "Cartório Central",
	"description": "Cartório da DP que gerencia os demais Cartórios"
},
{
	"name": "Seção de Fisioterapia",
	"description": "Modalidade de trabalho corporal"
},
{
	"name": "Seção de Acompanhamento e Suporte",
	"description": "Acompanhamento e suporte ao servidor"
},
{
	"name": "Seção de Psicologia",
	"description": "Acompanhamento Psicológico"
},
{
	"name": "Administrativo",
	"description": "Responsável pelo gerenciamento dos usuários do sistema SiGeD"
}
]
)

