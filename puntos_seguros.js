// puntos_seguros.js

document.addEventListener("DOMContentLoaded", () => {
  // ========= REGISTRO DE PUNTOS SEGUROS =========
  const tipoPunto = document.getElementById("tipo-punto");
  const nombrePunto = document.getElementById("nombre-punto");
  const categoriaPunto = document.getElementById("categoria-punto");
  const btnRegistrarPunto = document.getElementById("btn-registrar-punto");
  const listaPuntosSeguros = document.getElementById("lista-puntos-seguros");

  // ========= FUNCIÓN PARA APLICAR FILTRO =========
  function aplicarFiltro(categoria) {
    const puntos = listaPuntosSeguros.querySelectorAll(".miembro-familia");

    puntos.forEach((punto) => {
      const catPunto = punto.getAttribute("data-categoria") || "seguro";

      if (categoria === "todos" || categoria === catPunto) {
        punto.style.display = "flex";
      } else {
        punto.style.display = "none";
      }
    });
  }

  if (btnRegistrarPunto && tipoPunto && nombrePunto && categoriaPunto && listaPuntosSeguros) {
    btnRegistrarPunto.addEventListener("click", () => {
      const tipo = tipoPunto.value.trim();        // emoji
      const nombre = nombrePunto.value.trim();
      const categoria = categoriaPunto.value;     // seguro / riesgo / hospital

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
      item.setAttribute("data-categoria", categoria); // 👈 para los filtros

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

      // ---------- Lado derecho: texto + botón EDITAR ----------
      const contenedorDerecha = document.createElement("div");
      contenedorDerecha.classList.add("texto-derecha");

      const textoDerecha = document.createElement("p");
      textoDerecha.textContent = "Personalizado por tu familia";

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.type = "button";
      btnEditar.classList.add("btn-editar-punto");

      // 👉 Lógica para EDITAR el punto
      btnEditar.addEventListener("click", () => {
        const nuevoTipo = prompt(
          "Actualiza el tipo de lugar (ej. 🏞️, 🏫, 🏛️):",
          avatar.textContent
        );
        if (nuevoTipo && nuevoTipo.trim()) {
          avatar.textContent = nuevoTipo.trim();
        }

        const nuevoNombre = prompt(
          "Actualiza el nombre del lugar:",
          titulo.textContent
        );
        if (nuevoNombre && nuevoNombre.trim()) {
          titulo.textContent = nuevoNombre.trim();
        }

        const nuevaCategoria = prompt(
          "Actualiza la categoría (seguro, riesgo, hospital):",
          item.getAttribute("data-categoria") || "seguro"
        );

        if (nuevaCategoria) {
          const catLimpia = nuevaCategoria.trim().toLowerCase();
          const categoriasValidas = ["seguro", "riesgo", "hospital"];

          if (categoriasValidas.includes(catLimpia)) {
            item.setAttribute("data-categoria", catLimpia);
            alert("Punto actualizado correctamente.");
          } else {
            alert("Categoría no válida. Usa: seguro, riesgo u hospital.");
          }
        }
      });

      contenedorDerecha.appendChild(textoDerecha);
      contenedorDerecha.appendChild(btnEditar);

      // Añadimos ambos lados al item
      item.appendChild(grupoIzquierdo);
      item.appendChild(contenedorDerecha);

      // Separador
      const separador = document.createElement("div");
      separador.classList.add("separador-miembro");

      listaPuntosSeguros.appendChild(item);
      listaPuntosSeguros.appendChild(separador);

      // Limpia el formulario
      tipoPunto.value = "";
      nombrePunto.value = "";
      categoriaPunto.value = "seguro";

      alert("Punto seguro registrado correctamente.");

      // Reaplicar el filtro actual, por si no está en 'Todos'
      const botonActivo = document.querySelector(".btn-filtro-categoria.activo");
      if (botonActivo) {
        aplicarFiltro(botonActivo.getAttribute("data-categoria"));
      }
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

  // ========= FILTROS DE CATEGORÍA =========
  const botonesFiltro = document.querySelectorAll(".btn-filtro-categoria");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");

      // activar visualmente el botón
      botonesFiltro.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");

      // aplicar el filtro
      aplicarFiltro(categoria);
    });
  });
});
