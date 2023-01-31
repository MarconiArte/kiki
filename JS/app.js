//-----------BIENVENIDO USER--------------

const arrayNick = []

const bienvenidoUser = document.getElementById("bienvenidoUser")

if (localStorage.getItem('jugadores')) {
    let nombreJugador = JSON.parse(localStorage.getItem('jugadores'))
    
    bienvenidoUser.innerHTML = `
        <h2> Bienvenido ${nombreJugador.username} </h2>
    `
} else {
    const bienvenidoForm = document.getElementById("bienvenidoForm")
    bienvenidoForm.addEventListener("submit", (e) => {
        e.preventDefault()
    
        let username = document.getElementById("bienvenidoInput").value
    
        const nickUno = {username}
    
        arrayNick.push(nickUno)
    
        localStorage.setItem('jugadores', JSON.stringify(nickUno))
        
        let nombreJugador = JSON.parse(localStorage.getItem('jugadores'))
        
        bienvenidoUser.innerHTML = `
            <h2> Bienvenido ${nombreJugador.username} </h2>
        `
        Swal.fire(`Bienvenido ${nombreJugador.username}. Vas a tener que ayudar a Kiki a escoger una de las tres opciones que aparezcan dependiendo la situación. Solo puedes ingresar 1, 2 y 3. Ten cuidado con tu decisión.`)
    
    })
}
//-----------------Globales---------------------

const siguienteCap = document.getElementById("siguienteCap")

let capituloActual = 0 


//------------FUNCIONES------------------

function presentarCapJson () {

    fetch("./json/capitulosJson.json")

    .then(response => response.json())

    .then(capitulosJson => {
        const divCapitulos = document.getElementById("divCap")
        
        divCapitulos.innerHTML = `
            <h2 class="bordeRojo">${capitulosJson[capituloActual]["titulo"]}</h2>
            <p>${capitulosJson[capituloActual]["resumen"]}</p>
            <img src="${capitulosJson[capituloActual]["imagen"]}">
            <p>${capitulosJson[capituloActual]["pregunta"]}</p>
        ` 
})
}

//--------------EVENTOS----------------------

siguienteCap.addEventListener('click', () => {
    siguienteCap.style.display = "none"
    
    document.getElementById("divRespuesta").innerHTML = ``

    fetch("./json/capitulosJson.json")

    .then(response => response.json())

    .then(capitulosJson =>{
        if (capituloActual < capitulosJson.length) {
        
            capituloActual++
    
            presentarCapJson(capitulosJson[capituloActual])
        }    

    })
})

//-----------PROGRAMA PRINCIPAL-----------
const formulario = document.getElementById("form3")

formulario.addEventListener("submit", (e) => {
    
    e.preventDefault()

    let respuestas = document.getElementById("divRespuestas")

    let divRespuesta = document.getElementById("divRespuesta")

    let opcionSelect = respuestas.options[respuestas.selectedIndex].value
    
    fetch("./json/capitulosJson.json")

    .then(response => response.json())

    .then(capitulosJson => {
        divRespuesta.innerHTML = `
            <p>${capitulosJson[capituloActual]["respuesta"][opcionSelect-1]} </p>
        `
        if (opcionSelect == capitulosJson[capituloActual]["correcta"]) {
            siguienteCap.style.display = "block"
        }
    })
})

presentarCapJson()


