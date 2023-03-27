/* 1. Crea un array que contenga el nombre de cinco colores escritos como strings. */

let colores = ["negro", "blanco", "azul", "rojo", "amarillo"]

/* 2. Guarda en una variable el tercer elemento del array del ejercicio anterior */

let color3 = colores[2]
console.log(color3)

/* 3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1. */

console.log(colores[0].charAt(0))

/* 4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random(). */

function numeroRandom (min, max) {
    const numero = Math.floor(Math.random() * max) + min;
    console.log(numero)
}

numeroRandom(1, 99)

/* 5. Rellena un array con los números del 1 al 10. Muéstralo por la consola. */

const numero1Al0 = [];

for (let i = 1; i <= 10; i++) {
    numero1Al0.push(i);
}
console.log(numero1Al0)

/* 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola. */

const numerosAleatorios = []
while (numerosAleatorios.length < 10) {
    let numero = Math.floor(Math.random() * 10000)
    numerosAleatorios.push(numero)
} 
console.log(numerosAleatorios)

/* 7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola. */

const numerosAleatorios1 = []
while (numerosAleatorios1.length < 10) {
    let numero = Math.floor(Math.random() * 10000)
    numerosAleatorios1.push(numero)
} 
console.log(numerosAleatorios1)
    
/* 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.) */


let listaTextos = ""

while (true) {
    let cadenaDeTexto = prompt("Ingrese una cadena de texto o 'cancelar' para cerrar la ventana: ")
    
    if (cadenaDeTexto === "") {
        alert("Debe ingresar una cadena de texto válida.");
        continue;
    } else if (cadenaDeTexto.toLowerCase() === "cancelar") {
        console.log(listaTextos)
        break;
    } else {
        listaTextos += listaTextos.concat(cadenaDeTexto + " - ")
    }
} /* o puedo usar el array de listaTextos.join(", ") y era mas simple */


let listaTextos1 = []

while (true) {
    let cadenaDeTexto1 = prompt("Nuevamente, ingrese una cadena de texto o 'cancelar' para cerrar la ventana: ")
    
    if (cadenaDeTexto1 === "") {
        alert("Debe ingresar una cadena de texto válida.");
        continue;
    } else if (cadenaDeTexto1.toLowerCase() === "cancelar") {
        console.log(listaTextos1)
        break;
    } else {
        listaTextos1.push(cadenaDeTexto1)
    }
}

/* 9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html. */

function cambioDolaresPesos () {
    const dolar = document.getElementById("dolares").value
    const cambio = 300
    const pesos = dolar * cambio
    document.getElementById("pesos").value = pesos
}

/* 10. Generar la inversa del ejercicio anterior (de pesos a dólares). */

function cambioPesosDolares () {
    const pesos = document.getElementById("peso").value
    const cambio = 300
    const dolar = pesos / cambio
    document.getElementById("dolar").value = dolar
}

/* 11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
son 86 grados fahrenheit. */

function convertirGradosCentigradosFahrenheit () {
    const centigrados = document.getElementById("cent").value
    const cambio = (centigrados * 9/5) + 32
    const fahrenheit = cambio
    document.getElementById("fahr").value = fahrenheit
}

/* 12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
podremos especificar las características de la caja. */

document.getElementById('texto-envio').onclick = function() {

    const nombre = document.getElementById("nombre").value
    const material = document.getElementById("material").value

    if (document.getElementById("dimensiones1").checked) {
        dimensiones = document.getElementById("dimensiones1").value
    } else if (document.getElementById("dimensiones2").checked) {
        dimensiones = document.getElementById("dimensiones2").value
    } else {
        dimensiones = document.getElementById("dimensiones3").value
    }

    const comentarios = document.getElementById("comentarios").value

    document.getElementById("texto-junto").innerHTML = `El envío será a nombre de ${nombre[0].toUpperCase()+nombre.slice(1)}, en una caja de ${material} ${dimensiones}. Comentarios: ${comentarios}`
}

/* 13. A través de un formulario, el usuario debe introducir un número secreto que estará
entre 0 y 5. El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
juego. Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde. */

function adivinarNumero () {
    let contador = 3
    const numero = 2
    do {
        numero1 = parseInt(prompt("Ingrese un número entre el 0 y el 5: ", document.getElementById("numero1").value));
        contador--
        if (numero1 < 0 || numero1 >5) {
            alert(`El número ingresado debe estar entre el 0 y el 5. Te quedan ${contador} oportunidades`)
        } else if (numero1 != numero && contador > 0) {
            alert(`El número ingresado no es el correcto. Te quedan ${contador} oportunidades`)
        }
    } while (contador > 0 && numero1 != numero)

    if (numero1 === numero && contador <= 3) {
        alert(`El número ${numero1} era el correcto!`)
    } else {
        alert("Perdiste las 3 oportunidades.")
    }
}

/* 
document.getElementById('boton-numero').onclick = function adivinarNumero () {
    let contador = 3
    const numero = 2
    do {
        const numero1 = document.getElementById("numero1").value
        contador--
        if (numero1 < 0 || numero1 > 5) {
            document.getElementById('mensaje-error').innerHTML = `El número ingresado debe estar entre el 0 y el 5. Te quedan ${contador} oportunidades`
        } else if (numero1 != numero && contador > 0) {
            document.getElementById('mensaje-error').innerHTML = `El número ingresado no es el correcto. Te quedan ${contador} oportunidades`
        }
    } while (contador > 0 && numero1 != numero)

    if (numero1 === numero && contador <= 3) {
        document.getElementById('mensaje-correcto').innerHTML = `El número ${numero1} era el correcto!`
    } else {
        document.getElementById('mensaje-error').innerHTML = "Perdiste las 3 oportunidades."
    }
}

adivinarNumero()
*/

/* 14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
desordenada a medida que se agregan. */

function agregarPersona(){
    let persona = document.getElementById("persona").value
    document.getElementById("lista-personas").innerHTML += "<li>" + persona;
}