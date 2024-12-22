// Función para copiar la contraseña al portapapeles
function copyPassword(password) {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Contraseña copiada al portapapeles!");
}
