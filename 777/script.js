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

    const levenshteinDistance = (a, b) => {
    const matrix = Array.from({ length: a.length + 1 }, () => []);
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1, 
                matrix[i][j - 1] + 1, 
                matrix[i - 1][j - 1] + cost
            );
        }
    }
    return matrix[a.length][b.length];
};

// Función para calcular el puntaje de coincidencia
const calculateMatchScore = (query, item) => {
    const queryLower = query.toLowerCase().trim();
    const title = item.dataset.title?.toLowerCase() || "";
    const genres = item.dataset.genres?.toLowerCase().split(",") || [];
    const description = item.dataset.description?.toLowerCase() || "";

    let score = 0;

    // 1. Coincidencia Exacta del Título
    if (title === queryLower) {
        score += 3; // Puntaje alto para coincidencia exacta en el título
    }

    // 2. Coincidencia Parcial en el Título (si no hubo coincidencia exacta)
    if (score === 0) {
        const titleWords = title.split(" ");
        const queryWords = queryLower.split(" ");
        score += queryWords.reduce((acc, queryWord) => {
            const titleMatch = titleWords.some(titleWord => {
                const isSubstring = titleWord.includes(queryWord);
                const isSimilar = levenshteinDistance(queryWord, titleWord) <= Math.max(1, Math.floor(titleWord.length * 0.2)); // Más estricto
                return isSubstring || isSimilar;
            });
            return acc + (titleMatch ? 1 : 0); // Puntaje básico para coincidencia
        }, 0);
    }

    // 3. Coincidencia Exacta o Aproximada en Géneros
    genres.forEach(genre => {
        const genreMatch = genre.includes(queryLower) || levenshteinDistance(queryLower, genre) <= Math.max(2, Math.floor(genre.length * 0.3));
        if (genreMatch) score += 0.5; // Género coincide ligeramente
    });

    // 4. Coincidencia Parcial en la Descripción
    if (description.includes(queryLower)) {
        score += 0.5; // Puntaje más bajo para coincidencia parcial en descripción
    }

    return score;
};

// Función para filtrar y mostrar contenido
const filterContent = () => {
    const query = document.getElementById("searchBar").value.toLowerCase().trim();
    const items = Array.from(document.querySelectorAll(".movie, .series"));

    // Filtrar y calcular puntajes de similitud
    const filteredItems = items.map(item => {
        const score = calculateMatchScore(query, item);
        return { item, score };
    }).filter(({ score }) => score > 0); // Solo los elementos que tienen coincidencia

    // Ordenar por el puntaje de similitud (de mayor a menor)
    filteredItems.sort((a, b) => b.score - a.score);

    // Ocultar todos los elementos inicialmente
    items.forEach(item => item.style.display = "none");
    // Mostrar los elementos filtrados y ordenados
    filteredItems.forEach(({ item }) => {
        item.style.display = "block";
    });
};

// Agregar evento al buscador
document.getElementById("searchBar").addEventListener("input", filterContent);
    
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
