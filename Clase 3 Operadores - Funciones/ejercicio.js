/* 1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
que es */

var dato = 123;

function tipoDeDato(dato) {
    console.log(typeof dato);
}

tipoDeDato(dato)

var dato = "123";
tipoDeDato(dato)

/* 2. Dado dos números ingresados por el usuario, se pide realizar una función que
devuelve la resta de ambos números. Mostrar el resultado por la consola. */

var numero1 = prompt("Ingrese un numero:")
var numero2 = prompt("Ingrese otro numero:")

function resta (numero1, numero2) {
    numeros = numero1 - numero2;
    console.log(numeros);
    return numeros;
}

resta(numero1, numero2)


/* 3. Generar una función que le ingresen por parámetro dos valores distintos en dos
variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
Pasarlo a a y mostrarlos. */

var a = prompt("Ingrese un numero:")
var b = prompt("Ingrese otro numero:")

function cambiarValores (a, b) {
    let c = a;
    a = b;
    b = c;

    console.log(a, b);
    return a, b
}

cambiarValores(a, b)


/* 4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola.*/

function perimetroSuperficieCuadrado (lado) {
    const perimetro = lado * 4;
    const superficie = lado ** 2;
    console.log("El primetro del cuadrado es:" + perimetro + ". " + "La superficie del cuadrado es:" + superficie)
}


/* 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius */

function convertirGradosFahrenheitCelsius (grados) {
    const fahrenheit = 0;
    const celsius = -17.77778;
    var grados = (grados -32) * 5/9
    console.log(grados)
}


/* 6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
número no puede ser mayor de 10, realizar la validación). */

var numero = calcularFactorial(prompt("Ingrese un numero: "))

function calcularFactorial(numero) {
    if (numero > 10) {
        console.log("El numero no puede ser mayor que 10");
        return;
    }

    else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log("El factorial de " + numero + " es: " + factorial);
        return;
    }
}


/* 7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos” */

var texto = cadenaPalindromo(prompt("Ingrese una cadena de caracteres: "))

function cadenaPalindromo (texto) {

    const textoReverso = texto.split("").reverse().join("");

    if (texto === textoReverso) {
        console.log("La cadena ingresada es un Palíndromo");
    }
    
    else {
            console.log("La cadena ingresada no es un Palíndromo");
        }
    return;
}


/* 8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript. */

var cadenaCaracteres = textoMayusculaMinuscula(prompt("Ingrese un texto: "))

function textoMayusculaMinuscula (cadenaCaracteres) {
    let cadenaMayusculas = cadenaCaracteres.toLowerCase();
    let cadenaMinusculas = cadenaCaracteres.toUpperCase();
    console.log(cadenaMayusculas);
    console.log(cadenaMinusculas);
    return cadenaMayusculas,cadenaMinusculas
}


/* 9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

var nota = resultadosNotaNumerica(prompt("Ingrese una nota numerica: "))

function resultadosNotaNumerica (nota) {

    if (nota >= 0 && nota < 3) {
        console.log("La nota ingresada es Muy Deficiente");
    }

    else if (nota >= 3 && nota < 5) {
        console.log("La nota ingresada es Insuficiente")
    } 

    else if (nota >= 5 && nota < 6) {
        console.log("La nota ingresada es Suficiente")
    } 

    else if (nota >= 6 && nota < 7) {
        console.log("La nota ingresada esta Bien")
    } 

    else if (nota >= 7 && nota < 9) {
        console.log("La nota ingresada es Notable")
    } 

    else if (nota >= 9 && nota <= 10) {
        console.log("La nota ingresada es Sobresaliente")
    } 
    
    else {
        console.log("La nota ingresada debe ser un numero entre 0 y 10")
    }
    return;
}


/* 10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días. */

var numeroMes = numeroDeDiasDelMes(Number(prompt("Ingrese un mes en numero (1 al 12): ")))

function numeroDeDiasDelMes (numeroMes) {
    switch (numeroMes) {
        case 1:
            console.log("Enero tiene 31 dias");
            break;
        case 2:
            console.log("Febrero tiene 28 o 29 dias");
            break;
        case 3:
            console.log("Marzo tiene 31 dias");
            break;
        case 4:
            console.log("Abril tiene 30 dias");
            break;
        case 5:
            console.log("Mayo tiene 31 dias");
            break;
        case 6:
            console.log("Junio tiene 30 dias");
            break;
        case 7:
            console.log("Julio tiene 31 dias");
            break;
        case 8:
            console.log("Agosto tiene 31 dias");
            break;
        case 9:
            console.log("Septiembre tiene 30 dias");
            break;
        case 10:
            console.log("Octubre tiene 31 dias");
            break;
        case 11:
            console.log("Noviembre tiene 30 dias");
            break;
        case 12:
            console.log("Diciembre tiene 31 dias");
            break;
        default:
            console.log("El numero ingresado tiene que ser un numero entre 1 y 12");     
    }
}


/* 11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación): */


let numeroPiramide = parseInt(prompt("Ingrese un número del 1 al 10:"));

if (numeroPiramide < 1 || numeroPiramide > 10) {
    console.log("El número ingresado tiene que estar entre 1 y 10.");
} else {
    for (let i = 1; i <= numeroPiramide; i++) {
        let lista = "";
        for (let a = 1; a <= i; a++) {
            lista += a + " ";
          }
          console.log(lista);
  }
}


/* 12. Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola. */

var numeroStock = Number(prompt("Ingrese la cantidad de bultos en stock: "))
var numeroBultos = Number(prompt("Ingrese la cantidad de bultos por caja: "))

function calcularCajasCompletas (numeroStock, numeroBultos) {
    let cajasCompletas = parseInt(numeroStock / numeroBultos);
    let restoBultos = (numeroStock % numeroBultos)
    console.log("La cantidad de cajas completas son: " + cajasCompletas)
    console.log("La cantidad de de bultos sobrantes son: " + restoBultos)
}

calcularCajasCompletas (numeroStock, numeroBultos)


/* 13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola. */

var codigo = prompt("Ingrese el articulo para ver el precio: ")
var precio = 3000000
var fiestaConDescuento = precio - (precio * 5) / 100
var focusConDescuento = precio - (precio * 10) / 100

if (codigo === "fiesta" || codigo === "focus") {
    if (codigo === "fiesta") {
        console.log("El precio con descuento es: " + fiestaConDescuento)
    } else if (codigo === "focus") {
        console.log("El precio con descuento es: " + focusConDescuento)
    } 
} else {
    console.log("El articulo ingresado no pertenece a ningun coche de la tienda.")
}
