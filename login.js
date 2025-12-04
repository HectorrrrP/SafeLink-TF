document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("form-login");
    const btnBio = document.getElementById("btn-bio");

    // 🔑 Login "normal" de demostración
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();

            const correo = document.getElementById("correo").value.trim();
            const contrasena = document.getElementById("contrasena").value.trim();
            const rol = document.getElementById("rol").value;

            if (!correo || !contrasena || !rol) {
                alert("Por favor, completa correo, contraseña y rol para iniciar sesión.");
                return;
            }

            // Aquí iría la llamada real al backend / API
            alert("Inicio de sesión correcto (demostración). Redirigiendo a SafeLink...");
            // Redirección de demo (puedes cambiar a otra página)
            window.location.href = "LandingPage.html#inicio";
        });
    }

    // 🔐 Login biométrico simulado
    if (btnBio) {
        btnBio.addEventListener("click", async () => {
            // En producción usarías WebAuthn / APIs biométricas del dispositivo.
            // Aquí solo simulamos el proceso.
            if (!("credentials" in navigator)) {
                alert("Tu navegador no soporta APIs avanzadas de autenticación. Se usará una simulación.");
            }

            btnBio.disabled = true;
            btnBio.textContent = "Verificando biometría...";

            // Simulamos un pequeño tiempo de verificación
            setTimeout(() => {
                alert("Biometría verificada correctamente (simulación). ¡Bienvenido a SafeLink!");
                // Redirección de demo
                window.location.href = "LandingPage.html#inicio";
            }, 1500);
        });
    }
});
