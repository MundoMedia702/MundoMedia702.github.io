document.addEventListener("DOMContentLoaded", () => {
    // Lazy Loading de imágenes
    const lazyImages = document.querySelectorAll(".lazy-image");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("lazy-loaded");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, { root: null, threshold: 0.1 });
    lazyImages.forEach(img => observer.observe(img));

    // Mostrar/Ocultar secciones
    const toggleSection = (sectionId) => {
        const sections = ["movies", "series"];
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (id === sectionId) {
                section.style.display = "flex"; // Mostrar
            } else {
                section.style.display = "none"; // Ocultar
            }
        });
    };

    // Filtrar contenido
    const filterContent = () => {
        const query = document.getElementById("searchBar").value.toLowerCase();
        const items = document.querySelectorAll(".movie, .series");
        items.forEach(item => {
            const title = item.querySelector("p").textContent.toLowerCase();
            item.style.display = title.includes(query) ? "block" : "none";
        });
    };

    // Exponer funciones globalmente
    window.toggleSection = toggleSection;
    window.filterContent = filterContent;

    // Popup funcionalidad
    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {
        movie.addEventListener("click", (event) => {
            // Evita que el evento se propague al documento
            event.stopPropagation();

            // Oculta cualquier popup abierto
            document.querySelectorAll(".movie-description").forEach(desc => {
                desc.style.visibility = "hidden";
                desc.style.opacity = "0";
            });

            // Muestra el popup del elemento clicado
            const description = movie.querySelector(".movie-description");
            description.style.visibility = "visible";
            description.style.opacity = "1";
        });
    });

    // Cierra los popups si se toca fuera
    document.addEventListener("click", () => {
        document.querySelectorAll(".movie-description").forEach(desc => {
            desc.style.visibility = "hidden";
            desc.style.opacity = "0";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    document.body.appendChild(popup);

    function showPopup(e, element) {
        const title = element.dataset.title || 'Título no disponible';
        const description = element.dataset.description || 'Sin descripción';
        const genres = element.dataset.genres ? `Géneros: ${element.dataset.genres}` : '';
        const rating = element.dataset.rating || 0;

        // Crear contenido del popup
        popup.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            ${genres ? `<p>${genres}</p>` : ''}
            <div class="popup-rating">
                ${[...Array(5)].map((_, i) => 
                    `<span class="${i < Math.round(rating) ? '' : 'inactive'}">★</span>`
                ).join('')}
            </div>
        `;

        // Posicionar cerca del cursor
        popup.style.left = `${e.pageX + 10}px`;
        popup.style.top = `${e.pageY + 10}px`;
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    // Añadir eventos a películas y series
    document.querySelectorAll('.movie, .series').forEach(item => {
        item.addEventListener('mouseover', e => showPopup(e, item));
        item.addEventListener('mousemove', e => {
            popup.style.left = `${e.pageX + 10}px`;
            popup.style.top = `${e.pageY + 10}px`;
        });
        item.addEventListener('mouseleave', hidePopup);

        // Compatibilidad con pantallas táctiles
        item.addEventListener('click', e => {
            showPopup(e, item);
            setTimeout(hidePopup, 3000);
        });
    });
});
