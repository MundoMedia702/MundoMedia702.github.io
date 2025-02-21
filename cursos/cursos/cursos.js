document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
        const curso = urlParams.get("curso");

        if (database[curso]) {
            const data = database[curso];
            
            document.getElementById("titulo").textContent = data.titulo;
            document.getElementById("fecha_creacion").textContent += data.fecha_creacion;
            document.getElementById("ultima_modificacion").textContent += data.ultima_modificacion;
            document.getElementById("tamano").textContent += data.tamano;
            document.getElementById("contenido_adicional").textContent = data.contenido_adicional;
            document.getElementById("enlace_descarga").href = data.enlace_descarga;
        }

        const iconElement = document.getElementById("fileIcon");
        let isFolder = true;

        setInterval(() => {
            isFolder = !isFolder;
            iconElement.style.transform = "scale(1.2)";
            setTimeout(() => {
                iconElement.textContent = isFolder ? "📁" : "🗜️";
                iconElement.style.transform = "scale(1)";
            }, 300);
        }, 5000);
    });