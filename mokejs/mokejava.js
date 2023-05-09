const botSelececcion= document.getElementById("bot-selec")
const sectionSeleccionAtk=document.getElementById("seleccionAtak")
const botonReiniciar= document.getElementById("bot-reiniciar")

const mascotaJuga=document.getElementById("masc-jug")
const mascotaEnemigo= document.getElementById("masc-ene")
const sectionMascota=document.getElementById("seleccionMasc")

const spanVidasJugador=document.getElementById("masc-vida")
const spanVidasEnemigo=document.getElementById("enemi-vida")
const sectionMensaje=document.getElementById("resultado")
const ataqueDelJugador=document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo=document.getElementById("ataque-del-enemigo")
const contenedorTarjetas= document.getElementById("contenedor-tarjetas")
const contenedorAtaques=document.getElementById("contenedorAtaques")

let mokepones= []

let ataqueJugador
let ataqueEnemi = []
let ataquesDelMokeponEnemigo
let resultado
let vidaMascota=3
let vidaEnemigo=3
let opcionesMokepones
let inputhip
let inputcapi
let inputrati
let mascotaJugador
let ataquesFinal
let ataqueSeleccion1
let ataqueSeleccion2
let ataqueSeleccion3
let botones
let atkJugador=[]

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hip = new Mokepon("Eevee", "recursos/Eevee.png", 5)
let capi = new Mokepon("Charmander", "recursos/5e345dcc-89ab-4d86-99f6-a83b29250e4a.png", 5)
let rati = new Mokepon("Bulbasur", "recursos/Squirtle.png", 5)

capi.ataques.push(
    { nombre: "agua", id:"bot-agua"},
    { nombre: "agua", id:"bot-agua"},
    { nombre: "agua", id:"bot-agua"},
    { nombre: "fuego", id:"bot-fuego"},
    { nombre: "tierra", id:"bot-tierra"}
)



hip.ataques.push(
    { nombre: "tierra", id:"bot-tierra"},
    { nombre: "tierra", id:"bot-tierra"},
    { nombre: "tierra", id:"bot-tierra"},
    { nombre: "fuego", id:"bot-fuego"},
    { nombre: "agua", id:"bot-agua"}
)

rati.ataques.push(
    { nombre: "fuego", id:"bot-fuego"},
    { nombre: "fuego", id:"bot-fuego"},
    { nombre: "fuego", id:"bot-fuego"},
    { nombre: "tierra", id:"bot-tierra"},
    { nombre: "agua", id:"bot-agua"}
)

mokepones.push(hip,capi,rati)

function iniciarJuego(){

    mokepones.forEach((mokepones) =>{
        opcionesMokepones = `
        <input type="radio" id=${mokepones.nombre} name="mascota">
        <label class="tarjeta-de-mokemon" for="${mokepones.nombre}">
            <p>
            ${mokepones.nombre}
            </p>
            <img src="${mokepones.foto}" alt="${mokepones.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionesMokepones

         inputhip=document.getElementById("Eevee")
         inputcapi=document.getElementById("Charmander")
         inputrati=document.getElementById("Bulbasur")
    } )

    sectionSeleccionAtk.style.display="none"
    botSelececcion.addEventListener("click", botSelececciondemascota)
    botonReiniciar.addEventListener("click",Reinicio)
    botonReiniciar.style.display="none"
    inputcapi.style.display="none"
    inputhip.style.display="none"
    inputrati.style.display="none"
}

function botSelececciondemascota(){
    sectionSeleccionAtk.style.display="flex"
    
    if(inputhip.checked){
        mascotaJuga.innerHTML=inputhip.id
        mascotaJugador=inputhip.id
    }
    else if(inputcapi.checked) {
        mascotaJuga.innerHTML= inputcapi.id
        mascotaJugador=inputcapi.id
    }
    else if(inputrati.checked){
        mascotaJuga.innerHTML= inputrati.id
        mascotaJugador=inputrati.id
    }
    else{
        alert("no se selecciono ninguno")
        Reinicio()
    }
    extraerAtaques(mascotaJugador)
    PcSelececciondemascota()

}

function extraerAtaques(mascotaJugador){
    let ataquesDelmokepon
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataquesDelmokepon = mokepones[i].ataques
        }
        
        
    }
    mostrarAtaques(ataquesDelmokepon)
}

function mostrarAtaques(ataquesDelmokepon){
    ataquesDelmokepon.forEach((ataques)=>{
        ataquesFinal=`<button id=${ataques.id} class="BDeAtak">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML+=ataquesFinal

    })
        seleccionAtk()
        let ataqueSeleccion1= document.getElementById("bot-fuego")
        let ataqueSeleccion2= document.getElementById("bot-agua")
        let ataqueSeleccion3= document.getElementById("bot-tierra")

        botones= document.querySelectorAll(".BDeAtak")


}

