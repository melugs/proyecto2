const queryString = location.search

const params = new URLSearchParams(queryString)

const listaEventos = data.events

const id = params.get("id")

const detalle = listaEventos.find(evento => evento._id == id)

const eventos = document.querySelector("#contenedor")

let tarjetaCreada = crearTarjeta(listaEventos)

eventos.innerHTML = tarjetaCreada

function crearTarjeta(datos) {
    
    let tarjeta = ''
    tarjeta = `<div class="row g-0">
    <div class="col-md-4"><img src="${detalle.image}" class="img-fluid p-3" alt="img"></div><div class="col-md-8"><div class="card-body"><h3 class="card-title">${detalle.name}</h3>
    <ul><li><dl><dt>Date:</dt><dd>${detalle.date}</dd></dl></li>                   <li><dl><dt>Description:</dt><dd>${detalle.description}</dd></dl></li>              <li><dl><dt>Category:</dt><dd>${detalle.category}</dd></dl></li>
    <li><dl><dt>Place:</dt><dd>${detalle.place}</dd></dl></li>
    <li><dl><dt>Capacity:</dt><dd>${detalle.capacity}</dd></dl></li>
    <li><dl><dt>Assistance or Estimate:</dt><dd>${detalle.assistance}</dd></dl></li>
    <li><dl><dt>Price:</dt><dd>${detalle.price}</dd></dl></li></ul></div></div></div>`
    
    return tarjeta
  }

 