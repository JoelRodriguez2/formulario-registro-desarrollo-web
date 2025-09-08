// script.js

// Espera a que el DOM esté cargado, este script espera a que el HTML este cargado por completo para ejecutarse digamos
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    // Validar que el correo no esté vacío y tenga formato válido
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
      alert("El campo de correo no puede estar vacío.");
      event.preventDefault(); // Evita el envío del formulario
      return;
    } else if (!correoRegex.test(correo)) {
      alert("Por favor, introduce un correo válido.");
      event.preventDefault();
      return;
    }

    // Validar contraseña (mínimo 8 caracteres)
    if (contrasena.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres."); // los alert, pues son las alertas, avisandonos ciertas cosas
      event.preventDefault();                                   //como por ejemplo que el correo no puede estar vacio o que la contraseña
      return;                                                   //debe tener minimo 8 caracteres
    }

    // Si todo está bien, se enviará el formulario
    alert("¡Formulario enviado correctamente!");
  });
});
