// Espera o HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {
  // 1. Seleciona os dois elementos que precisamos controlar
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const mainNav = document.getElementById("main-nav");

  // 2. Adiciona o "espião" de clique no botão hambúrguer
  btnMobileMenu.addEventListener("click", function () {
    // 3. A MÁGICA: Adiciona ou remove a classe .is-open
    // É o "interruptor" que o nosso CSS vai obedecer
    mainNav.classList.toggle("is-open");

    // Opcional: Mudar o ícone de hambúrguer para um "X"
    const icon = btnMobileMenu.querySelector("i");
    if (mainNav.classList.contains("is-open")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});
