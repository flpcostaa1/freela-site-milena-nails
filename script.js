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

// Espera o HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {
  // --- CÓDIGO DO MENU HAMBÚRGUER (que já tínhamos) ---
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const mainNav = document.getElementById("main-nav");

  if (btnMobileMenu && mainNav) {
    // Verifica se os elementos existem
    btnMobileMenu.addEventListener("click", function () {
      mainNav.classList.toggle("is-open");

      const icon = btnMobileMenu.querySelector("i");
      if (mainNav.classList.contains("is-open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  }

  // --- CÓDIGO NOVO DO MODAL FLYER ---

  // 1. Seleciona os elementos do modal
  const flyerModal = document.getElementById("flyer-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // 2. Função para fechar o modal
  function fecharModal() {
    if (flyerModal) {
      // Verifica se o modal existe
      flyerModal.classList.add("hidden");
    }
  }

  // 3. Adiciona "espiões" de clique para fechar
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", fecharModal);
  }

  if (flyerModal) {
    // Também fecha se clicar no fundo (o overlay)
    flyerModal.addEventListener("click", function (event) {
      // Só fecha se o clique for no próprio container (fundo)
      if (event.target === flyerModal) {
        fecharModal();
      }
    });
  }
});
