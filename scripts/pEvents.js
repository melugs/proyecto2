const eventos = document.querySelector("#contenedor")

const listaEventos = data.events

let tarjetasCreadas = crearTarjetas(listaEventos)

let checkbox = document.getElementById('inlineCheckbox1')

let formulario = document.getElementById('form')

let input = document.getElementById('input')

eventos.innerHTML = tarjetas


function crearTarjetas(datos){
    let tarjetas = ''
    for (const evento of data.events) {
        if (evento.date < data.currentDate)
        tarjetas += `<div class="card" style="width: 12rem;"><img src="${evento.image} class="card-img-top" alt"img"><div class="card-body"><h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}.</p><a href="./details.html" class="btn btn-outline-dark">Details</a></div></div>`
    }
    return tarjetas
}



checkbox.addEventListener('click', () => {
    console.log(checkbox.checked);
    if (checkbox.checked){
      let filtrarCategorias = listaEventos.filter((event) => event.category == checkbox.value)
  
      console.log(filtrarCategorias)
    }else{
      eventos.innerHTML = tarjetasCreadas
    }
  
  })
  
  
  
  input.addEventListener('change', () => {
    let categoriasFiltradas = listaEventos.filter((event) => event.category.toLowerCase().includes(input.value.toLowerCase()) )
    console.log(categoriasFiltradas)
    let tarjetasCreadas = crearTarjetas(categoriasFiltradas)
    eventos.innerHTML = tarjetasCreadas
  })