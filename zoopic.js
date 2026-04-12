document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".modal-close");
  // Cibler toutes les images de la grille
  const images = document.querySelectorAll(".grid-paysages img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      captionText.innerText = img.alt || "Aucune description disponible";
      modal.classList.add("open");
    });
  });

  // Fermer la modale lorsqu'on clique sur la croix
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 500);
  });

  // Fermer la modale lorsqu'on clique à l'extérieur de l'image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 500);
    }
  });

  // Au chargement, masquer la modale
  modal.classList.add("hidden");
});
