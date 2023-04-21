const pintarClub = (data) => {
    const contenedor = document.getElementById("club-contenedor");

    data.forEach(club => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${club.imagen}>
                          <span class="card-title">${club.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${club.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${club.desc}</p>
                            <p>${club.hinchas}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };