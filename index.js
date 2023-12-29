
document.addEventListener('DOMContentLoaded', function () {
    let intentos = 2;
    let usuarioActual;
    let formularioDiv = document.getElementById('formulario');
    let agradecimientoDiv = document.getElementById('agradecimiento');
    let inicioSesionButton = document.getElementById('inicioSesionButton');
    let verificarContraseñaButton = document.getElementById('verificarContraseña');
    let loadingDiv = document.getElementById('loading');

    inicioSesionButton.addEventListener('click', function () {
        let datosUsuario = obtenerDatosUsuario();

        if (datosUsuario.nombre && datosUsuario.apellido && datosUsuario.fechaCumpleaños && datosUsuario.contraseña) {
            loadingDiv.style.display = 'block';

            // Simular una llamada asíncrona a una API o servidor usando Fetch
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => {
                    usuarioActual = datosUsuario;
                    formularioDiv.style.opacity = '0';
                    agradecimientoDiv.style.display = 'block';
                    setTimeout(() => {
                        agradecimientoDiv.style.opacity = '1';
                        alert(`¡Acceso intermedio! ${data.title}`);
                        loadingDiv.style.display = 'none';
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error en la llamada asíncrona:', error);
                    loadingDiv.style.display = 'none';
                });
        } else {
            console.log('Por favor, completa todos los campos.');
        }

        // Restablecer después del inicio de sesión
        document.getElementById("nombreInput").value = "";
        document.getElementById("apellidoInput").value = "";
        document.getElementById("fechaInput").value = "";
        document.getElementById("contraseñaInput").value = "";
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

    function obtenerDatosUsuario() {
        return {
            nombre: document.getElementById("nombreInput").value,
            apellido: document.getElementById("apellidoInput").value,
            fechaCumpleaños: document.getElementById("fechaInput").value,
            contraseña: document.getElementById("contraseñaInput").value
        };
    }
});