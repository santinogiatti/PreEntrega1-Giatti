let usuarios = [
  { nombre: "Juan", apellido: "Pérez", fechaCumpleaños: "01/05/1990", contraseña: "juan123" },
  { nombre: "Ana", apellido: "Gómez", fechaCumpleaños: "15/08/1985", contraseña: "ana456" },
  // Agrega más usuarios si es necesario
];

let intentos = 3;

function obtenerDatosUsuario() {
  return {
    nombre: prompt("Por favor, ingresa tu nombre:"),
    apellido: prompt("Ahora, ingresa tu apellido:"),
    fechaCumpleaños: prompt("Ingresa tu fecha de cumpleaños (DD/MM/AAAA):"),
    contraseña: prompt("Ingresa la contraseña para ingresar:")
  };
}

do {
  if (intentos < 3) {
    console.log(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
  }

  let datosUsuario = obtenerDatosUsuario();
  intentos--;

} while (!usuarios.some(usuario => usuario.contraseña === datosUsuario.contraseña) && intentos > 0);

if (usuarios.some(usuario => usuario.contraseña === datosUsuario.contraseña)) {
  console.log("¡Acceso concedido!");

  let usuarioEncontrado = usuarios.find(usuario => usuario.contraseña === datosUsuario.contraseña);

  console.log("Tu nombre completo es: " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido);
  console.log("Tu fecha de cumpleaños es: " + usuarioEncontrado.fechaCumpleaños);

} else {
  console.log("Has agotado tus intentos. Acceso denegado.");
}