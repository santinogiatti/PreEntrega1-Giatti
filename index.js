// index.js
document.addEventListener('DOMContentLoaded', function () {
    let intentos = 2;

    let usuarioActual; // Almacena la información del usuario que inició sesión

    function obtenerDatosUsuario() {
        return {
            nombre: document.getElementById("nombreInput").value,
            apellido: document.getElementById("apellidoInput").value,
            fechaCumpleaños: document.getElementById("fechaInput").value,
            contraseña: document.getElementById("contraseñaInput").value
        };
    }

    let formularioDiv = document.getElementById('formulario');
    let agradecimientoDiv = document.getElementById('agradecimiento');
    let inicioSesionButton = document.getElementById('inicioSesionButton');
    let verificarContraseñaButton = document.getElementById('verificarContraseña');

    inicioSesionButton.addEventListener('click', function () {
        let datosUsuario = obtenerDatosUsuario();

        // Tu lógica de validación y almacenamiento aquí
        // Puedes comparar con usuarios almacenados o almacenar directamente en el localStorage

        if (datosUsuario.nombre && datosUsuario.apellido && datosUsuario.fechaCumpleaños && datosUsuario.contraseña) {
            // Almacenar información del usuario que inició sesión
            usuarioActual = datosUsuario;

            // Si se ingresaron todos los datos, mostrar la tarjeta de agradecimiento
            formularioDiv.style.opacity = '0';
            agradecimientoDiv.style.display = 'block';
            setTimeout(() => {
                agradecimientoDiv.style.opacity = '1';
                // Llamar al usuario por su nombre
                alert(`¡Acceso intermedio`);
            }, 100);
        } else {
            // Manejar el caso en el que no se ingresaron todos los datos
            console.log('Por favor, completa todos los campos.');
        }

        // Restablecer los campos después del inicio de sesión
        document.getElementById("nombreInput").value = "";
        document.getElementById("apellidoInput").value = "";
        document.getElementById("fechaInput").value = "";
        document.getElementById("contraseñaInput").value = "";

        // Puedes agregar más lógica según tus necesidades
    });

    verificarContraseñaButton.addEventListener('click', function () {
        let contraseñaIngresada = prompt("Ingresa tu contraseña para verificar:");

        if (contraseñaIngresada === usuarioActual.contraseña) {
            alert(`Contraseña verificada con éxito, acceso completo ${usuarioActual.nombre}. ¡Bienvenido de nuevo!`);
        } else {
            intentos--;
            alert(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);

            if (intentos === 0) {
                alert("Has agotado tus intentos. Acceso denegado.");
                agradecimientoDiv.style.display = 'none';
                formularioDiv.style.opacity = '1';
            }
        }
    });
});