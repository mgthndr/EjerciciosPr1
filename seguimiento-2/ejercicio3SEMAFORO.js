// este toco sin prompt porq no entendi muy bien
const colores = {
  verde: "Puede Avanzar",
  amarillo: "Precaucion",
  rojo: "Detengase",
  colorinv: "Fallo en el dispositivo"
};

const SemaforoEst = true //true = encendido false = apagado

if(SemaforoEst === false) {
  console.log("El semaforo esta apagado, no se puede determinar el color.");
}
if (!SemaforoEst) {
  console.log(colores.colorinv);
} else {
  // selecciona un color aleatorio entre verde, amarillo y rojo
  const colorKeys = ["verde", "amarillo", "rojo"];
  const colorAleatorio = colorKeys[Math.floor(Math.random() * colorKeys.length)];
  console.log(`Color seleccionado: ${colorAleatorio}`);
  console.log(colores[colorAleatorio]);
}