let nombre, apellido, fechaCumpleaños, contraseña;

let intentos = 3;

do {

  if (intentos < 3) {

    console.log(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
  }

  nombre = prompt("Por favor, ingresa tu nombre:");

  apellido = prompt("Ahora, ingresa tu apellido:");

  fechaCumpleaños = prompt("Ingresa tu fecha de cumpleaños (DD/MM/AAAA):");

  contraseña = prompt("Ingresa la contraseña para ingresar:");

  intentos--;

} while (contraseña !== "tucontraseña" && intentos > 0);

if (contraseña === "tucontraseña") {

  console.log("¡Acceso concedido!");

  console.log("Tu nombre completo es: " + nombre + " " + apellido);

  console.log("Tu fecha de cumpleaños es: " + fechaCumpleaños);

} else {
  console.log("Has agotado tus intentos. Acceso denegado.");
}