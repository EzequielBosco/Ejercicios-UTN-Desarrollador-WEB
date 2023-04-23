// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
// desordenada. Tiene que crear la lista uno mismo.

let array = []

function numeroRandom() {
    return parseInt(Math.random() * (200000 - 0) + 0);
}

for (let i = 0; i <= 10; i++) {
    array.push(numeroRandom())
}

const arrayOrdenado = array.sort(function(a, b) {return a - b})

let crearLista = document.getElementById("crear-lista")
crearLista.addEventListener("click", crearListaDesordenada)

function crearListaDesordenada(){
    document.getElementById("texto").innerHTML = "<h4>Lista:</h4>"
    document.getElementById("fin").innerHTML = "<h5>Fín</h4>"
    document.createElement("ul");
    for (let i = 0; i < arrayOrdenado.length; i++) {
        document.getElementById("lista").innerHTML += "<li>" + arrayOrdenado[i];
    }
    crearLista.removeEventListener("click", crearListaDesordenada);
}

// 2. Dado el array = [1,2,3,4,5,6]

array1 = [1,2,3,4,5,6]

// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
console.log("Punto 2 \nEjercicio A")

b = 0
while (b < array1.length) {
    console.log(array1[b])
    b += 1
}

// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
console.log("Ejercicio B")

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
console.log("Ejercicio C")

array1.forEach(item => {
    console.log(item)
});

// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
console.log("Ejercicio D")

array1.forEach(item => {
    console.log(item + 1)
});

// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
console.log("Ejercicio E")

let array2 = array1.map(item => {
    return(item + 1)
});
console.log(array2)

// f. Calcular el promedio.
console.log("Ejercicio F")

sumaNotas = array2.reduce((acumulador, elemento) => acumulador + elemento, 0)

function calcularPromedio() {
    let promedio = sumaNotas / array2.length;
    console.log(promedio)
}
calcularPromedio()

// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.

console.log("Punto 3")
array1.forEach(item => {
    console.log(item ** 2)
})

// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

console.log("Punto 4")
array3 = [1, -4, 12, 0, -3, 29, -150]

array3Positivos = array3.filter(item => item >= 0)
let reductora = (acumulador, elemento) => acumulador + elemento;
total = array3Positivos.reduce(reductora)
console.log(total)

// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

console.log("Punto 5")
arrayNombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]

// a. Obtener aquellos nombres con al menos 6 letras.
console.log("Ejercicio A")
nombres6Letras = arrayNombres.filter(item => item.length >= 6)
console.log(nombres6Letras)

// b. Obtener los nombres que comienzan con "M".
console.log("Ejercicio B")
nombresConM = arrayNombres.filter(item => item[0] === "M")
console.log(nombresConM)

// c. Ordenar alfabéticamente y mostrar por consola.
console.log("Ejercicio C")
arrayNombres1 = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"] /* Porque el sort es destructivo */
nombresOrdenados = arrayNombres1.sort()
console.log(nombresOrdenados)

// d. Generar un array que contenga solo las iniciales
console.log("Ejercicio D")
nombresIniciales = arrayNombres.map(items => {
    return(items[0])
})
console.log(nombresIniciales)

// f. Generar un array que contenga todos los nombres en mayúscula.
console.log("Ejercicio F")
nombresMayuscula = arrayNombres.map(nombres => {
    return(nombres.toUpperCase())
})
console.log(nombresMayuscula)

// g. Queremos saber si alguno de estos nombres comienza con "J”
console.log("Ejercicio G")
nombresConJ = arrayNombres.includes(arrayNombres[0] === "J")
console.log(nombresConJ)

// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
// si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
console.log("Punto 6")
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let color = prompt("Ingrese un color:")

if (colores.includes(color)) {
    console.log("El color se encuentra dentro del array")
} else {
    console.log("El color no se encuentra en el array")
}

// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares.
console.log("Punto 7")
function numerosPares (arreglo) {
    pares = arreglo.filter(item => item % 2 === 0)
    console.log(pares)
    return pares
}
numerosPares(array3)

// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras 
// que empiezan con una vocal.
console.log("Punto 8")
function palabrasArrancanConVocal (arreglo) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    palabras = arreglo.filter(item => vocales.includes(item[0]))
    console.log(palabras)
    return palabras
}
palabrasArrancanConVocal(colores)

// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices.
console.log("Punto 9")
function intercambiarPosicion(arreglo, indice1, indice2) {
    let a = arreglo[indice1];
    arreglo[indice1] = arreglo[indice2];
    arreglo[indice2] = a;
    console.log(arreglo)
    return arreglo;
}
intercambiarPosicion(colores, 1, 3)

