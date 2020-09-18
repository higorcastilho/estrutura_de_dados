const { db } = require('../database/connection')

class CursoController {

	async index(req, res) {
		const curso = await db('cursos')
			.join('turmas', 'cursos.id', '=', 'turmas.curso_id')
			.join('blocos', 'turmas.id', '=', 'blocos.turma_id')
			.join('disciplinas', 'blocos.id', '=', 'disciplinas.bloco_id')

		res.json(curso)
	}

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

	async delete(req, res) {
		const { id } = req.params
		await db('cursos')
			.where('id', '=', id)
			.del()

		res.status(200).json({message: "deleted"})
	}
}

module.exports = {
	CursoController
}