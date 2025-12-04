document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".formulario-familia");

  const inputNombre   = document.getElementById("nombre-familia");
  const inputApellido = document.getElementById("apellido-familia");
  const inputDni      = document.getElementById("dni-familia");
  const inputCorreo   = document.getElementById("correo-familia");
  const inputTelefono = document.getElementById("telefono-familia");

  const botonRegistrar = document.getElementById("btn-registrar-familia") 
                      || document.querySelector(".boton-registrar-familia");

  const columnaLista = document.querySelector(".columna-lista");

  // Si algo no existe en el HTML, salimos silenciosamente
  if (
    !formulario ||
    !inputNombre ||
    !inputApellido ||
    !inputDni ||
    !inputCorreo ||
    !inputTelefono ||
    !botonRegistrar ||
    !columnaLista
  ) {
    return;
  }

  botonRegistrar.addEventListener("click", () => {
    const nombre   = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const dni      = inputDni.value.trim();
    const correo   = inputCorreo.value.trim();
    const telefono = inputTelefono.value.trim();

    // ---------- Validaciones básicas ----------
    if (!nombre || !apellido || !dni || !correo || !telefono) {
      alert("Por favor completa todos los campos: nombres, apellidos, DNI, correo y teléfono.");
      return;
    }

    // DNI: 8 dígitos
    const dniValido = /^\d{8}$/.test(dni);
    if (!dniValido) {
      alert("El DNI debe tener exactamente 8 dígitos numéricos.");
      return;
    }

    // Teléfono: al menos 6 dígitos
    const telValido = /^\d{6,15}$/.test(telefono);
    if (!telValido) {
      alert("El teléfono debe contener solo números y tener al menos 6 dígitos.");
      return;
    }

    // Correo sencillo
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    const nombreCompleto = `${nombre} ${apellido}`;

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
    pNombre.textContent = nombreCompleto;

    const pEstado = document.createElement("p");
    pEstado.classList.add("estado-miembro");
    pEstado.textContent = `DNI: ${dni}`;

    info.appendChild(pNombre);
    info.appendChild(pEstado);

    grupoIzquierdo.appendChild(avatar);
    grupoIzquierdo.appendChild(info);

    // ---------- lado derecho (teléfono + correo) ----------
    const textoDerecha = document.createElement("p");
    textoDerecha.classList.add("texto-derecha");
    textoDerecha.innerHTML = `
      Teléfono: ${telefono}<br>
      Correo: ${correo}
    `;

    contenedorMiembro.appendChild(grupoIzquierdo);
    contenedorMiembro.appendChild(textoDerecha);

    // ---------- separador ----------
    const separador = document.createElement("div");
    separador.classList.add("separador-miembro");

    // Añadir al final de la lista
    columnaLista.appendChild(separador);
    columnaLista.appendChild(contenedorMiembro);

    // ---------- limpiar inputs ----------
    inputNombre.value   = "";
    inputApellido.value = "";
    inputDni.value      = "";
    inputCorreo.value   = "";
    inputTelefono.value = "";

    // 🔔 Mensaje confirmación
    alert("Familiar registrado con éxito.");

    // Opcional: mover la vista al nuevo registro
    contenedorMiembro.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
