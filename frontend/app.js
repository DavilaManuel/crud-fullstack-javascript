import './styles/app.css'
import UI from './UI'

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI()
    ui.renderImages()
})

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

    const ui = new UI()
    ui.addNewImage(formData)
})