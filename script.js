// Funciones de contenido
function showContent(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.content').innerHTML;
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = content;
}

function searchInSection(sectionId, searchTerm) {
    const section = document.getElementById(sectionId);
    const contentDiv = section.querySelector('.scrollable');
    const links = contentDiv.querySelectorAll('a');

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
}

function generalSearch() {
    const searchTerm = document.getElementById('general-search').value.toLowerCase();
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const links = section.querySelectorAll('.scrollable a');
        links.forEach(link => {
            if (link.textContent.toLowerCase().includes(searchTerm)) {
                link.style.display = 'block';
            } else {
                link.style.display = 'none';
            }
        });
    });
}

// Funcionalidad de la barra lateral en dispositivos móviles
const menuToggle = document.getElementById('menu-toggle'); 
const sidebar = document.querySelector('.sidebar'); 
const mainContent = document.querySelector('.main-content'); 
const links = document.querySelectorAll('.sidebar .file'); 

// Alternar la visibilidad de la barra lateral al hacer clic en el botón de menú
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); 
    mainContent.classList.toggle('shifted'); 
});

links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { 
            sidebar.classList.remove('active'); 
        }
    });
});

// Cerrar la barra lateral si se hace clic en cualquier lugar fuera de ella (en dispositivos móviles)
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active'); 
        }
    }
});



// mensaje
window.addEventListener("load", function() {
    const mensaje = document.getElementById("mensaje-corredizo");
    const pantallaCarga = document.getElementById("pantalla-carga");
    const contenido = document.getElementById("contenido");

    const mensajeTexto = "HOLA... :)";
    let i = 0;
    
    // Función para escribir el mensaje
    function escribirMensaje() {
        if (i < mensajeTexto.length) {
            mensaje.textContent += mensajeTexto.charAt(i);
            i++;
            setTimeout(escribirMensaje, 100); 
        } else {
            setTimeout(borrarMensaje, 1000); 
        }
    }

    // Función para borrar el mensaje
    function borrarMensaje() {
        let j = mensaje.textContent.length;

        function eliminarTexto() {
            if (j > 0) {
                mensaje.textContent = mensaje.textContent.slice(0, -1);
                j--;
                setTimeout(eliminarTexto, 50); 
            } else {
                mostrarPagina();
            }
        }

        eliminarTexto();
    }

    // Función para mostrar el contenido principal
    function mostrarPagina() {
        // Ocultar la pantalla de carga
        pantallaCarga.style.opacity = '0';
        setTimeout(() => {
            pantallaCarga.style.display = 'none'; 
        }, 1000); 

        // Mostrar el contenido
        contenido.classList.add("visible");
    }

    escribirMensaje(); 
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');
let direction = 'forward'; // Controlamos la dirección del movimiento

// Función para mover el carrusel
function moveCarrusel() {
    if (direction === 'forward') {
        currentIndex++;
        if (currentIndex === totalSlides - 1) {
            direction = 'backward';  // Cambiar dirección al llegar a la última imagen
        }
    } else {
        currentIndex--;
        if (currentIndex === 0) {
            direction = 'forward';  // Cambiar dirección al llegar a la primera imagen
        }
    }
    
    // Actualizar la posición del carrusel
    slidesContainer.style.transition = 'transform 1s ease-in-out';  // Transición suave
    slidesContainer.style.transform = `translateX(-${(currentIndex * 100) / totalSlides}%)`;
}

// Configurar el intervalo para mover el carrusel cada 5 segundos
setInterval(moveCarrusel, 5000); // 5 segundos entre cada desplazamiento

