const contenedor = document.getElementById('contenedor')

let eventos = []

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

function traerDatos (){
  //fetch('./data.json')
  fetch('https://mindhub-xj03.onrender.com/api/amazing').then (response => response.json())
  .then (eventosApi =>{
    eventos = eventosApi.events
    
    const detalle = eventos.find(evento => evento._id == id)
    crearTarjetas(detalle, contenedor)
  })
  .catch(error => console.log(error.message))
}

traerDatos()

function crearTarjetas(datos, ubicacion) {
  tarjeta = ''
  tarjeta = `<div class="row g-0">
    <div class="col-md-4"><img src="${datos.image}" class="img-fluid p-3" alt="img"></div><div class="col-md-8"><div class="card-body"><h3 class="card-title">${datos.name}</h3>
    <ul><li><dl><dt>Date:</dt><dd>${datos.date}</dd></dl></li>                   <li><dl><dt>Description:</dt><dd>${datos.description}</dd></dl></li>              <li><dl><dt>Category:</dt><dd>${datos.category}</dd></dl></li>
    <li><dl><dt>Place:</dt><dd>${datos.place}</dd></dl></li>
    <li><dl><dt>Capacity:</dt><dd>${datos.capacity}</dd></dl></li>
    <li><dl><dt>Assistance or Estimate:</dt><dd>${datos.assistance}</dd></dl></li>
    <li><dl><dt>Price:</dt><dd>${datos.price}</dd></dl></li></ul></div></div></div>`

  ubicacion.innerHTML = tarjeta
} 