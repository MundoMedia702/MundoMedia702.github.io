// Mostrar la sección correspondiente
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Copiar al portapapeles
function copyToClipboard(id) {
  const el = document.getElementById(id);
  const range = document.createRange();
  range.selectNode(el);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  alert('¡Copiado!');
}

// Menú desplegable en móviles
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
