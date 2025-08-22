// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll('.carrousel-item');
    let currentItem = 0;

    function showNextItem() {
        // Oculta el item actual
        carouselItems[currentItem].style.opacity = '0'; // Cambiamos de 'display: none' a 'opacity: 0' para la transición

        // Pasa al siguiente item
        currentItem = (currentItem + 1) % carouselItems.length;

        // Muestra el nuevo item con un poco de retraso para que se vea el efecto de transición
        setTimeout(() => {
            carouselItems[currentItem].style.opacity = '1';
        }, 50);
    }

    // Oculta todos los items excepto el primero
    carouselItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.opacity = '0';
        } else {
            item.style.opacity = '1';
        }
    });

    // Inicia el carrusel
    setInterval(showNextItem, 3000); // Cambia de foto cada 3 segundos (3000 milisegundos)
});