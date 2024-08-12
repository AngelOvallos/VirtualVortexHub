
function enviarCorreo() {
    var destinatario = document.querySelector('.ingCorreo').value;

    var regex = /@gmail\.com$/;

    if (regex.test(destinatario)) {
        alert(`Se envió un correo a ${destinatario} con el mensaje: "Su mensaje se recibió con éxito, le estaremos respondiendo lo más pronto posible por parte del equipo de Virtual Vortex Hub"`);
        
        document.querySelector('.ingCorreo').value = '';
        document.querySelector('.info').value = '';
    } else {
        alert('Por favor, utiliza un correo con la extensión "@gmail.com"');

        document.querySelector('.ingCorreo').value = '';
    }
}

function iniciarSesion() {
    var destinatario = document.querySelector('.ingCorreo').value;
    var contra = document.querySelector('.contra').value; 

    var regex = /@gmail\.com$/;

    if (regex.test(destinatario)) {
        if (contra !== "") {
            alert(`Se inició sesión con éxito.`);
            
            document.querySelector('.ingCorreo').value = '';
            document.querySelector('.contra').value = '';
        } else {
            alert('Por favor, ingresa una contraseña.');
        }
    } else {
        alert('Por favor, utiliza un correo con la extensión "@gmail.com"');

        document.querySelector('.ingCorreo').value = '';
        document.querySelector('.contra').value = '';
    }
}

function registrarse() {
    var destinatario = document.querySelector('.ingCorreo').value; 
    var contra = document.querySelector('.contra').value; 
    var confirmContra = document.querySelector('.confirmContra').value; 
    var regex = /@gmail\.com$/;

    if (regex.test(destinatario)) {
        if (contra === confirmContra) {
            if (contra !== "") {
                // Si la contraseña y la confirmación de contraseña son iguales y no están vacías
                alert('Se registró con éxito.');
                // Limpiar los campos de texto
                document.querySelector('.ingCorreo').value = '';
                document.querySelector('.contra').value = '';
                document.querySelector('.confirmContra').value = '';
            } else {
                // Si la contraseña está vacía
                alert('Por favor, ingresa una contraseña.');
            }
        } else {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            
            document.querySelector('.contra').value = '';
            document.querySelector('.confirmContra').value = '';
        }    
    } else {
        alert('Por favor, utiliza un correo con la extensión "@gmail.com"');

        document.querySelector('.ingCorreo').value = '';
        document.querySelector('.contra').value = '';
        document.querySelector('.confirmContra').value = '';
    }
}