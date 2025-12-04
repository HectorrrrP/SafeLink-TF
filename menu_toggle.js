const btnHamburguesa = document.querySelector(".menu-toggle");

const menuHorizontal = document.querySelector(".Menu-Horizontal");

if (btnHamburguesa && menuHorizontal) {

  btnHamburguesa.addEventListener("click", () => {
    menuHorizontal.classList.add("active");
    btnHamburguesa.classList.add("oculto");
  });

  const enlaces = menuHorizontal.querySelectorAll("a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuHorizontal.classList.remove("active");
      btnHamburguesa.classList.remove("oculto");
    });
  });
}
