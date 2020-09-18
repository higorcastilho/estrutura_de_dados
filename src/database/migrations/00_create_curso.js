const up = async (knex) => {
	return knex.schema.createTable('cursos', table => {
		table.increments('id').primary()
		table.string('nome_curso').notNullable()
	})
}

const down = async (knex) => {
	return knex.schema.dropTable('accounts')
}

module.exports = {
	up,
	down
}