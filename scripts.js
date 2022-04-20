let alenota1 = (8);
let alenota2 = (7);
let alenota3 = parseFloat (prompt("ingrese la nota final de ale"));

let joseynota1 = (7);
let joseynota2 = (9);
let joseynota3 = parseFloat (prompt("ingrese la nota final de josey "));

let joselynnota1 = (8);
let joselynnota2 = (10);
let joselynnota3 = parseFloat (prompt("ingrese la nota final de joselyn "));


function calcularPromedio ( alenota1, alenota2, alenota3) {
const promedio = ( alenota1, alenota2, alenota3) /3;
return promedio;
}

function calcularPromedio ( joselynnota1, joselynnota2, joselynnota3 ) {
const promedio = ( joselynnota1, joselynnota2, joselynnota3 ) /3;
return promedio;
}

function calcularPromedio ( joseynota1, joseynota2, joseynota3 ) {
const promedio = ( joseynota1, joseynota2, joseynota3 ) /3;
return promedio;
}

function isAlumnoAprobado (promedio) {
if( promedio > 6){
    return "aprobado";
}
return "desaprobado";
}

const promedioAle = calcularPromedio ( alenota1, alenota2, alenota3);
const promediojoselyn = calcularPromedio ( joselynnota1, joselynnota2, joselynnota3 );
const promediojosey = calcularPromedio ( joseynota1, joseynota2, joseynota3 );


alert (" ale esta" + isAlumnoAprobado (promedioAle) + "con nota" + promedioAle);
alert (" joselyn esta" + isAlumnoAprobado (promediojoselyn) + "con nota" + promediojoselyn);
alert (" josey esta" + isAlumnoAprobado (promediojosey) + "con nota" + promediojosey);