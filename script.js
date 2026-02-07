const menuToggle = document.getElementById('menu-toggle');
const menuGaveta = document.getElementById('menu-mobile');

menuToggle.onclick = function() {
    // 1. Abre/Fecha a gaveta
    menuGaveta.classList.toggle('active');

    // 2. Troca o ícone de 'list' para 'x-lg' e vice-versa
    if (menuGaveta.classList.contains('active')) {
        menuToggle.classList.replace('bi-list', 'bi-x-lg');
    } else {
        menuToggle.classList.replace('bi-x-lg', 'bi-list');
    }
};

// Opcional: Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-gaveta a').forEach(link => {
    link.onclick = () => {
        menuGaveta.classList.remove('active');
        menuToggle.classList.replace('bi-x-lg', 'bi-list');
    };
});

//JAVASCRIPT DO SWIPER
const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


