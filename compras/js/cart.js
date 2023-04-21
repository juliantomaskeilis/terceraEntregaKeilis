let acumulado = [];

const clubContenedor = document.getElementById('club-contenedor');

clubContenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('agregar')) {
    validarClubEnAcumulado(e.target.id)
  };
})

const validarClubEnAcumulado = (clubId) => {
  const estaRepetido = acumulado.some(club => club.id == clubId)

  if (!estaRepetido) {
    const club = clubs.find(club => club.id == clubId)
    acumulado.push(club)
    pintarClubAcumulado(club)
  } else {
    const clubRepetido = acumulado.find(club => club.id == clubId)
    const cantidad = document.getElementById(`cantidad${clubRepetido.id}`)
    clubRepetido.cantidad++
    cantidad.innerText = `Cantidad: ${clubRepetido.cantidad}`
    actualizarTotalesAcumulado(acumulado)
  }
}

const pintarClubAcumulado = (club) => {
  const contenedor = document.getElementById('acumulado-contenedor')
  const div = document.createElement('div')
  div.classList.add('clubEnAcumulado')
  div.innerHTML = `
    <p>${club.nombre}</p>
    <p>Hinchas: $${club.hinchas}</p>
    <p id=cantidad${club.id}>Cantidad: ${club.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${club.id}">X</button>
  `
  contenedor.appendChild(div)
  actualizarTotalesAcumulado(acumulado)
}

const actualizarTotalesAcumulado = (acumulado) => {
  const totalCantidad = acumulado.reduce((acc, prod) => acc + prod.cantidad, 0)
  const totalCompra = acumulado.reduce((acc, prod) => acc + (prod.hinchas * prod.cantidad), 0)

  pintarTotalesAcumulado(totalCantidad, totalCompra)
  guardarAcumuladoStorage(acumulado)
}

const pintarTotalesAcumulado = (totalCantidad, totalCompra) => {
  const contadorAcumulado = document.getElementById('contador-acumulado')
  const hinchasTotal = document.getElementById('hinchasTotal')

  contadorAcumulado.innerText = totalCantidad
  hinchasTotal.innerText = totalCompra
}

const eliminarClubAcumulado = (clubId) => {
  const clubIndex = acumulado.findIndex(club => club.id == clubId)
  acumulado.splice(clubIndex, 1)
  pintarAcumulado(acumulado)
  actualizarTotalesAcumulado(acumulado)
}

const pintarAcumulado = (acumulado) => {
  const contenedor = document.getElementById('acumulado-contenedor')

  contenedor.innerHTML = ''

  acumulado.forEach(club => {
    const div = document.createElement('div')
    div.classList.add('clubEnAcumulado')
    div.innerHTML = `
      <p>${producto.nombre}</p>
      <p>Precio: $${producto.precio}</p>
      <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
      <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
  });
}

const guardarAcumuladoStorage = (acumulado) => {
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

const obtenerCarritoStorage = () => {
  const acumuladoStorage = JSON.parse(localStorage.getItem('acumulado'))
  return acumuladoStorage
}

if (localStorage.getItem('acumulado')) {
  acumulado = obtenerAcumuladoStorage()
  pintarAcumulado(acumulado)
  actualizarTotalesAcumulado(acumulado)
}
