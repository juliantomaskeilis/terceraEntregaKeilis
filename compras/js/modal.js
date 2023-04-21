const modalContenedor = document.querySelector('.modal-contenedor');
const abrirAcumulado = document.getElementById('cesta-acumulado');
const cerrarAcumulado = document.getElementById('btn-cerrar-acumulado');
const modalAcumulado = document.querySelector('.modal-acumulado')

abrirAcumulado.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarAcumulado.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarAcumulado.click()
});

modalAcumulado.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarClubAcumulado(e.target.value)
    }
})