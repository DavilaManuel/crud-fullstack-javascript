import './styles/app.css'
import ImageService from './services/ImageService'

const form = document.getElementById('imageForm')
form.addEventListener('submit', ev => {
    ev.preventDefault()

    const title = document.getElementById('title').value
    const category = document.getElementById('category').value
    const image = document.getElementById('image').files

    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)
    formData.append('image', image[0])

    const imageService = new ImageService()
    imageService.postImage(formData)
})