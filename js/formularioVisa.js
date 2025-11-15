function Confirm(){
    validarCampos();
}

function validarCampos(){
    let nombre = document.getElementById("id_Cardoholder_Nme").value;

    if(nombre === "") {
        limpiarMensajes();
        mostrarMensaje('Cardholder es obligatorio');
        mostrarAsterisco('id_error_cardholder');
        return;
    }

    let cardnumber = document.getElementById("id_Card_number").value;
    if(cardnumber === "") {
        limpiarMensajes();
        mostrarMensaje('Cardnumber es obligatorio');
        mostrarAsterisco('id_error_card_number');
        return;
    }

    let expDate = document.getElementById("id_Exp_Date").value;
    if(expDate === "") {
        limpiarMensajes();
        mostrarMensaje('Fecha de expiracion es obligatorio');
        mostrarAsterisco('id_error_card_info');
        return;
    }

    let cvv = document.getElementById("id_cvv").value;

    if(cvv === "") {
        limpiarMensajes();
        mostrarMensaje('CVV es obligatorio');
        mostrarAsterisco('id_error_cvv');
        return;
    }


}

function mostrarMensaje(msg){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display="block";
}

function mostrarAsterisco(idElemento){
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display="none";

    const erroresAsterisco = document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText = '');
}
