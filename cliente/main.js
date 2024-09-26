const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Cierra el menú al redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // Cambia 768 por el ancho que determines para pantallas medianas
        mobileMenu.classList.add('hidden'); // Asegúrate de que el menú esté oculto
    }
});

 // También ocultar el menú al hacer clic en un enlace del menú móvil
 mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});