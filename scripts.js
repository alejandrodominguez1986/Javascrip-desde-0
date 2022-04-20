let alenota1 = parseFloat (prompt("ingrese la nota final de ale"));
let alenota2 = (7);
let alenota3 = (8);



let joseynota1 = parseFloat (prompt("ingrese la nota final de josey "));
let joseynota2 = (9);
let joseynota3 = (7);


let joselynnota1 = parseFloat (prompt("ingrese la nota final de joselyn "));
let joselynnota2 = (10);
let joselynnota3 = (8);


let promedioale = (alenota1 + alenota2 + alenota3  ) / 3 ;
let promediojosey = (joseynota1 + joseynota2 + joseynota3  ) / 3;
let promediojoselyn = (joselynnota1 + joselynnota2 + joselynnota3  ) / 3;


if(promedioale < 6)  {
    alert ("ALE ESTAS REPROBADO CON :" + promedioale)
}
else {
    alert ("ALE ESTAS APROBADO CON :" + promedioale)
}

if(promediojosey < 6) {
    alert ("JOSEY ESTAS REPROBADO CON :" + promediojosey)
}
else {
    alert (" JOSEY ESTAS APROBADO CON :" + promediojosey)
}

if(promediojoselyn < 6) {
    alert ("JOSELYN ESTAS REPROBADO CON :" + promediojoselyn)
}
else {
    alert (" JOSELYN ESTAS APROBADO CON :" + promediojoselyn)
}
