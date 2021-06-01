const accessKey ="t29y2JCxxks4F3Mrfa7Eu7603sH-fgg34nLdHqf5ar4"
const api ="https://api.unsplash.com"
const endpoint = `${api}/search/photos?client_id=${accessKey}`

const input = document.getElementById('input')
const button = document.getElementById('button')
const gallery = document.getElementById('gallery')

const createImage = (url) => {
    const image = document.createElement('img')
    image.src = url
    return image
}

const insertImage = (url) => {
    const image = createImage(url)
    gallery.appendChild(image)
}

const fetchImages = (searchTerm) => {
    button.disabled = true
    fetch(`${endpoint}&page=1&per_page=50&query=${searchTerm}`)
    .then(response => response.json())
    .then(data => data.results.forEach)(res => insertImage(res.urls.regular)))
    .catch(console.log)
    .finally(() => button.disabled = false)
}

const searchButtonCLick = () => {
    gallery.innerHTML = ''
    fetchImages(input.value)
}

button.addEventListener('click', searchButtonCLick)
