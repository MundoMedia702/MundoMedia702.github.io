async function loadBooksFromJSON() {
    const response = await fetch("books.json");
    const books = await response.json();
    return books;
}

async function loadRecommendations(category, currentBookId) {
    const recommendationsContainer = document.getElementById("recommendedBooks");

    const books = await loadBooksFromJSON(); // Cargar los libros desde el archivo JSON

    recommendationsContainer.innerHTML = ""; // Limpiar recomendaciones anteriores

    let recommendedBooks = books.filter(book => book.category === category && book.id != Number(currentBookId));

    if (recommendedBooks.length === 0) {
        recommendationsContainer.innerHTML = "<p>No hay recomendaciones disponibles</p>";
        return;
    }

    recommendedBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("recommended-book");

        bookDiv.innerHTML = `
            <a href="libro.html?id=${book.id}">
                <img src="${book.image}" alt="${book.title}">
                <div class="recommended-book-title">${book.title}</div>
            </a>
        `;

        recommendationsContainer.appendChild(bookDiv);
    });
}
