const up = async (knex) => {
	return knex.schema.createTable('blocos', table => {
		table.increments('id').primary()
		table.string('nome_bloco').notNullable()

		table.integer('turma_id')
			.notNullable()
			.references('id')
			.inTable('turmas')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	})
}

const down = async (knex) => {
	return knex.schema.dropTable('blocos')
}

module.exports = {
	up,
	down
}