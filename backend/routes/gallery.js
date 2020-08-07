const {Router} = require('express')
const router = Router()
const {unlink} = require('fs-extra')
const path = require('path')

const Image = require('../models/Image')

router.get('/', async (req, res) => {
    const images = await Image.find()
    res.json(images)
})

router.post('/', async (req, res) => {
    const {title, category} = req.body
    const imagePath = `/uploads/${req.file.filename}`
    const newImage = new Image({title, category, imagePath})
    await newImage.save()
    res.json({message: 'Image saved'})
})

router.delete('/:id', async (req, res) => {
    const image = await Image.findByIdAndDelete(req.params.id)
    unlink(path.resolve('./backend/public' + image.imagePath))
    res.json({message: 'Image deleted'})
})

module.exports = router