const { db } = require('../database/connection')

class CursoController {
	async create(req, res) {
		try {
			const { 
				nome_curso,
				nome_turma,
				classe,
				turno,
				nome_disciplina,
				nome_bloco
			} = req.body



			const insertedCurso = await db('cursos').insert({
				nome_curso
			})

			const cursoId = insertedCurso[0]

			const insertedTurma = await db('turmas').insert({
				nome_turma,
				classe,
				turno,
				curso_id: cursoId
			})

			const turmaId = insertedTurma[0]

			const insertedBloco = await db('blocos').insert({
				nome_bloco,
				turma_id: turmaId
			})

			const blocoId = insertedBloco[0]

			const insertedDisciplina = await db('disciplinas').insert({
				nome_disciplina,
				bloco_id: blocoId
			})

			res.status(201).json({message: "created"})

		} catch(e) {
			console.log(e)
		}
	}
}

module.exports = {
	CursoController
}