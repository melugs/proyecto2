const eventos = document.querySelector("#contenedor")

let tarjetas = ''


for (const evento of data.events) {
	tarjetas += `<div class="card" style="width: 10rem;">
    <img src=${evento.image} class="card-img-top" alt="img">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5> 
      <a href="./details.html" class="btn btn-outline-dark">Details</a>
    </div>
  </div>` 
}


eventos.innerHTML = tarjetas