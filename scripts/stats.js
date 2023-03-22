const filasMayor = document.getElementById('filasMayor')

let eventos = []

let fecha = ''

let mayorAsistencia = ''

function traerDatos() {
    //fetch('./data.json')
    fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json())
        .then(eventosApi => {
            eventos = eventosApi.events
            //console.log(eventos);
            fecha = eventosApi.currentDate
            completarFilas(eventos, filasMayor)
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function completarFilas(datos, ubicacion){
    porcentajeAsistencia = ''
    datos.forEach(dato => {
        if (dato.date < fecha) {
            asistencia = dato.assistance / dato.capacity * 100
            
            porcentajeAsistencia = `<tr>
                <td>${completarMayorAsistencia(asistencia)}</td>
                <td>${completarMenorAsistencia(asistencia)}</td>
                <td></td>
             </tr>`
        }
        
        
    })
    ubicacion.innerHTML = porcentajeAsistencia
}

function completarMayorAsistencia(cupo) {
    porcentaje = ''
    if (cupo > 90){
        
        porcentaje = cupo
    }
    return porcentaje
}


function completarMenorAsistencia(cupo){
    porcentaje = ''
    if (cupo < 90){
        
        porcentaje = cupo
        //console.log(porcentaje);
    }
    return porcentaje
}