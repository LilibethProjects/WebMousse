//seleccionar todos los elementos que contengan galeria

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagenlight')
const hamburguesa1 = document.querySelector('.hamburguesa');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImg(imagen.getAttribute('src'))

    })
})

contenedorLight.addEventListener('click', (e => {
    if (e.target != imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showimage')
        hamburguesa1.style.opacity = '1'
    }
}))

const aparecerImg = (imagen) => {
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showimage')
    hamburguesa1.style.opacity = '0'

}