document.addEventListener("DOMContentLoaded", function () {
    const menuDeroulant = document.getElementById("menuDeroulant");

    // Récupérer les conteneurs d'images
    const imageContainers = {
        images1: document.getElementById("images1"),
        images2: document.getElementById("images2")
    };

    // Fonction pour masquer tous les conteneurs d'images
    function masquerTousLesConteneurs() {
        for (const i in imageContainers) {
            imageContainers[i].style.display = "none";
        }
    }

    // Écouter les changements dans le menu déroulant
    menuDeroulant.addEventListener("change", function () {
        const choix = menuDeroulant.value;
        
        // Masquer tous les conteneurs d'images
        masquerTousLesConteneurs();

        // Afficher le conteneur d'images correspondant au choix, ou images1 par défaut
        if (imageContainers.hasOwnProperty(choix)) {
            imageContainers[choix].style.display = "grid";
        }
    });

    // Masquer tous les conteneurs d'images au chargement de la page, sauf images1
    masquerTousLesConteneurs();
    imageContainers["images1"].style.display = "grid";
});
