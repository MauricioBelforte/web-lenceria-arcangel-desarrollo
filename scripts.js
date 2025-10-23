document.addEventListener('DOMContentLoaded', function () {
    // Lógica para el carrusel
    const carruselImagenes = document.querySelectorAll('.carrusel-imagen');
    const botonAnterior = document.getElementById('boton-anterior');
    const botonSiguiente = document.getElementById('boton-siguiente');
    let indiceActual = 0;

    function mostrarImagen(indice) {
        carruselImagenes.forEach(img => {
            img.classList.remove('activo');
        });
        carruselImagenes[indice].classList.add('activo');
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % carruselImagenes.length;
        mostrarImagen(indiceActual);
    }

    function imagenAnterior() {
        indiceActual = (indiceActual - 1 + carruselImagenes.length) % carruselImagenes.length;
        mostrarImagen(indiceActual);
    }

    botonSiguiente.addEventListener('click', siguienteImagen);
    botonAnterior.addEventListener('click', imagenAnterior);

    // Opcional: Auto-play del carrusel
    setInterval(siguienteImagen, 5000); // Cambia de imagen cada 5 segundos

    // Lógica para el menú móvil
    const botonMenuMovil = document.getElementById('boton-menu-movil');
    const menuMovil = document.getElementById('menu-movil');

    botonMenuMovil.addEventListener('click', () => {
        // Alternar la visibilidad del menú móvil
        if (menuMovil.style.display === 'block') {
            menuMovil.style.display = 'none';
        } else {
            menuMovil.style.display = 'block';
        }
    });

    // Cerrar el menú si se hace clic en un enlace
    document.querySelectorAll('#menu-movil a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuMovil.style.display = 'none';
        });
    });

    // Código para el scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(ancla => {
        ancla.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
