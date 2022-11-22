//Digite el importe de una compra, en caso de que el importe sea 150 o más, 
//se le descontará el 12%. Mostrar el descuento otorgado y el importe de compra final 

let compra=parseFloat(prompt("Ingrese importe de la compra"))
if (compra>150) {
    let descuento=(compra*0.12)
    let compraf=compra-descuento
    Mensaje = `Estimado cliente tiene un descuento de: s/.${descuento} <br> 
    Y el monto de su compra final es: s/.${compraf}`
    document.write(Mensaje)
} else {
    descuento=0
    compraf=compra
    Mensaje = `Estimado cliente tiene un descuento de: s/.${descuento} <br> 
    Y el monto de su compra final es: s/.${compraf}`
    document.write(Mensaje)
}