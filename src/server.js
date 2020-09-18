const express = require('express')


const { CursoController } = require('./controllers/CursoController.js')
const cursoController = new CursoController

const app = express()
app.use(express.json())

const routes = express.Router()

routes.post('/create-curso', cursoController.create) 
routes.get('/', cursoController.index) 
routes.delete('/:id', cursoController.delete) 


app.use(routes)

app.listen(3333, () => {
	console.log('Running on port 3333')
})