function SecuenciaDeAtake(){
    botones.forEach((botones)=>{
        botones.addEventListener("click",(e) =>{
        if(e.target.textContent === "fuego"){
            atkJugador.push("fuego")
            console.log(atkJugador)
            botones.style.background="#112f58"
        }
        else if(e.target.textContent === "agua"){
            atkJugador.push("agua")
            console.log(atkJugador)
            botones.style.background="#112f58"
        } else{
            atkJugador.push("tierra")
            console.log(atkJugador)
            botones.style.background = "#112f58"
        }
        ataqueEnemigo()
        })
    })
    
}

function PcSelececciondemascota(){
    let mascotaAleatoria=aleatorio(0, mokepones.length - 1 )

   mascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
   ataquesDelMokeponEnemigo = mokepones[mascotaAleatoria].ataques

   SecuenciaDeAtake()
}

function seleccionAtk(){
    sectionMascota.style.display="none"
}


function ataqueEnemigo(){
    ataqueAleatorio= aleatorio(0,ataquesDelMokeponEnemigo.length - 1)

    if(ataqueAleatorio==1 || ataqueAleatorio==0){
        ataqueEnemi.push("fuego")

    }
    else if(ataqueAleatorio==4 || ataqueAleatorio==3){
        ataqueEnemi.push("agua")

    }
    else{
        ataqueEnemi.push("tierra")
    }
    console.log(ataquesDelMokeponEnemigo)
    combat()
}

function combat(){
    if(ataqueEnemi==ataqueJugador){
        resultado="empate"
        crearMensajes()
    }
    else if(ataqueJugador == "fuego" && ataqueEnemi=="tierra" || ataqueJugador == "agua" && ataqueEnemi=="fuego" || ataqueJugador == "tierra" && ataqueEnemi=="agua" ){
        resultado="win"
        crearMensajes()
        vidaEnemigo--
        spanVidasEnemigo.innerHTML=vidaEnemigo
    }
    else{
        resultado="loss"
        crearMensajes()
        vidaMascota--
        spanVidasJugador.innerHTML=vidaMascota
    }
    revisarLife()
}

    function revisarLife(){
        if(vidaEnemigo==0){
            botonReiniciar.style.display="block"
            crearFinal("Ganaste, felicidades")
        }
        else if(vidaMascota==0){
            botonReiniciar.style.display="block"
            crearFinal("Perdiste")
        }
    }

    function crearMensajes(){
        let NuevoAtakeJugador=document.createElement("p")
        let NuevoAtakeEnemigo=document.createElement("p")

        sectionMensaje.innerHTML = resultado
        NuevoAtakeJugador.innerHTML= ataqueJugador
        NuevoAtakeEnemigo.innerHTML= ataqueEnemi

        ataqueDelJugador.appendChild(NuevoAtakeJugador)
        ataqueDelEnemigo.appendChild(NuevoAtakeEnemigo)
    }

    function crearFinal(resultadoFinal){
        sectionMensaje.innerHTML=resultadoFinal

        ataqueSeleccion1.disabled=true
        ataqueSeleccion2.disabled=true
        ataqueSeleccion3.disabled=true
    }

    function Reinicio(){
        location.reload()
    }

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+1)+min
}

window.addEventListener("load", iniciarJuego)

