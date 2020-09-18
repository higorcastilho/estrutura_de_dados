const up = async (knex) => {
	return knex.schema.createTable('turmas', table => {
		table.increments('id').primary()
		table.string('nome_turma').notNullable()
		table.string('classe').notNullable()
		table.string('turno').notNullable()

		table.integer('curso_id')
			.notNullable()
			.references('id')
			.inTable('cursos')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	})
}

const down = async (knex) => {
	return knex.schema.dropTable('turmas')
}

module.exports = {
	up,
	down
}