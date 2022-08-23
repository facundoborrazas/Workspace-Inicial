const email = document.querySelector('#floatingInput'); /*Guardamos en una constante la etiqueta con id "floatingInput"*/
const contraseña = document.querySelector('#floatingPassword'); /*En esta guardamos la etiqueta con el id "floatingPassword"*/
const bttn = document.querySelector('#regBtn'); /*En esta ultima guardamos la rtiqueta con id "regBtn"*/
const googleS = document.querySelector(".g-signin2");

function showAlertSuccess() { /*Funcion para mostrar alerta de datos bien ingresados*/
    document.getElementById("alert-success").classList.add("show");
}

function showAlertEmailError() { /*Funcion para mostrar alerta de email mal ingresada*/
    document.getElementById("alert-danger-email").classList.add("show");
}

function showAlertPasswordError() { /*Funcion para mostrar alerta de contraseña mal ingresada*/
    document.getElementById("alert-danger-password").classList.add("show");
}


function passCaracteres() { /*Funcion que evala si el campo de la contraseña tiene más, o menos, caracteres de los que son necesarios para ingresar*/
    if (contraseña.value.length < 6) {
        showAlertPasswordError();
        return false;
    }
    else {
        return true;
    }
}

function verificarInput() { /*Funcion que evalua que al menos haya un caracter dentro del campo de email*/
    if (email.value.length < 1) {
        showAlertEmailError();
        return false;
    }
    else {
        return true;
    }
}

bttn.addEventListener('click', function () { /*En la constante bttn agregamos el evento "click" 
para que utilizando las anteriores dos funciones nos muestre un mensaje de aprovacion o de 
desaprobacion segun si hicimos bien el logeo. En el caso positivo, nos llevara a la pantalla inicial
en el caso negativo nos recargará la pantalla de logeo*/
    if (passCaracteres() && verificarInput()) {
        showAlertSuccess();
        setTimeout(() => {
            location.href = "index.html"
        }, 1000);
    }
    else {
        setInterval("location.reload()", 2500);
    }

});

/*Google:*/

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

googleS.addEventListener('click', function () { /*En la constante googleS agregamos el evento "click" 
para simular que se ha podido ingresar con google y nos muestre un mensaje de aprovacion
 si hicimos bien el logeo.*/
 if(onSignIn(googleUser)){
    setTimeout(() => {
        showAlertSuccess();
    }, 5000);
    setTimeout(() => {
        location.href = "index.html"
    }, 7000);
 }
});