const contenedor = document.getElementById('contenedor')

let eventos = []

let fecha = ''

let cbox1 = document.getElementById('inlineCheckbox1')

let cbox2 = document.getElementById('inlineCheckbox2')

let cbox3 = document.getElementById('inlineCheckbox3')

let cbox4 = document.getElementById('inlineCheckbox4')

let cbox5 = document.getElementById('inlineCheckbox5')

let cbox6 = document.getElementById('inlineCheckbox6')

let cbox7 = document.getElementById('inlineCheckbox7')

let formulario = document.getElementById('form')

let input = document.getElementById('input')


formulario.addEventListener('submit',(evento)=> {
    evento.preventDefault()
    let categoriasFiltradas = filtrarCategorias(eventos, input.value)
    crearTarjetas(categoriasFiltradas, contenedor)
  })
  
  cbox1.addEventListener('click', () => {
    console.log(cbox1.checked);
    if (cbox1.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox1.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox2.addEventListener('click', () => {
    console.log(cbox2.checked);
    if (cbox2.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox2.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox3.addEventListener('click', () => {
    console.log(cbox3.checked);
    if (cbox3.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox3.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox4.addEventListener('click', () => {
    console.log(cbox4.checked);
    if (cbox4.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox4.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox5.addEventListener('click', () => {
    console.log(cbox5.checked);
    if (cbox5.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox5.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox6.addEventListener('click', () => {
    console.log(cbox6.checked);
    if (cbox6.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox6.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  cbox7.addEventListener('click', () => {
    console.log(cbox7.checked);
    if (cbox7.checked){
      let categoriasFiltradas = filtrosCheckbox(eventos, cbox7.value)
    crearTarjetas(categoriasFiltradas, contenedor)
    }else{
      crearTarjetas(eventos,contenedor)
    }
  })
  
  function traerDatos (){
    //fetch('./data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing').then (response => response.json())
    .then (eventosApi => {
      eventos = eventosApi.events
      fecha = eventosApi.currentDate
      crearTarjetas(eventos,contenedor)
    })
    .catch(error => console.log(error.message))
  }
  
  traerDatos()
  
  function crearTarjetas(datos,ubicacion) {
    
    if (datos.length == 0){
      
      console.log('no hay resultados');
      ubicacion.innerHTML = `<p>No hay resultados</p>`
    }
    tarjetas = ''
    datos.forEach(evento => {
      if (evento.date > fecha){
        tarjetas += `<div class="card position-relative" style="width: 12rem;">
      <img src=${evento.image} class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}.</p>
        <a href="./details.html?id=${evento._id}" class="btn btn-outline-dark position-absolute bottom-0 end-0">Details</a>
      </div>
    </div>`
      }
    })
    ubicacion.innerHTML = tarjetas
  }
  
  function filtrosCheckbox(datos, valor){
    return datos.filter(evento => evento.category == valor)
  }
  
  function filtrarCategorias(datos, texto){
    return datos.filter((dato) => dato.category.toLowerCase().includes(texto.toLowerCase()))
  }