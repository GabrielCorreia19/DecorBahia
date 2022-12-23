const enviar = document.getElementById('submit')

enviar.addEventListener("click",(e) => {
    e.preventDefault();

    var nome = document.querySelector("#nome");
    var value = nome.value;
    var email = document.querySelector("#email");
    var valueEmail = email.value;

    localStorage.setItem("nomeInput", value);
    localStorage.setItem("emailInput", valueEmail);

    window.location.assign("home.html");
} );