<h3 align="center">Como executar</h3>

- Clone o repositório
- Execute "npm install"
- Delete o arquivo database.sqlite que está dentro da pasta database
- Execute "npm run knex:migrate"
- Execute "npm start"

<h4 align="center">Criar Curso com turma, bloco e disciplina: </h4>

<p>Com uma ferramente de teste de Rest API faça uma requisição do tipo POST para http://localhost:3333/create-curso com o corpo da mensagem nesse molde:</p>

{
	<p>"nome_curso": "Graduação em ADS",</p>
	<p>"nome_turma": "Turma 01",</p>
	<p>"classe": "Classe 01",</p>
	<p>"turno": "Noite",</p>
	<p>"nome_bloco": "Desenvolvimento Front-End",</p>
	<p>"nome_disciplina": "Interfaces com HTML, CSS E JavaScript"</p>
}

<h4 align="center">Listar Curso com turma, bloco e disciplina: </h4>

<p>Com uma ferramente de teste de Rest API faça uma requisição do tipo GET para http://localhost:3333/.

<h4 align="center">Deletar um curso:</h4>

<p>Com uma ferramente de teste de Rest API faça uma requisição do tipo DELETE para http://localhost:3333/{id} passando o id do curso que deseja remover.

