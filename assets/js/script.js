document.addEventListener("DOMContentLoaded", function() {
    // Contador de días juntos
    const inicio = new Date("2025-08-07");
    const hoy = new Date();
    const dias = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
    const diasJuntos = document.getElementById("dias-juntos");
    if (diasJuntos) {
        diasJuntos.textContent = `¡Llevamos ${dias} días juntos y contando!`;
    }

    // Carrusel de fotos
    let slideIndex = 1;

    // Generar puntos automáticamente
    const slides = document.getElementsByClassName("carousel-slide");
    const dotsContainer = document.querySelector(".dots-container");
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("span");
            dot.className = "dot";
            dot.onclick = function() { currentSlide(i + 1); };
            dotsContainer.appendChild(dot);
        }
    }

    showSlides(slideIndex);

    // Función para cambiar de foto con los botones de navegación
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    // Función para ir a una foto específica al hacer clic en un punto
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    // Función principal que muestra las fotos y gestiona la lógica
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("carousel-slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
        }
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
        }
    }

    // Sorpresa: mostrar y ocultar la carta flotante
    const btnSorpresa = document.getElementById("btn-sorpresa");
    const cartaSorpresa = document.getElementById("carta-sorpresa");
    const cerrarCarta = document.getElementById("cerrar-carta");

    if (btnSorpresa && cartaSorpresa && cerrarCarta) {
        btnSorpresa.addEventListener("click", function() {
            cartaSorpresa.classList.remove("oculto");
        });
        cerrarCarta.addEventListener("click", function() {
            cartaSorpresa.classList.add("oculto");
        });
    }
});