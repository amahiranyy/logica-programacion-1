// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let numeros = [];

let num1 = parseFloat(prompt("Ingresa el número 1: "));
let num2 = parseFloat(prompt("Ingresa el número 2: "));
let num3 = parseFloat(prompt("Ingresa el número 3: "));

numeros.push(num1, num2, num3);

// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.

//Titulo en el dom
const titulo = document.createElement("h2");//Crea un h2
titulo.innerText = "Resultados: ";//Agrega el texto de p1, aun no se designa el valor
document.body.appendChild(titulo);//Agrega a la pagina html

if (num1 === num2 && num2 === num3) {
    const mensaje = "Los 3 números son iguales";
    dom(mensaje);
} else {
    const ordenadoMenor = [...numeros].sort((a, b) => a - b); // Ordena de menor a mayor
    const ordenadoMayor = [...numeros].sort((a, b) => b - a); // Ordena de mayor a menor
    
    dom("Orden de mayor a menor: " + ordenadoMayor.join(", ")); // Separa cada elemento con una ,
    dom("Orden de menor a mayor: " + ordenadoMenor.join(", ")); 
    
    dom("Número menor: " + ordenadoMenor[0]);
    dom("Número medio: " + ordenadoMenor[1]);
    dom("Número mayor: " + ordenadoMenor[2]);
}


//Imprimir en el dom en un <p>
function dom(texto) {  
    const paragraph = document.createElement("p");//Crea un parrafo
    paragraph.innerText = texto;//Le añade el valor de texto que aun no esta definido
    document.body.appendChild(paragraph);//Agrega a la paginaparagraph
}
    