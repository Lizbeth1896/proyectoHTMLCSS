//Ingrese el nombre de un alumno y las notas de su examen parcial, 
//examen final y el promedio de prácticas; muestre el nombre del alumno y 
//su promedio final solo si el alumno está aprobado. Tenga en cuenta que para el 
//cálculo del promedio la nota del examen final tiene peso doble.

let alumno=prompt("Ingrese nombre del alumno")
let ep=+prompt("Ingrese nota de su examen parcial")
let ef=+prompt("Ingrese nota de su examen final")
let pp=+prompt("Ingrese el promedio de prácticas")

let prom=(ep+2*ef+pp)/4
if (prom>=11) {
    estado="Aprobado"
    Mensaje = `${alumno} estas ${estado} con un promedio final de: ${prom}`
} else {
    estado="Desaprobado"
    Mensaje = `${alumno} estas ${estado} con un promedio final de: ${prom}`}
document.write(Mensaje)
