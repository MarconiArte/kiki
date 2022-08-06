//--------------------------Clases-----------------------------
class Capitulo {
    constructor(titulo, resumen, pregunta, correcta,respuestas) {
        this.titulo = titulo
        this.resumen = resumen
        this.pregunta = pregunta //Opciones a elegir
        this.correcta = correcta //numerito
        this.respuestas = respuestas //Array de respuestas segun la pregunta
    }
}

//------- variables (objetos y arrays)-------------

const capituloUno = new Capitulo ("-----Capitulo 1-----\nKiki es una chica de 19 años un tanto rara\nNo tiene amigos y le gusta pasar tiempo en su cuarto a solas\n", "Kiki decidio escuchar música acostada en su cama","Ella es muy indecisa lo cual debes ayudarla a escoger una canción\n1)Cancion Uno\n2)Cancion Dos \n3)Cancion Tres",2 ,["¡¡¡QUE CANCIÓN DE MIERDA!!!", "Me gusta esta canción",`¿Podes elegir mejor chabón?\nPor favor te lo pido.`])

const capituloDos = new Capitulo ("CAPITULO DOS","Kiki recuerda que es hora de tomar su medicacíon pero olvido cual era...","Tiene tres tipos de pastillas la cual ella identifica por colores\n1)Roja\n2)Azul\n3)Verde",3 ,["La roja la tome esta mañana", "Azul... creo que es para dormir","Mmmmm...tomare la verde, supongo que es esta"])

const capituloTres = new Capitulo ("CAPITULO TRES", "Kiki tiene que ir a la cocina por un poco de agua para tomar su medicación\nAl llegar a la cocina se percata de que algo la esta mirando","Al voltear y ver quien la observa se encuentra con una criatura humanoide llena de bocas con dientes filosos\nEntre susto y desesperacion busca algun objeto para defenderse\n1)Un palo para amasar que uso la madre\n2)Un cuchillo\n3)Una sarten sobre la mesada",1 ,["Kiki agarra el palo de amasar, golpea a la criatura y corre", "Kiki agarra el cuchillo se lanza hacia la criatura pero esta esquiva su ataque y le perfora el estomago con su brazo","Kiki agarra la sarten pero le parecia muy pesada para manipular y la criatura se le tira encima matandola"])

const capitulos = [capituloUno, capituloDos, capituloTres]

const siguienteCap = document.getElementById("siguienteCap")

//------------FUNCIONES------------------

function presentacionCapitulo(capitulo) {

    let divCapitulos = document.getElementById("divCap")
    
    divCapitulos.innerHTML = `
    <h2>${capitulo.titulo}</h2>
    <p>${capitulo.resumen}</p>
    <p>${capitulo.pregunta}</p>
    `  
}

function opciones(capitulos) {

    let formulario = document.getElementById("form3")

    formulario.addEventListener("submit", (e) => {
        
        e.preventDefault()

        let respuestas = document.getElementById("divRespuestas")

        let divRespuesta = document.getElementById("divRespuesta")

        let opcionSelect = respuestas.options[respuestas.selectedIndex].value
        
        divRespuesta.innerHTML = `
                <p>${capitulos.respuestas[opcionSelect-1]} </p>

            `
        if (opcionSelect == capitulos.correcta) {
            siguienteCap.style.display = "block"
        }
    })
}



let capituloActual = 0
siguienteCap.addEventListener('click', () => {
    capituloActual++
    presentacionCapitulo(capitulos[capituloActual])

    opciones(capitulos[capituloActual])
})


//-----------PROGRAMA PRINCIPAL-----------
presentacionCapitulo(capitulos[capituloActual])

opciones(capitulos[capituloActual]) 
