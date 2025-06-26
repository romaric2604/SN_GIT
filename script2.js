
        function showPage(pageId) {
            // Cacher tous les iframes
            const iframes = document.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                iframe.style.display = 'none';
            });
            // Afficher l'iframe correspondant
            document.getElementById(pageId).style.display = 'block';
        }

        // Charger la page de présentation par défaut
        showPage('presentation');