function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    var camposVacios = [];

    if (nombre === '') {
        camposVacios.push('Usuario');
    }
    if (correo === '') {
        camposVacios.push('Correo');
    }
    if (mensaje === '') {
        camposVacios.push('Mensaje');
    }

    if (camposVacios.length > 0) {
        var mensajeAlerta = 'Los siguientes campos están vacíos:\n';
        for (var i = 0; i < camposVacios.length; i++) {
            mensajeAlerta += camposVacios[i] + '\n';
        }
        alert(mensajeAlerta);
        return false; 
    }

    alert('¡Datos ingresados correctamente!');
    return true; 
}

