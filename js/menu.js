const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

//si le doy click a algo diferente al icono del menu o al menu abierto no me lo cierra
//sino solo fuera
window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa) {
        menu.classList.toggle("spread")
    }
})