const {Schema, model} = require('mongoose')

const ImageSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    imagePath: {type: String, required: true},
    create_at: {type: Date, default: Date.now}
})

module.exports = model('Image', ImageSchema)