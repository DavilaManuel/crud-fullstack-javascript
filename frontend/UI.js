import ImageService from './services/ImageService'
import {format} from 'timeago.js'

const imageService = new ImageService()

export default class UI {
    async renderImages() {
        const images = await imageService.getImages()
        const imagesCardContainer = document.getElementById('images-cards')
        imagesCardContainer.innerHTML = ''
        images.forEach(image => {
            const div = document.createElement('div')
            div.className = ''
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="http://localhost:3000/${image.imagePath}" alt="" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="title">${image.title}</h4>
                                <p class="card-text">${image.category}</p>
                                <a class="btn btn-danger delete" href="" _id="${image._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer>
                        ${format(image.create_at)}
                    </div>
                </div>
            `
            imagesCardContainer.appendChild(div)
        })
    }

    async addNewImage(image) {
        await imageService.postImage(image)
        this.clearImageForm()
        this.renderImages()
    }

    clearImageForm() {
        document.getElementById('imageForm').reset()
    }

    renderMessage() {

    }

    deleteImage() {

    }
}