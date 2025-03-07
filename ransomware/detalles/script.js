// Datos de los archivos (puedes mover esto a un archivo JSON si lo prefieres)
const archivos = [
    {
        id: 1,
        nombre: "WannaCry",
        imagen: "../img ransomware/001.png",
        descripcion: "Un ransomware que causó un gran impacto global en 2017. Afectó a miles de organizaciones en todo el mundo, incluyendo hospitales y empresas, aprovechando una vulnerabilidad en Windows.",
        rutaDescarga: "https://mega.nz/file/5UpAHYwJ#X4vvi77287A_ZGyUSqXVxDpDU0y0ZgAsTCKXHCcfpp8"
    },
    {
        id: 2,
        nombre: "CryptoLocker",
        imagen: "../img ransomware/002.webp",
        descripcion: " Uno de los ransomware más famosos que apareció en 2013. Cifraba los archivos de las víctimas y exigía un pago en Bitcoin para recuperarlos.",
        rutaDescarga: "https://mega.nz/file/MR5DXJbb#7Wsn7QzchIgRKJHWWzqZ4lXvhfKujSVzzimhjf84r6c"
    },
    {
        id: 3,
        nombre: "Petya/NotPetya",
        imagen: "../img ransomware/003.png",
        descripcion: "Petya es un ransomware que cifraba la tabla de archivos maestros (MFT) del sistema, haciendo inaccesibles los archivos. NotPetya fue una variante más destructiva que se propagó en 2017, causando daños masivos.",
        rutaDescarga: "https://mega.nz/file/oEggCYbQ#d17KTPgqU-quCMcXQNB1v9NNEMviViizART4EbqG3CY"
    },
    {
        id: 4,
        nombre: "Locky",
        imagen: "../img ransomware/004.png",
        descripcion: "ransomware que se distribuyó ampliamente a través de correos electrónicos de phishing. Cifraba los archivos de las víctimas y exigía un rescate.",
        rutaDescarga: "https://mega.nz/file/MVpyEABb#zoFBilC6phDexuYp-wf9c7DfubRJy2FZEdN7wurA42I"
    },
    {
        id: 5,
        nombre: "Cerber",
        imagen: "../img ransomware/005.jpg",
        descripcion: "Un ransomware-as-a-service (RaaS) que se distribuía a través de campañas de correo electrónico malicioso. Era conocido por su capacidad para evadir la detección de antivirus",
        rutaDescarga: "https://mega.nz/file/AQBlxBTD#cwdxW4f72XmxUxZ28eYnNIFr6hCOyYlp4YI3JzUUeX0"
    },
    {
        id: 6,
        nombre: "TeslaCrypt",
        imagen: "../img ransomware/006.webp",
        descripcion: " Un ransomware que se dirigía principalmente a archivos de juegos, cifrándolos y exigiendo un rescate para su liberación.",
        rutaDescarga: "https://mega.nz/file/dFBUTDQL#wxSzkGzSo5-0fnWZDpaM_uIh0A6TVqXqlW1ElUMsXDc"
    },
    {
        id: 7,
        nombre: "Jigsaw",
        imagen: "../img ransomware/007.png",
        descripcion: "Un ransomware que no solo cifraba los archivos, sino que también los eliminaba gradualmente si no se pagaba el rescate.",
        rutaDescarga: "https://mega.nz/file/RVxUnQLA#vY0xfZZ9KfcKMYipFk5sk4dsSA9k-R-E__NeVHT1SkQ"
    },
    {
        id: 8,
        nombre: "Hive",
        imagen: "../img ransomware/008.png",
        descripcion: "Un ransomware más reciente que ha sido utilizado en ataques dirigidos contra organizaciones, incluyendo el sector de la salud..",
        rutaDescarga: "https://mega.nz/file/QNgWVIYT#vXnBTzp_pOx0aVEPy_9EPXsBIU9njDfHziR6dz9MtNE"
    },
    {
        id: 9,
        nombre: "Thanos",
        imagen: "../img ransomware/009.png",
        descripcion: "Un ransomware que se destacó por su capacidad para cifrar archivos y también por su uso de técnicas avanzadas para evadir la detección.",
        rutaDescarga: "https://mega.nz/file/9N5EhCBB#qa-A_II_vh6lEAWetgr3MAmYLWIs0bCzF7uD7emY8O8"
    },
    {
        id: 10,
        nombre: "Mamba",
        imagen: "../img ransomware/010.png",
        descripcion: "Un ransomware que cifraba discos duros completos, incluyendo particiones del sistema, utilizando el cifrado AES.",
        rutaDescarga: "https://mega.nz/file/NMplBIrT#yNxVva4ALEkwW2JLdLizrkSxgk4XtMs02mPbJKgnsgI"
    },
    {
        id: 11,
        nombre: "Satana",
        imagen: "../img ransomware/011.webp",
        descripcion: "Un ransomware que no solo cifraba archivos, sino que también intentaba eliminar las copias de seguridad de las víctimas.",
        rutaDescarga: "https://mega.nz/file/sApg1RSK#iBULM-XDMBpeq2nyZRkTUvJYe7OJF6qoM_r2hrjFFpE"
    },
    {
        id: 12,
        nombre: "Vipasana",
        imagen: "../img ransomware/012.jpg",
        descripcion: "Un ransomware que se ha utilizado en ataques dirigidos contra empresas, cifrando archivos y exigiendo un rescate.",
        rutaDescarga: "https://mega.nz/file/1RI2yTiY#Un8kXDk5x2NYDGb-jV8OH3clPvL7q1RzhaAJWjtOEDM"
    },
    {
        id: 13,
        nombre: "XData",
        imagen: "../img ransomware/013.png",
        descripcion: "Un ransomware que se ha utilizado en campañas de ataques dirigidos, especialmente en Europa del Este.",
        rutaDescarga: "https://mega.nz/file/tdoXhLTQ#OkmEPGSTuPyTH0fjNDwQ9M0_ohZcZZucQraDBLhjCjM"
    },
    {
        id: 14,
        nombre: "RedBoot",
        imagen: "../img ransomware/014.webp",
        descripcion: "Un ransomware que se distribuía a través de campañas de phishing y cifraba los archivos de las víctimas.",
        rutaDescarga: "https://mega.nz/file/8B42jD5K#ThVyIAJ25c34X0j6hwIY_2TuHCAXEze8MyWjyp9qZw8"
    },
    {
        id: 15,
        nombre: "Rex",
        imagen: "../img ransomware/015.png",
        descripcion: "Un ransomware que se ha utilizado en ataques dirigidos contra organizaciones, cifrando archivos y exigiendo un rescate.",
        rutaDescarga: "https://mega.nz/file/BMID1CQI#usUpB51lLw5-qeJ_sVF3UpRALCSrHWu8OGImEA10BeY"
    },
    {
        id: 16,
        nombre: "BadRabbit-ransomware",
        imagen: "../img ransomware/016.png",
        descripcion: "Bad Rabbit es un ransomware que surgió en 2017, y del que se sospecha que es una variante del Petya.",
        rutaDescarga: "https://mega.nz/file/qYJlFLja#7Kg7UfwOzp9fqxWc-cJCVfEkoqY6Lw-9GTfo3RWNh7s"
    }
    // Puedes añadir más archivos aquí
];

// Obtener el parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const idArchivo = urlParams.get('id');

// Buscar el archivo correspondiente en el array de datos
const archivoSeleccionado = archivos.find(archivo => archivo.id == idArchivo);

if (archivoSeleccionado) {
    // Cargar los detalles del archivo en la página
    document.getElementById('titulo-archivo').textContent = archivoSeleccionado.nombre;
    document.getElementById('imagen-archivo').src = archivoSeleccionado.imagen;
    document.getElementById('nombre-archivo').textContent = archivoSeleccionado.nombre;
    document.getElementById('descripcion-archivo').textContent = archivoSeleccionado.descripcion;

    // Configurar el botón de descarga
    document.getElementById('descargarBtn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'flex';
    });

    document.getElementById('aceptarBtn').addEventListener('click', function() {
        window.location.href = archivoSeleccionado.rutaDescarga; // Iniciar la descarga
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('rechazarBtn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
} else {
    // Si no se encuentra el archivo, mostrar un mensaje de error
    document.getElementById('titulo-archivo').textContent = "Archivo no encontrado";
    document.getElementById('detalle-archivo').innerHTML = "<p>El archivo solicitado no existe.</p>";
}