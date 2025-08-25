

const seleccion = prompt("Selecciona la revista a la que deseas suscribirte\n" +
  "1. Dinero\n" +
  "2. National Geographic\n" +
  "3. American Journal\n" +
  "Selecciona el numero correspondiente del plan:");

let planSeleccionado;

const ReDinero = { nombre: "Dinero", planes: { tremese: 6, seimese: 11, docemese: 20 } };
const ReNational = { nombre: "National Geographic" , planes: { tremese: 10, seimese: 13, docemese: 22 } };  
const ReAmerican = { nombre: "American Journal"  , planes: { tremese: 12, seimese: 18, docemese: 30 } };

const operadores = {
  claro: 0.05,
  movistar: 0,
  tigo: 0,
  virgin: 0,
  etb: 0,
  avantel: 1
};

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
    alert("Seleccion invalida. Se asigna la Revista de Dinero.");
    planSeleccionado = ReDinero;
}

let meses;
do {
  meses = prompt("Por cuantos meses deseas suscribirte? (3, 6 o 12)");
   if (meses === "3") {
      planSeleccionado.precio = planSeleccionado.planes.tremese;
    } else if (meses === "6") {
      planSeleccionado.precio = planSeleccionado.planes.seimese;
    }
    else if (meses === "12") {
      planSeleccionado.precio = planSeleccionado.planes.docemese;
    } 
} while (meses !== "3" && meses !== "6" && meses !== "12"); //esto es pa q solamente se ueda poner 3, 6 o 12

let operador;
let descuento = 0;
do {
  operador = prompt("Pon tu operador, solamente aceptamos los siguientes:\n" +
  "- Claro (5% de descuento)\n" +
  "- Movistar\n" +
  "- Tigo\n" +
  "- Virgin\n" +
  "- ETB\n"
);


  if (operador) {
    operador = operador.trim().toLowerCase(); //cosa para que no importe si es CLaro o cLARo
    descuento = operadores[operador] || 0; //lista de los operadores y sus descuentos
  }
} while (!operadores.hasOwnProperty(operador));

if (descuento > 0) {
  alert(`Descuento del ${(descuento * 100).toFixed(0)}% en tu suscripcion por ser cliente ${operador.charAt(0).toUpperCase() + operador.slice(1)}.`);
}

const precioFinal = planSeleccionado.precio * (1 - descuento);

alert(
  `Operador ${operador.charAt(0).toUpperCase() + operador.slice(1)}\n` +
  `Plan elegido: ${planSeleccionado.nombre}\n` +
  `Precio original: USD$${planSeleccionado.precio}\n` +
  `Precio final: USD$${precioFinal.toFixed(2)}`
);