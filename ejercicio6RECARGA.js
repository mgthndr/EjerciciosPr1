const seleccion = prompt("A que Operador deseas comprar el plan?\n" +
  "1. Claro\n" +
  "2. Tigo\n" +
  "3. Movistar\n" +
  "Selecciona el numero del plan:");

let planSeleccionado;
//Este ejercicio si esta largo me dio hasta dolor de cabeza

const ReDinero = { nombre: "Claro", planes: { primero: 12000, segundo: 20000}, codigos: { CV: "CV", CA: "CA"} };
const ReNational = { nombre: "Tigo" , planes: { primero: 22000, segundo: 30000 }, codigos: { CV: "TA", CA: "TB"}  };  
const ReAmerican = { nombre: "Movistar"  };



switch (seleccion) {
  case "1":
    planSeleccionado = ReDinero;
    
    break;
  case "2":
    planSeleccionado = ReNational;
   
    break;
  case "3":
    planSeleccionado = ReAmerican;
    break;
  default:
    alert("Seleccion invalida. Se asigna el operador Claro.");
    planSeleccionado = ReDinero;
}


let ClaseInput;
do {
    ClaseInput = prompt("¿Que tipo de operacion necesita? (recarga/paquete)");
} while (ClaseInput !== "recarga" && ClaseInput !== "paquete"); //esto es p
let Clase = ClaseInput === "recarga";


if(Clase == false && seleccion == "3"){
    alert("No hay planes disponibles para Movistar");
    planSeleccionado = ReDinero;
}

let monto;
let mensaje;
if (Clase == true) {
  do {
    monto = prompt("Ingrese el monto para la recarga superior a $10,000");
    monto = parseInt(monto);
    if (monto < 10000) {
      alert("Monto inválido. Debe ser superior a $10,000");
    }
  } while (isNaN(monto) || monto < 10000);
  mensaje = "Recarga exitosa\n" +
    `Monto recargado: $${monto}\n`;
    alert(
  `Operador: ${planSeleccionado.nombre}\n` +
  `${mensaje}\n`
);
}
let meses;
do {
    if(Clase == false){
        meses = prompt(`Que plan desea comprar en ${planSeleccionado.nombre}? \n` +
            `${planSeleccionado.codigos.CV} $${planSeleccionado.planes.primero} \n` +
            `${planSeleccionado.codigos.CA} $${planSeleccionado.planes.segundo}\n` 
        );
        if (meses === "CV" || meses === "TA") {
      planSeleccionado.precio = planSeleccionado.planes.primero;
    } else if (meses === "CA" || meses === "TB") {
      planSeleccionado.precio = planSeleccionado.planes.segundo;
    }
    mensaje = `Compra exitosa\n` +
      `Plan: ${meses}\n` +
      `Precio: $${planSeleccionado.precio}\n`;
}
} while (meses !== "CV" && meses !== "CA" && meses !== "TA" && meses !== "TB"); //esto es pa q solamente se ueda poner 3, 6 o 12



alert(
  `Operador: ${planSeleccionado.nombre}\n` +
  `${mensaje}\n`
);