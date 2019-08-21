const { Schema, model } = require('mongoose')

const ToolSchema = Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Tool', ToolSchema)