const eventos = document.querySelector("#contenedor")

const listaEventos = data.events

let tarjetasCreadas = crearTarjetas(listaEventos)

let checkboxes = document.querySelectorAll('.form-check-input')

let formulario = document.getElementById('form')

let input = document.getElementById('input')

eventos.innerHTML = tarjetasCreadas

function crearTarjetas(datos) {
    let tarjetas = ''
    datos.forEach( evento => {
        if (evento.date > data.currentDate){
            tarjetas += `<div class="card" style="width: 12rem;"><img src="${evento.image} class="card-img-top" alt"img"><div class="card-body"><h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}.</p><a href="./details.html?id=${evento._id}" class="btn btn-outline-dark position-absolute bottom-0 end-0">Details</a></div></div>`
        }
    }
    )
    
    return tarjetas
}




formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let categoriasFiltradas = listaEventos.filter((evento) => evento.category.toLowerCase().includes(input.value.toLowerCase()))
    eventos.innerHTML = crearTarjetas(categoriasFiltradas)
})


