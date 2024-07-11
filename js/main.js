import Cl_estudiante from "./Cl_estudiante.js";
import Cl_resultados from "./Cl_resultados.js";

let estudiante1 = new Cl_estudiante(888, 60);
let estudiante2 = new Cl_estudiante(777, 50);
let estudiante3 = new Cl_estudiante(999, 40);
let estudiante4 = new Cl_estudiante(333, 80);
let estudiante5 = new Cl_estudiante(111, 30);
let estudiante6 = new Cl_estudiante(333, 90);
let estudiante7 = new Cl_estudiante(444, 48);
let estudiante8 = new Cl_estudiante(222, 60);

let resultados = new Cl_resultados();

resultados.procesare(estudiante1);
resultados.procesare(estudiante2);
resultados.procesare(estudiante3);
resultados.procesare(estudiante4);
resultados.procesare(estudiante5);
resultados.procesare(estudiante6);
resultados.procesare(estudiante7);
resultados.procesare(estudiante8);

let salida = document.getElementById("salida");

salida.innerHTML += `<br> Cantidad de aprobados: ${resultados.cantAprobados()}`;
salida.innerHTML += `<br> Cantidad de rprobados: ${resultados.cantReprobados()}`;
salida.innerHTML += `<br> Nota promedio de la sección: ${resultados.nPromedio()}`;
