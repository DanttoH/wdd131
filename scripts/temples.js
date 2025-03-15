document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        // Alternar la clase 'open' para mostrar u ocultar el menú
        nav.classList.toggle('open');

        // Alternar el icono del menú (☰ a ✖)
        menuButton.textContent = nav.classList.contains('open') ? '❎' : '☰';
    });
});


const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("theyear");
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Mostrar la última fecha de modificación
const lastModifiedElement = document.getElementById("lastu");
if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Updated: " + document.lastModified;
}
