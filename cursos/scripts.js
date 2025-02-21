document.addEventListener("DOMContentLoaded", function () {
    // =================== POPUP ===================
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <div style="background:#111;border:2px solid #0ff;padding:20px;border-radius:10px;max-width:90%;text-align:center;box-shadow:0 0 15px #0ff;color:#0ff;">
            <h2 style="margin-bottom:10px;text-shadow:0 0 10px #0ff;">🚀 Bienvenido a CursoXpress 🚀</h2>
            <p id="popup-text" style="font-size:16px;line-height:1.5;">
                Aquí encontrarás contenido gratuito sobre programación, hacking, Excel, Photoshop, creación de videojuegos y más.
            </p>
            <button id="hide-popup" style="margin:10px;padding:8px 15px;border:none;background:#0ff;color:#111;font-weight:bold;border-radius:5px;cursor:pointer;box-shadow:0 0 10px #0ff;">No mostrar más</button>
            <button id="close-popup" style="margin:10px;padding:8px 15px;border:none;background:#0ff;color:#111;font-weight:bold;border-radius:5px;cursor:pointer;box-shadow:0 0 10px #0ff;">Cerrar</button><br>
            <button id="lang-en" style="margin:5px;padding:6px 12px;border:none;background:#0ff;color:#111;font-weight:bold;border-radius:5px;cursor:pointer;box-shadow:0 0 10px #0ff;">English</button>
            <button id="lang-es" style="margin:5px;padding:6px 12px;border:none;background:#0ff;color:#111;font-weight:bold;border-radius:5px;cursor:pointer;box-shadow:0 0 10px #0ff;">Español</button>
        </div>
    `;
    popup.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:1000;font-family:Arial, sans-serif;";
    
    if (!localStorage.getItem("hidePopup")) {
        document.body.appendChild(popup);
    }

    document.getElementById("hide-popup")?.addEventListener("click", function () {
        localStorage.setItem("hidePopup", "true");
        popup.remove();
    });

    document.getElementById("close-popup")?.addEventListener("click", function () {
        popup.remove();
    });

    document.getElementById("lang-en")?.addEventListener("click", function () {
        document.getElementById("popup-text").innerText =
            "Welcome to the MundoMedia courses section. Here you will find free content on programming, hacking, Excel, Photoshop, game development, and more.";
    });

    document.getElementById("lang-es")?.addEventListener("click", function () {
        document.getElementById("popup-text").innerText =
            "Aquí encontrarás contenido gratuito sobre programación, hacking, Excel, Photoshop, creación de videojuegos y más.";
    });

    // =================== SUAVIZAR SCROLL EN MENÚ ===================
    document.querySelectorAll(".menu a").forEach((link) => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Solo interceptar enlaces que comienzan con #
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // =================== MENÚ RESPONSIVO ===================
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Cerrar menú en móviles al hacer clic en un enlace
    document.querySelectorAll(".menu a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }
        });
    });
});

// =================== Barra de busqueda ===================
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const courseLinks = document.querySelectorAll(".file"); // Seleccionar todos los cursos

    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();

        courseLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(searchText)) {
                link.style.display = "block"; // Mostrar si coincide
            } else {
                link.style.display = "none"; // Ocultar si no coincide
            }
        });
    });
});
