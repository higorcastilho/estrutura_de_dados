const express = require('express')


const { CursoController } = require('./controllers/CursoController.js')
const cursoController = new CursoController

const app = express()
app.use(express.json())

const routes = express.Router()


/*const { 

	connectionsRoutes, 
	classesRoutes, 
	accountsRoutes,
	loginsRoutes 

} = require('./routes/index')

app.use(connectionsRoutes)
app.use(classesRoutes)
app.use(accountsRoutes)
app.use(loginsRoutes)*/

routes.post('/create-curso', cursoController.create) 

app.use(routes)

app.listen(3333, () => {
	console.log('Running on port 3333')
})