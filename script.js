document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#menuLiens a");
    const allContainers = document.querySelectorAll(".grid-paysages");
  
    // Fonction pour afficher le conteneur sélectionné
    const showContainer = (targetId) => {
      allContainers.forEach((container) => {
        if (container.id === targetId) {
          container.classList.remove("hidden"); // Affiche le bon conteneur
        } else {
          container.classList.add("hidden"); // Masque les autres
        }
      });
    };
  
    // Ajouter un gestionnaire d'événement sur chaque lien
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        const targetId = link.getAttribute("data-target");
        showContainer(targetId);
      });
    });
  
    // Affiche le premier groupe par défaut
    showContainer("images1");
  });
  