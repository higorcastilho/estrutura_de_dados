<h3 align="center">Como executar</h3>
- Clone o repositório
- Execute "npm install"
- Execute "npm run knex:migrate"
- Execute "npm start"

<h4 align="center">Criar Curso com turma, bloco e disciplina: </h4>

<p>Com uma ferramente de teste de Rest API faça uma requisição do tipo POST para http://localhost:3333/create-curso com o corpo da mensagem nesse molde:</p>

{
	<p>"nome_curso": "Graduação em ADS",</p>
	"nome_turma": "Turma 01",
	"classe": "Classe 01",
	"turno": "Noite",
	"nome_bloco": "Desenvolvimento Front-End",
	"nome_disciplina": "Interfaces com HTML, CSS E JavaScript"
}

