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


/* FUNÇÃO ZAPI ZAPI */

function sendZap(mensagem) {
    const telefone = "5521995950592"; // Seu número com DDD
    // Monta a URL convertendo a mensagem para o formato de link
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    // Abre em uma nova aba
    window.open(url, '_blank');
}


/* FUNÇÃO DE REDIRECIONAMENTO */

function redirect() {
    window.location.href = "./services.html";
}