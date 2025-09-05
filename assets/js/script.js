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
    
        // Corazones emergentes en hover/clic/touch
        function crearCorazonPop(x, y) {
            const colores = ['#C9A66B', '#EEC9B7', '#2E1503'];
            const color = colores[Math.floor(Math.random() * colores.length)];
            const corazon = document.createElement('span');
            corazon.className = 'corazon-pop';
            corazon.style.left = (x - 11) + 'px';
            corazon.style.top = (y - 11) + 'px';
            corazon.innerHTML = `<svg viewBox="0 0 32 32" fill="${color}"><path d="M23.6,4.6c-2.1,0-4,1-5.6,2.7C16,7.9,15.9,8,15.8,8.1c-1.6-1.7-3.5-2.7-5.6-2.7C6.1,4.6,4,6.7,4,9.3c0,2.2,1.2,4.2,3.7,6.7c2.2,2.1,5.2,4.4,7.2,6c2-1.6,5-3.9,7.2-6c2.5-2.5,3.7-4.5,3.7-6.7C28,6.7,25.9,4.6,23.6,4.6z"/></svg>`;
            document.body.appendChild(corazon);
            setTimeout(() => corazon.remove(), 1000);
        }
    
        // PC: click y arrastre
        document.addEventListener('click', function(e) {
            crearCorazonPop(e.clientX, e.clientY);
        });
        document.addEventListener('mousemove', function(e) {
            if (e.buttons === 1) {
                crearCorazonPop(e.clientX, e.clientY);
            }
        });
    
        // Móvil: touch
        document.addEventListener('touchstart', function(e) {
            for (let t of e.touches) {
                crearCorazonPop(t.clientX, t.clientY);
            }
        });
        document.addEventListener('touchmove', function(e) {
            for (let t of e.touches) {
                crearCorazonPop(t.clientX, t.clientY);
            }
        });
});