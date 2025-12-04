document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario-familia");
    const inputNombre = document.getElementById("nombre-familia");
    const inputTelefono = document.getElementById("telefono-familia");
    const botonRegistrar = document.querySelector(".boton-registrar-familia");
    const columnaLista = document.querySelector(".columna-lista");

    if (!formulario || !inputNombre || !inputTelefono || !botonRegistrar || !columnaLista) {
      return; // por si algo no existe en el HTML
    }

    
    
    botonRegistrar.addEventListener("click", () => {
      const nombre = inputNombre.value.trim();
      const telefono = inputTelefono.value.trim();
  
      if (!nombre || !telefono) {
        alert(" Por favor completa el nombre y el teléfono.");
        return;
      }
  
      // ---------- contenedor principal del miembro ----------
      const contenedorMiembro = document.createElement("div");
      contenedorMiembro.classList.add("miembro-familia");
  
      // ---------- lado izquierdo (avatar + info) ----------
      const grupoIzquierdo = document.createElement("div");
      grupoIzquierdo.classList.add("grupo-izquierdo");
  
      const avatar = document.createElement("div");
      avatar.classList.add("avatar-familia");
      avatar.textContent = "👨‍👩‍👧‍👦";
  
      const info = document.createElement("div");
  
      const pNombre = document.createElement("p");
      pNombre.classList.add("nombre-miembro");
      pNombre.textContent = nombre;
  
      const pEstado = document.createElement("p");
      pEstado.classList.add("estado-miembro");
      pEstado.textContent = "Estado: Registrado";
  
      info.appendChild(pNombre);
      info.appendChild(pEstado);
  
      grupoIzquierdo.appendChild(avatar);
      grupoIzquierdo.appendChild(info);
  
      // ---------- lado derecho (teléfono) ----------
      const textoDerecha = document.createElement("p");
      textoDerecha.classList.add("texto-derecha");
      textoDerecha.textContent = "Teléfono: " + telefono;
  
      contenedorMiembro.appendChild(grupoIzquierdo);
      contenedorMiembro.appendChild(textoDerecha);
  
      // ---------- separador ----------
      const separador = document.createElement("div");
      separador.classList.add("separador-miembro");
  
      // Añadir al final de la lista
      columnaLista.appendChild(separador);
      columnaLista.appendChild(contenedorMiembro);
  
      // ---------- limpiar inputs ----------
      inputNombre.value = "";
      inputTelefono.value = "";
  
      // 🔔 Mensaje confirmación
      alert(" Familiar registrado con éxito.");
  
      // Opcional: mover la vista al nuevo registro
      contenedorMiembro.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  