// 10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero utilizando la librería jQuery.
$("#parrafo").click(function() {
    $("#parrafo").append("<h2>Funcionó jQuery</h2>")
})
$("#parrafo").hover(function() {
    $("#parrafo").css("cursor", "pointer");
})

// 11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo cuando sea presionada con el mouse.
let tabla = document.querySelector("table");
tabla.addEventListener("click", ()=>{
    tabla.style.backgroundColor = "#c1c1c1"
});

// 12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
// ocultar un elemento jQuery tiene un método llamado hide().
$( "li" ).click(function() {
    $( this ).hide("slow");
});

// 13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
// de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.
const trCambiarColor = document.getElementById("tr");

function cambioColor() {
    trCambiarColor.style.backgroundColor = 'red'
}

// 14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
//     un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
//     rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de fuente.
let parrafo1 = document.querySelector('.parrafo1')
let parrafo2 = document.querySelector('.parrafo2')
let parrafo3 = document.querySelector('.parrafo3')
let btn1 = document.querySelector('.boton1')
let btn2 = document.querySelector('.boton2')
let btn3 = document.querySelector('.boton3')

btn1.addEventListener("click",()=>{
    parrafo1.style.fontSize = "25px";
})
btn2.addEventListener("click",()=>{
    parrafo2.style.fontSize = "25px";
})
btn3.addEventListener("click",()=>{
    parrafo3.style.fontSize = "25px";
})


// 15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
// en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
// contenido de la primera tabla, dejando intacto el de la segunda.
function cambiarContenido() {
    var tabla1 = document.getElementById("tabla1");
    var celdas = tabla1.getElementsByTagName("td");
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].innerHTML = "-";
    }
}

// 16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
// botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo.
const ancla = document.querySelector('a')
const boton1 = document.querySelector('#href-1')
const boton2 = document.querySelector('#href-2')
const boton3 = document.querySelector('#href-3')
boton1.addEventListener ('click',()=>{
    ancla.textContent = "El ancla se convierte en google"
    ancla.href = "https://www.google.com/"
})
boton2.addEventListener ('click',()=>{
    ancla.textContent = "El ancla se convierte en facebook"
    ancla.href = "https://www.facebook.com/"
})
boton3.addEventListener ('click',()=>{
    ancla.textContent = "El ancla se convierte en twitter"
    ancla.href = "https://twitter.com/"
})

// 17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego cuando sean presionadas ocultarlas.
$( "strong" ).click(function() {
    $( this ).hide("slow");
});

// 18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.
function cambiarColor(celda) {
    celda.style.backgroundColor = "blue";
}

// 19. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
// cuando ingresamos con el mouse y regresar al original cuando salimos.
function restablecerColor(celda) {
    celda.style.backgroundColor = "white";
}

// 20. Disponer un div de 800 x 70 píxeles. Al hacer doble clic redimensionarlo a 250 x 250
// píxeles y si se hace doble clic nuevamente retornar al tamaño 800 x 70.
var miDiv = document.getElementById("miDiv");
miDiv.addEventListener("dblclick", function() {
    if (miDiv.style.width == "800px") {
        miDiv.style.width = "250px";
        miDiv.style.height = "250px";
    } else {
        miDiv.style.width = "800px";
        miDiv.style.height = "70px";
    }
});

// 21. Confeccionar una página que contenga un div con un conjunto de párrafos. Cuando se
// presione con el mouse dentro del div ocultarlo lentamente y cuando esté
// completamente oculto hacer que aparezca lentamente otro bloque de texto.
const div1 = document.querySelector('#d1')
const div2 = document.querySelector('#d2')

div1.addEventListener("click",()=>{
div1.style.display = "none"
div2.style.display = "block";
})

// 22. Mostrar con console.log el valor de un option cada vez que un usuario seleccione un
// option nuevo de un elemento select.
const select = document.querySelector('#mi-select');

select.addEventListener('change', (event) => {
  console.log(event.target.value);
});

// 23. Hacer que un link no salga de la página al hacer click, pero mostrar el valor de la página referida con console.log
const link = document.querySelector('#mi-link');

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.href);
});

// 24. Hacer que un formulario no se envíe al hacer click en "enviar", en lugar de eso mostrar un texto en la página que el formulario fue enviado.
const formulario = document.querySelector('#mi-formulario');
const enviar = document.querySelector('#enviar');
const mensajes = document.querySelector('#mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  mensajes.textContent = 'El formulario ha sido enviado.';
});