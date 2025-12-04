// puntos_seguros.js

document.addEventListener("DOMContentLoaded", () => {
    // ========= REGISTRO DE PUNTOS SEGUROS =========
    const tipoPunto = document.getElementById("tipo-punto");
    const nombrePunto = document.getElementById("nombre-punto");
    const btnRegistrarPunto = document.getElementById("btn-registrar-punto");
    const listaPuntosSeguros = document.getElementById("lista-puntos-seguros");
  
    if (btnRegistrarPunto && tipoPunto && nombrePunto && listaPuntosSeguros) {
      btnRegistrarPunto.addEventListener("click", () => {
        const tipo = tipoPunto.value.trim();
        const nombre = nombrePunto.value.trim();
  
        if (!tipo || !nombre) {
          alert("Por favor, selecciona el tipo de lugar e ingresa un nombre.");
          return;
        }
  
        // Si es el primer punto, limpiamos el texto inicial
        const parrafoInicial = listaPuntosSeguros.querySelector("p");
        if (parrafoInicial) {
          parrafoInicial.remove();
        }
  
        // Contenedor del nuevo punto
        const item = document.createElement("div");
        item.classList.add("miembro-familia");
  
        const grupoIzquierdo = document.createElement("div");
        grupoIzquierdo.classList.add("grupo-izquierdo");
  
        const avatar = document.createElement("div");
        avatar.classList.add("avatar-familia");
        avatar.textContent = tipo; // Emoji del tipo de lugar
  
        const info = document.createElement("div");
        const titulo = document.createElement("p");
        titulo.classList.add("nombre-miembro");
        titulo.textContent = nombre;
  
        const estado = document.createElement("p");
        estado.classList.add("estado-miembro");
        estado.textContent = "Punto seguro registrado";
  
        info.appendChild(titulo);
        info.appendChild(estado);
  
        grupoIzquierdo.appendChild(avatar);
        grupoIzquierdo.appendChild(info);
  
        const textoDerecha = document.createElement("p");
        textoDerecha.classList.add("texto-derecha");
        textoDerecha.textContent = "Personalizado por tu familia";
  
        item.appendChild(grupoIzquierdo);
        item.appendChild(textoDerecha);
  
        // Separador
        const separador = document.createElement("div");
        separador.classList.add("separador-miembro");
  
        listaPuntosSeguros.appendChild(item);
        listaPuntosSeguros.appendChild(separador);
  
        // Limpia el formulario
        tipoPunto.value = "";
        nombrePunto.value = "";
  
        alert("Punto seguro registrado correctamente.");
      });
    }
  
    // ========= ESTADO DEL USUARIO (SEGURO / EN RIESGO) =========
    const btnSeguro = document.getElementById("btn-estado-seguro");
    const btnRiesgo = document.getElementById("btn-estado-riesgo");
    const mensajeEstado = document.getElementById("mensaje-estado");
  
    function actualizarEstado(tipo) {
      if (!btnSeguro || !btnRiesgo || !mensajeEstado) return;
  
      // Quitar estado activo de ambos
      btnSeguro.classList.remove("activo");
      btnRiesgo.classList.remove("activo");
  
      if (tipo === "seguro") {
        btnSeguro.classList.add("activo");
        mensajeEstado.textContent =
          "Has indicado que estás SEGURO. Tu familia será informada de que te encuentras bien.";
        mensajeEstado.style.color = "#00a651";
      } else if (tipo === "riesgo") {
        btnRiesgo.classList.add("activo");
        mensajeEstado.textContent =
          "Has indicado que estás EN RIESGO. Tu familia podrá tomar acciones para ayudarte.";
        mensajeEstado.style.color = "#d93025";
      }
    }
  
    if (btnSeguro && btnRiesgo) {
      btnSeguro.addEventListener("click", () => {
        actualizarEstado("seguro");
      });
  
      btnRiesgo.addEventListener("click", () => {
        actualizarEstado("riesgo");
      });
    }
  });

// Filtros de categoría
const botonesFiltro = document.querySelectorAll('.btn-filtro-categoria');
const puntosRegistrados = document.querySelectorAll('#lista-puntos-seguros .miembro-familia');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const categoria = boton.getAttribute('data-categoria');

        // activar visualmente el botón
        botonesFiltro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        // mostrar / ocultar puntos según categoría
        puntosRegistrados.forEach(punto => {
            const catPunto = punto.getAttribute('data-categoria') || 'seguro';

            if (categoria === 'todos' || categoria === catPunto) {
                punto.style.display = 'flex';
            } else {
                punto.style.display = 'none';
            }
        });
    });
});
