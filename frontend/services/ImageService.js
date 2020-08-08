export default class ImageService {
    constructor() {
        this.URI = '/api/gallery'
    }

    async getImages() {
        const response = await fetch(this.URI)
        const images = await response.json()
        return images
    }

    async postImage(image) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: image
        })
        const data = await response.json()
        console.log(data);
    }

    async deleteImage(imageId) {
        const response = await fetch(`${this.URI}/${imageId}`, {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data);
    }
}