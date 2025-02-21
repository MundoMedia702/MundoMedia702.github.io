// Función para obtener la IP pública del usuario
async function obtenerIPPublica() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('ipPublica').textContent = data.ip;
    } catch (error) {
        console.error('Error al obtener la IP pública:', error);
    }
}

// Función para obtener el sistema operativo del usuario
function obtenerSistemaOperativo() {
    const userAgent = navigator.userAgent;
    let os = "Desconocido";
    if (userAgent.indexOf("Win") != -1) os = "Windows";
    if (userAgent.indexOf("Mac") != -1) os = "MacOS";
    if (userAgent.indexOf("Linux") != -1) os = "Linux";
    if (userAgent.indexOf("Android") != -1) os = "Android";
    if (userAgent.indexOf("iOS") != -1) os = "iOS";
    document.getElementById('sistemaOperativo').textContent = os;
}

// Función para obtener el navegador y su versión
function obtenerNavegador() {
    const userAgent = navigator.userAgent;
    let navegador = "Desconocido";

    if (userAgent.indexOf("Firefox") > -1) {
        navegador = "Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
        navegador = "Samsung Browser";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        navegador = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
        navegador = "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        navegador = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        navegador = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        navegador = "Safari";
    }

    document.getElementById('navegador').textContent = navegador;
}

// Función para obtener la resolución de pantalla
function obtenerResolucionPantalla() {
    const ancho = window.screen.width;
    const alto = window.screen.height;
    document.getElementById('resolucionPantalla').textContent = `${ancho}x${alto}`;
}

// Función para obtener el idioma del navegador
function obtenerIdiomaNavegador() {
    const idioma = navigator.language || navigator.userLanguage;
    document.getElementById('idiomaNavegador').textContent = idioma;
}

// Función para verificar si las cookies están habilitadas
function verificarCookies() {
    const cookiesHabilitadas = navigator.cookieEnabled ? "Sí" : "No";
    document.getElementById('cookiesHabilitadas').textContent = cookiesHabilitadas;
}

// Función para mostrar el User Agent completo
function mostrarUserAgent() {
    document.getElementById('userAgent').textContent = navigator.userAgent;
}

// Función para geolocalizar una IP
async function geolocalizarIP() {
    const ip = document.getElementById('ipInput').value;
    if (!ip) return alert('Por favor, introduce una IP válida.');

    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();

        if (data.status === 'fail') {
            alert('Error al geolocalizar la IP: ' + data.message);
            return;
        }

        // Mostrar la información de geolocalización
        document.getElementById('pais').textContent = data.country;
        document.getElementById('ciudad').textContent = data.city;
        document.getElementById('region').textContent = data.regionName;
        document.getElementById('latitud').textContent = data.lat;
        document.getElementById('longitud').textContent = data.lon;

        // Generar enlace a Google Maps
        const enlaceMaps = `https://www.google.com/maps?q=${data.lat},${data.lon}`;
        document.getElementById('enlaceMaps').href = enlaceMaps;

    } catch (error) {
        console.error('Error al geolocalizar la IP:', error);
    }
}

// Llamar a las funciones al cargar la página
window.onload = () => {
    obtenerIPPublica();
    obtenerSistemaOperativo();
    obtenerNavegador();
    obtenerResolucionPantalla();
    obtenerIdiomaNavegador();
    verificarCookies();
    mostrarUserAgent();
};