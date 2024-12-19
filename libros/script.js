function filterBooks(category) {
    // Obtener todos los elementos con la clase 'book'
    const books = document.querySelectorAll('.books-container .book');
    
    // Si se selecciona 'all', mostrar todos los libros
    if (category === 'all') {
        books.forEach(book => {
            book.style.display = 'block';
        });
    } else {
        // Mostrar solo los libros que tienen la clase correspondiente a la categoría seleccionada
        books.forEach(book => {
            // Comprobar si el libro tiene la clase de la categoría seleccionada
            if (book.classList.contains(category)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    }
}

document.getElementById('search').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const title = book.querySelector('.book-title').textContent.toLowerCase();
        if (title.includes(searchText)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

// Función para filtrar los libros según la categoría
function filterBooks(category) {
    const books = document.querySelectorAll('.book');  // Seleccionamos todos los libros
    books.forEach(book => {
        // Si la categoría seleccionada es "all", mostramos todos los libros
        if (category === 'all') {
            book.style.display = 'block';
        } else {
            // Si el libro pertenece a la categoría seleccionada, lo mostramos
            if (book.classList.contains(category)) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';  // Ocultamos el libro que no pertenece a la categoría
            }
        }
    });
}

// Al cargar la página, mostramos todos los libros por defecto
document.addEventListener('DOMContentLoaded', () => {
    filterBooks('all');
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos todos los elementos con las clases "book-title" y "book-image"
    const bookTitles = document.querySelectorAll('.book-title');
    const bookImages = document.querySelectorAll('.book-image');

    // Función para redirigir cuando se hace clic en el título o la imagen
    function redirectToPage(event) {
        // Prevenimos el comportamiento por defecto del enlace
        event.preventDefault();

        // Obtenemos la URL del atributo "data-url" del título o de la imagen
        const url = event.target.closest('.book-link').querySelector('.book-title').getAttribute('data-url');
        
        // Si existe la URL, redirigimos al usuario
        if (url) {
            window.location.href = url;
        }
    }

    // Añadimos el event listener a los títulos de los libros
    bookTitles.forEach(function(title) {
        title.addEventListener('click', redirectToPage);
    });

    // Añadimos el event listener a las imágenes de los libros
    bookImages.forEach(function(image) {
        image.addEventListener('click', redirectToPage);
    });
});



