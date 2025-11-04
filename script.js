// Espera o HTML carregar antes de executar
document.addEventListener("DOMContentLoaded", function () {
  // --- CÓDIGO DO MENU HAMBÚRGUER (que já tínhamos) ---
  const btnMobileMenu = document.getElementById("btn-mobile-menu");
  const mainNav = document.getElementById("main-nav");

  // Verifica se os elementos do menu existem
  if (btnMobileMenu && mainNav) {
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

  // --- CÓDIGO DO MODAL FLYER ---

  // Seleciona os elementos do modal
  const flyerModal = document.getElementById("flyer-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  // Função para fechar o modal
  function fecharModal() {
    if (flyerModal) {
      flyerModal.classList.add("hidden");
    }
  }

  // Adiciona "espião" de clique para fechar no botão 'X'
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", fecharModal);
  }

  // Adiciona "espião" de clique para fechar no fundo (overlay)
  if (flyerModal) {
    flyerModal.addEventListener("click", function (event) {
      // Só fecha se o clique for no próprio container (fundo)
      if (event.target === flyerModal) {
        fecharModal();
      }
    });
  }
});
