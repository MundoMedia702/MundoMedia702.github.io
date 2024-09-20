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

// Funciones del menú lateral
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar .file');

menuToggle.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.display = 'none'; // Cerrar el menú
    });
});

// Funcionalidad para copiar la dirección de la wallet
document.getElementById('copy-button').addEventListener('click', function() {
    const walletAddress = '1PpYBzQABU4woy2ShuPAnm6smC9REQxfHG';
    navigator.clipboard.writeText(walletAddress).then(() => {
        alert('Dirección copiada al portapapeles!');
    }, (err) => {
        console.error('Error al copiar: ', err);
    });
});
