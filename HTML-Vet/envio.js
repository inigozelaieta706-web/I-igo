(function () {
    emailjs.init({
        publicKey: "lfFYdnI4umfjwsGnj"
    });
})();

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_fx6b3zf",
            "template_cwce7sl",
            this
        )
        .then(() => {
            alert("Mensaje enviado correctamente");

            form.reset(); 
        })
        .catch((error) => {
            console.error("Error al enviar:", error);
            alert("Error al enviar el mensaje");
        });
    });

});