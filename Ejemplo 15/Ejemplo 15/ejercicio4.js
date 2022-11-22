//Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

let num=+prompt("Ingrese un número")
if (num>500) {
   porcen=num*0.18
   Mensaje = `El procentaje del número ${num} es: ${porcen}`
} else {
    Mensaje = `El número ${num} por ser menor no tiene porcentaje`
}
document.write(Mensaje)