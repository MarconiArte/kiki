//--------------------------Clases-----------------------------
class Capitulo {
    constructor(titulo, resumen,imagen, pregunta, correcta,respuestas) {
        this.titulo = titulo
        this.resumen = resumen
        this.imagen = imagen
        this.pregunta = pregunta //Opciones a elegir
        this.correcta = correcta //numerito
        this.respuestas = respuestas //Array de respuestas segun la pregunta
    }
}

//------- variables (objetos y arrays)-------------

const capituloUno = new Capitulo ("Kiki es una chica de 19 años un tanto rara, no tiene amigos y le gusta pasar tiempo en su cuarto a solas", "Kiki decidio escuchar música acostada en su cama","../img/cap1part1.jpg","Ella es muy indecisa lo cual debes ayudarla a escoger una canción 1)Cancion Uno 2)Cancion Dos  3)Cancion Tres",2 ,['"¡¡¡NO ME GUSTA ESTA CANCIÓN!!!"', '"Me gusta esta canción"',`"¿Podes elegir mejor? Por favor te lo pido."`])

const capituloDos = new Capitulo ('CAPITULO DOS',"Kiki recuerda que es hora de tomar su medicacíon pero olvido cual era...",'../img/cap1part1.jpg','Tiene tres tipos de pastillas la cual ella identifica por colores 1)Roja 2)Azul 3)Verde',3 ,['"La roja la tome esta mañana"', '"Azul... creo que es para dormir"','"Mmmmm...tomare la verde, supongo que es esta"'])

const capituloTres = new Capitulo ('CAPITULO TRES',"Kiki tiene que ir a la cocina por un poco de agua para tomar su medicación. Al llegar a la cocina se percata de que algo la esta mirando",'../img/cap1part1.jpg','Al voltear y ver quien la observa se encuentra con una criatura humanoide llena de bocas con dientes filosos Entre susto y desesperacion busca algun objeto para defenderse 1)Un palo para amasar que uso la madre 2)Un cuchillo 3)Una sarten sobre la mesada',1 ,['"Kiki agarra el palo de amasar, golpea a la criatura y corre"', '"Kiki agarra el cuchillo se lanza hacia la criatura pero esta esquiva su ataque y le perfora el estomago con su brazo"','"Kiki agarra la sarten pero le parecia muy pesada para manipular y la criatura se le tira encima matandola"'])

const capitulos = [capituloUno, capituloDos, capituloTres]

const siguienteCap = document.getElementById("siguienteCap")

let capituloActual = 0

//------------FUNCIONES------------------

function presentacionCapitulo(capitulo) {

    const divCapitulos = document.getElementById("divCap")
    
    divCapitulos.innerHTML = `
    <h2 class="bordeRojo">${capitulo.titulo}</h2>
    <p>${capitulo.resumen}</p>
    <img src="${capitulo.imagen}">
    <p>${capitulo.pregunta}</p>
    `  
}

//--------------EVENTOS----------------------

siguienteCap.addEventListener('click', () => {
    siguienteCap.style.display = "none"

    document.getElementById("divRespuesta").innerHTML = ``

    if (capituloActual < capitulos.length) {
        
        capituloActual++

        presentacionCapitulo(capitulos[capituloActual])

    }
    
})


//-----------PROGRAMA PRINCIPAL-----------

const formulario = document.getElementById("form3")

formulario.addEventListener("submit", (e) => {
    
    e.preventDefault()

    let respuestas = document.getElementById("divRespuestas")

    let divRespuesta = document.getElementById("divRespuesta")

    let opcionSelect = respuestas.options[respuestas.selectedIndex].value
    
    console.log(opcionSelect)

    divRespuesta.innerHTML = `
            <p>${capitulos[capituloActual].respuestas[opcionSelect-1]} </p>
        `
    if (opcionSelect == capitulos[capituloActual].correcta) {
        siguienteCap.style.display = "block"
    }
})

presentacionCapitulo(capitulos[capituloActual])

//-----------BIENVENIDO USER--------------

const arrayNick = []

const bienvenidoUser = document.getElementById("bienvenidoUser")

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
    
})

