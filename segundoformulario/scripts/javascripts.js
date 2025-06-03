
window.onload = function () {
    var boton_inicio = document.getElementById("boton_Enviar");
    boton_inicio.addEventListener('click', validar_formulario);

    var boton_cancelar = document.getElementById("boton_Cancelar");
    boton_cancelar.addEventListener("click", limpiar_formulario);
}

function cambiarColor() {
     var body = document.getElementById("el_body");
     body.style.backgroundColor = "red";
 }

function validar_formulario() {
    var inputNombre = document.getElementById('inputNombre');
    var inputEmail = document.getElementById('inputEmail');
    var inputRut = document.getElementById("inputRut");
    var inputContrasena = document.getElementById('inputContrasena');
    var inputRepetirContrasena = document.getElementById('inputRepetirContrasena');

    if (inputNombre.value.trim() == "" || !validar_nombre(inputNombre.value.trim())) {
        inputNombre.classList.add('is-invalid');
    } else {
        inputNombre.classList.remove('is-invalid');
    }

    if (inputEmail.value.trim() == "" || !validar_email(inputEmail.value.trim())) {
        inputEmail.classList.add('is-invalid');
    } else {
        inputEmail.classList.remove('is-invalid');
    }

    if (inputRut.value.trim() == "" || !validaRut(inputRut.value.trim())) {
        inputRut.classList.add('is-invalid');
    } else {
        inputRut.classList.remove('is-invalid');
    }

    if (inputContrasena.value.trim() == "" || !validar_contrasena_segura(inputContrasena.value.trim())) {
        inputContrasena.classList.add('is-invalid');
    } else {
        inputContrasena.classList.remove('is-invalid');
    }

    if (inputRepetirContrasena.value.trim() == "" || inputContrasena.value.trim() != inputRepetirContrasena.value.trim()) {
        inputRepetirContrasena.classList.add('is-invalid');
    } else {
        inputRepetirContrasena.classList.remove('is-invalid');
    }
     if (
        !inputNombre.classList.contains('is-invalid') &&
        !inputEmail.classList.contains('is-invalid') &&
        !inputRut.classList.contains('is-invalid') &&
        !inputContrasena.classList.contains('is-invalid') &&
        !inputRepetirContrasena.classList.contains('is-invalid')
    ) {
        alert("¡Formulario válido! Los archivos serán guardados.");
    }
}

function validar_nombre(nombre){
        return /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre) && nombre.length >= 3;

}

function validar_email(email) {
    return /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/.test(email);
}

function validar_contrasena_segura(contrasena) {
    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(contrasena);
}

function validaRut(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (dv(rut) == digv);
}

function dv(dig_ver) {
    var M = 0, S = 1;
    for (; dig_ver; dig_ver = Math.floor(dig_ver / 10))
        S = (S + dig_ver % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
}