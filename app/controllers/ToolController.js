const Tool = require('../models/Tool')

module.exports = {
    async index(req, res) {

        try {
            tags = {}
            
            if (Object.keys(req.query).length > 0 && Object.keys(req.query) == 'tag') {
                tags = {'tags': req.query.tag}
            }

            const tools = await Tool.find(tags)
    
            return res.json(tools)

        } catch (err) {
            return res.send(err)
        }

    },

    async show(req, res) {

        try {
            const tool = await Tool.findById(req.params.id)
                                        .catch(err => res.status(400).json(err))

            return res.json(tool)

        } catch (err) {
            return res.send(err)
        }
    },

    async update(req, res) {

        try {
            const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {new: true})
                                        .catch(err => res.status(400).json(err))

            return res.json(tool)

        } catch (err) {
            return res.send(err)
        }
    },

    async store(req, res) {
        try {
            const tool = await Tool.create(req.body)
                                        .catch(err => res.status(400).json(err))

            return res.status(201).json(tool)

        } catch (err) {
            return res.send(err)
        }
    },

    async destroy(req, res) {
        try {
            
            await Tool.findByIdAndRemove(req.params.id)
                                .catch(err => res.status(400).json(err))

            return res.status(204).send()
            
        } catch (err) {
            return res.send(err)
        }
    }
}