// comunicacion.js

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".tarjeta-opcion");
    const mensaje = document.getElementById("mensaje-seleccion");
  
    tarjetas.forEach((tarjeta) => {
      tarjeta.addEventListener("click", () => {
        // Quitar estado activo de todas
        tarjetas.forEach((t) => t.classList.remove("activa"));
  
        // Activar la tarjeta clickeada
        tarjeta.classList.add("activa");
  
        const tipo = tarjeta.getAttribute("data-opcion");
  
        if (!mensaje) return;
  
        if (tipo === "alertas") {
          mensaje.textContent =
            "Has seleccionado la opción de autoridad/líder comunitario. Podrás configurar mensajes y enviarlos a todos los residentes registrados.";
          mensaje.style.color = "#184f2f";
        } else if (tipo === "residentes") {
          mensaje.textContent =
            "Has seleccionado la opción de residente. Podrás unirte a un canal con tus vecinos para compartir información y coordinar ayuda.";
          mensaje.style.color = "#184f2f";
        }
      });
    });
  
    // También dejamos que hacer clic en el botón interno cuente como clic a la tarjeta
    const botones = document.querySelectorAll(".tarjeta-opcion .btn-accion");
    botones.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();      // Que no se dispare dos veces
        btn.closest(".tarjeta-opcion")?.click();
      });
    });
  });
  document.querySelectorAll('.tarjeta-opcion').forEach(opcion => {
    opcion.addEventListener('click', () => {
        document.getElementById('mensaje-seleccion').textContent =
            "Has seleccionado: " + opcion.querySelector('.titulo-opcion').textContent;
    });
});
