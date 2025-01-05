// Inicializa EmailJS con tu ID de usuario
(function(){
    emailjs.init("Public-Key"); // Reemplaza con tu ID de usuario
  })();
// Verifica que el DOM esté cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const form = document.getElementById('contact-form');
    // Adjunta el evento 'submit' al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto (recarga de la página)

        // Envía el formulario usando emailjs
        emailjs.sendForm('service-ID', 'template-ID', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message Sent Successfully!');
        }, function(error) {
            console.log('FAILED...', error); // Verifica el error en la consola
            alert('Failed to send the message. Please try again.');
        });
    });
});