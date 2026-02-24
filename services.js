// Importando o Swiper como um módulo direto da CDN
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs';

const swiperContainers = document.querySelectorAll('.services-swiper');

swiperContainers.forEach((container) => {
    new Swiper(container, {
        loop: true,
        pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: container.querySelector('.swiper-button-next'),
            prevEl: container.querySelector('.swiper-button-prev'),
        },
    });
});