const eventos = document.querySelector("#contenedor")

const listaEventos = data.events

let tarjetasCreadas = crearTarjetas(listaEventos)

let checkboxes = document.querySelectorAll('.form-check-input')
console.log(checkboxes);

//let checkbox = document.getElementById("inlineCheckbox1")

let formulario = document.getElementById('form')

let input = document.getElementById('input')

eventos.innerHTML = tarjetasCreadas


function crearTarjetas(datos) {
  eventos.innerHTML = ""
  let tarjetas = ''
  datos.forEach(evento => {
    tarjetas += `<div class="card position-relative" style="width: 12rem;">
    <img src=${evento.image} class="card-img-top" alt="img">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}.</p>
      <a href="./details.html?id=${evento._id}" class="btn btn-outline-dark position-absolute bottom-0 end-0">Details</a>
    </div>
  </div>`
  });
  return tarjetas
}

checkboxes.forEach(cbox => {
  cbox.addEventListener('click', check => {
    console.log(check.checked);
    if (check.checked) {
      console.log(check.checked);
      console.log(cbox.value);
      let filtrarCategorias = listaEventos.filter(evento => evento.category == cbox.value)
      eventos.innerHTML = crearTarjetas(filtrarCategorias)
    } else {
      eventos.innerHTML = tarjetasCreadas
    }
  })
})



// checkbox.addEventListener('click', (evento) => {
//   if (checkbox.checked) {
//     let filtrarCategorias = data.events.filter(evento => evento.category == checkbox.value)
//     eventos.innerHTML = crearTarjetas(filtrarCategorias)
//   }else{
//     eventos.innerHTML = crearTarjetas(listaEventos)
//   }
// })

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  let categoriasFiltradas = listaEventos.filter((evento) => evento.category.toLowerCase().includes(input.value.toLowerCase()) )
  eventos.innerHTML = crearTarjetas(categoriasFiltradas)
})

