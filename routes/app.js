const express = require('express')

const ToolController = require('../app/controllers/ToolController')

const routes = express.Router()

routes.get('/tools', ToolController.index)
routes.get('/tools/:id', ToolController.show)
routes.post('/tools', ToolController.store)
routes.put('/tools/:id', ToolController.update)
routes.delete('/tools/:id', ToolController.destroy)

module.exports = routes