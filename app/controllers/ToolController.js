const Tool = require('../models/Tool')

module.exports = {
    async index(req, res) {
        tags = {}
        
        if (Object.keys(req.query).length > 0 && Object.keys(req.query) == 'tag') {
            tags = {'tags': req.query.tag}
        }

        const tools = await Tool.find(tags)
                                    .catch(err => {
                                                var error = {"code": 400, "message": err.message}
                                                return res.status(400).json(error)
                                            })

        return res.json(tools)
    },

    async store(req, res) {
        
        const tool = await Tool.create(req.body)
                                    .catch(err => {
                                                var error = {"code": 400, "message": err.message}
                                                return res.status(400).json(err)
                                            })

        return res.status(201).json(tool)
    },

    async show(req, res) {

        const tool = await Tool.findById(req.params.id)
                                    .catch(err => {
                                                var error = {"code": 400, "message": err.message}
                                                return res.status(400).json(error)
                                            })

        return res.json(tool)
    },

    async update(req, res) {

        const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {new: true})
                                    .catch(err => {
                                        var error = {"code": 400, "message": err.message}
                                        return res.status(400).json(error)
                                    })

        return res.json(tool)
    },

    async destroy(req, res) {
        
        const tool = await Tool.findByIdAndRemove(req.params.id)
                                    .catch(err => {
                                        var error = {"code": 500, "message": err.message}
                                        return res.status(500).json(error)
                                    })

        return res.status(204).send()
    }
}