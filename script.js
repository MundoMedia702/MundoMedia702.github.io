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

// funcion sugerir pagina 
function showBookmarkSuggestion() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const messageElement = document.getElementById('bookmark-message');
    
    if (isMobile) {
      messageElement.innerText = 'Añade esta página a tu pantalla de inicio para acceder rápidamente: \n\n En Android, usa el menú del navegador y selecciona "Añadir a pantalla de inicio". \n\n En iOS, pulsa en el ícono de compartir y selecciona "Añadir a pantalla de inicio".';
    } else {
      const isChrome = /chrome/i.test(navigator.userAgent);
      const isFirefox = /firefox/i.test(navigator.userAgent);
      
      if (isChrome) {
        messageElement.innerText = 'Usa Ctrl+D (Cmd+D en Mac) para guardar esta página en tus favoritos.';
      } else if (isFirefox) {
        messageElement.innerText = 'Pulsa Ctrl+D para añadir esta página a tus marcadores.';
      } else {
        messageElement.innerText = 'Guarda esta página en tus favoritos desde el menú del navegador.';
      }
    }
    
    document.getElementById('bookmark-suggestion').style.display = 'flex';
  }

  function hideBookmarkSuggestion(disablePermanently) {
    const suggestion = document.getElementById('bookmark-suggestion');
    suggestion.style.display = 'none';
    if (disablePermanently) {
      localStorage.setItem('bookmarkSuggestionDismissed', 'true');
    }
  }

  // Mostrar el mensaje solo si no se ha deshabilitado permanentemente
  if (!localStorage.getItem('bookmarkSuggestionDismissed')) {
    showBookmarkSuggestion();
  }

  // Funciones para mostrar/ocultar los pop-ups
  function showProfileInfo(profileId) {
      const modal = document.getElementById(`${profileId}-modal`);
      if (modal) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden'; // Evita scroll del fondo
      }
  }

  function closeModal(profileId) {
      const modal = document.getElementById(`${profileId}-modal`);
      if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto'; // Restaura scroll
      }
  }

  // Cerrar al hacer clic fuera del contenido
  window.onclick = function(event) {
      const modals = document.querySelectorAll('.profile-modal');
      modals.forEach(modal => {
          if (event.target == modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      });
  }

  // Cerrar con tecla ESC
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          const modals = document.querySelectorAll('.profile-modal');
          modals.forEach(modal => {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          });
      }
  });