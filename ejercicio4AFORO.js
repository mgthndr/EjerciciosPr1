//generador de codigos para console
function generarCodigo() {
  const letras = "OTSN";
  const letra = letras[Math.floor(Math.random() * letras.length)];
  const numeros = Math.floor(Math.random() * 90000) + 10000;
  return letra + numeros;
}

const codigoGenerado = generarCodigo();
console.log("Codigo generado:", codigoGenerado);

const patron = /^[OTSNV]\d{5}$/;
//patron de lo numero, detecta si tiene letra al principio y si es OTSNV
//despues detecta los 5 numeros aleatorios, que tienen que estar despues de la letra

let codigoUsuario;
do {
  codigoUsuario = prompt("Ingrese el codigo alfanumerico:");
  if (!patron.test(codigoUsuario)) {
    alert("Codigo invalido. Por favor verifique e intente nuevamente.");
  }
} while (!patron.test(codigoUsuario));

let direccion;
switch (codigoUsuario.charAt(0)) {
  case "O":
    direccion = "Oriental";
    break;
  case "T":
    direccion = "Occidentl";
    break;
  case "S":
    direccion = "Sur";
    break;
  case "N":
    direccion = "Norte";
    break;
    case "V":
    direccion = "VIP";
    break;
  default:
    direccion = "N/A";
}

alert(`Bienvenido: ${codigoUsuario} \n`
    + `Dirijase a la zona ${direccion}`
);
