let currentIndex = 0;

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    // Défilement vers le bas
    currentIndex++;
  } else {
    // Défilement vers le haut
    currentIndex--;
  }

  // Limitez le défilement aux sections disponibles
  currentIndex = Math.min(Math.max(currentIndex, 0), 2);

  updateSectionsPosition();
});

function updateSectionsPosition() {
  const sectionWidth = 100; // Largeur d'une section en pourcentage
  const translateX = -currentIndex * sectionWidth;

  document.querySelectorAll('.section').forEach((section, index) => {
    section.style.transform = `translateX(${translateX + index * sectionWidth}%)`;
  });
}
