// Inicializar EmailJS
emailjs.init("eVNRrpZjjXaa3uuvK"); 

// Función para mostrar el popup de nombre no encontrado
function showMissingPopup(username) {
    document.getElementById('missingName').value = username;
    document.getElementById('missingPopup').style.display = 'block';
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById('missingPopup').style.display = 'none';
}

// Función para mostrar notificaciones
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    // Obtener los datos del formulario
    const userName = document.getElementById('missingName').value;
    const serviceID = 'service_ppejbdn'; 
    const templateID = 'template_6qfgk5g'; 

    // Parámetros para el correo
    const templateParams = {
        user_name: userName,
        message: `Hace falta este nombre en la base de datos: ${userName}`,
    };

    // Enviar el correo usando EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            showNotification("Mensaje enviado exitosamente. ¡Gracias por tu aporte!");
            closePopup(); // Cerrar el popup después de enviar el mensaje
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            showNotification("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.", true);
        });
});

// Lógica de búsqueda mejorada
document.getElementById('searchButton').addEventListener('click', async () => {
    const username = document.getElementById('usernameInput').value.trim().toLowerCase(); // Convierte a minúsculas
    if (!username) {
        alert('Por favor, introduce un nombre de usuario.');
        return;
    }

    // Mostrar el mensaje de carga
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').innerHTML = '';

    try {
        const response = await fetch('social_media_results.json');
        const data = await response.json();

        // Filtra los resultados sin distinguir mayúsculas y permitiendo coincidencias parciales
        const userResults = data.filter(item =>
            item.links.some(link => link.title.toLowerCase().includes(username))
        );

        const resultsContainer = document.getElementById('results');
        if (userResults.length > 0) {
            userResults.forEach(platform => {
                const platformDiv = document.createElement('div');
                platformDiv.innerHTML = `<h2>${platform.platform}</h2>`;
                platform.links.forEach(link => {
                    platformDiv.innerHTML += `<a href="${link.url}" target="_blank">${link.title}</a>`;
                });
                resultsContainer.appendChild(platformDiv);
            });
        } else {
            showMissingPopup(username); // Mostrar popup si no se encuentran resultados
        }
    } catch (error) {
        console.error('Error al cargar los datos:', error);
        document.getElementById('results').innerHTML = '<p>Ocurrió un error al buscar.</p>';
    } finally {
        // Ocultar el mensaje de carga
        document.getElementById('loading').style.display = 'none';
    }
});
