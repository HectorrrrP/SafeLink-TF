document.addEventListener("DOMContentLoaded", () => {
    const btnCampana = document.getElementById("btn-notificaciones");
    const panel = document.getElementById("panel-notificaciones");
    const lista = document.getElementById("lista-notificaciones");
    const badge = document.getElementById("badge-notificaciones");

    if (!btnCampana || !panel || !lista || !badge) return;

    // Alertas ESTÁTICAS solo para probar funcionalidad
    const alertas = [
        {
            texto: "Simulacro de sismo hoy a las 10:00 a.m.",
            hora: "Hace 5 min"
        },
        {
            texto: "Tu hijo marcó su estado como SEGURO en el Colegio Nacional.",
            hora: "Hace 20 min"
        },
        {
            texto: "Punto seguro 'Parque Central' actualizado por la municipalidad.",
            hora: "Hace 1 h"
        }
    ];

    // Rellenar lista
    lista.innerHTML = "";
    alertas.forEach(alerta => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${alerta.texto}
            <span class="hora-alerta">${alerta.hora}</span>
        `;
        lista.appendChild(li);
    });

    // Badge con número de alertas
    badge.textContent = alertas.length;

    // Abrir/cerrar panel
    btnCampana.addEventListener("click", (e) => {
        e.stopPropagation();
        panel.classList.toggle("activo");
    });

    // Cerrar al hacer click fuera
    document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && e.target !== btnCampana) {
            panel.classList.remove("activo");
        }
    });
});
