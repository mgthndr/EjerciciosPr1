let PrPequeña = 3000
let PrGrande = 4000

const Horas = prompt("Cuantas horas desea alquilar la lavadora?");

let ClaseInput;
do {
    ClaseInput = prompt("¿Que tipo de lavadora desea? (pequeña/grande)");
} while (ClaseInput !== "pequeña" && ClaseInput !== "grande"); //esto es pa q solamente se ueda poner pequeña/grande
let Clase = ClaseInput === "pequeña";

let Desc = 0.03 //3% desc

let ValorTotal = Horas*(Clase ? PrPequeña : PrGrande);

if(Horas >= 10){
    alert("Haz obtenido un descuento del 3% en su compra")
    ValorTotal = ValorTotal * (1 - Desc);
    
} 
alert(
    `Tipo de Lavadora: ${Clase ? "Pequeña" : "Grande"}\n` +
    `Precio base por hora alquilada COP$${Clase ? PrPequeña : PrGrande}\n` +
    `Horas alquiladas: ${Horas}\n` +
    `Total a pagar: COP$${ValorTotal.toFixed(2)}`
)
