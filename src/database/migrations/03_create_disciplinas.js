const up = async (knex) => {
	return knex.schema.createTable('disciplinas', table => {
		table.increments('id').primary()
		table.string('nome_disciplina').notNullable()

		table.integer('bloco_id')
			.notNullable()
			.references('id')
			.inTable('blocos')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	})
}

const down = async (knex) => {
	return knex.schema.dropTable('disciplinas')
}

module.exports = {
	up,
	down
}