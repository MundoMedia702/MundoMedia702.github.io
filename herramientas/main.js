document.addEventListener("DOMContentLoaded", function() {
    const toolCards = document.querySelectorAll('.tool-card');

    toolCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        toolCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Obtén el modal
const modal = document.getElementById("imageModal");

// Obtén la imagen dentro del modal
const modalImg = document.getElementById("modalImage");

// Obtén el botón para cerrar el modal
const closeBtn = document.querySelector(".close");

// Obtén el elemento para la descripción (opcional)
const modalCaption = document.getElementById("modalCaption");

// Función para abrir el modal con la imagen seleccionada
function openModal(imageSrc, captionText = "") {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalCaption.textContent = captionText; // Muestra la descripción (opcional)
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Asigna el evento de clic a todas las imágenes de las tarjetas
document.querySelectorAll(".tool-image").forEach(image => {
    image.addEventListener("click", () => {
        const caption = image.getAttribute("alt") || ""; // Usa el atributo "alt" como descripción
        openModal(image.src, caption);
    });
});

// Cierra el modal al hacer clic en la "X"
closeBtn.addEventListener("click", closeModal);

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});