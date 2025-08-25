const patron = /^[C]\d{10}$/;
//patron de la cedula asdsadas
let cedula;
do {
cedula = prompt("Ingrese su cedula con una C al principio:\n" +
  "CXXXXXXXXXX"
);
  if (!patron.test(cedula)) {
    alert(`Cedula invalida/No reconocida. Por favor verifique e intente nuevamente.` );
  }
} while (!patron.test(cedula));

const monto = prompt("Ingrese el monto de su compra:");

let descuento = 0;
let puntos = 100;
if (monto <= 100000) {
    puntos += 100;
} else if (monto > 100000 && monto <= 500000) {
    puntos += 250;
} else if (monto > 500000) {
    puntos += 400;
}

let mensaje = `Sigue acumulando. Te faltan ${500 - puntos} puntos para llegar a 500.`;

if(puntos >= 500){
    descuento = monto * (1 - 0.2);
    mensaje = `¡Felicidades! Tienes un descuento pendiente de $${descuento} para tu proxima compra. (20%)`
}

alert(
  `DATOS FIDELIZACION \n` +
  `${cedula}\n` +
  `Monto: $${monto}\n` +
  `Puntos otorgados: ${puntos}\n` +
  `-------------------------------\n` +
  `${mensaje}`
);