function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;
    let aceptar = document.getElementById("aceptar").checked;
    
    if (nombre === "" || apellidos === "") {
        alert("El nombre y los apellidos son obligatorios");
        return false;
    }
    
    let telefonoRegex = /^\d{3} \d{2} \d{2} \d{2}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener el formato xxx xx xx xx");
        return false;
    }
    
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
    
    if (!aceptar) {
        alert("Debes aceptar los términos de protección de los datos");
        return false;
    }
    
    document.getElementById("listaLibros").style.display = "block";
    alert("Registro completado correctamente");
    return true;
}

function calcularPrecio() {
    let precio = parseFloat(document.getElementById("precio").value);
    let iva = parseFloat(document.getElementById("iva").value);
    
    if (isNaN(precio)) {
        alert("Debe introducir un precio válido");
        return;
    }
    
    let precioTotal = precio + (precio * iva);
    document.getElementById("resultado").value = precioTotal.toFixed(2) + " €";
}