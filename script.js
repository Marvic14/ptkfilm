const menuToggle = document.getElementById('menu-toggle');
const menuGaveta = document.getElementById('menu-mobile');


/* Efeito View Transition para mudança de tela */
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Verifica se é um link interno
        if (link.hostname === window.location.hostname) {
            e.preventDefault();
            const target = link.href;

            // Inicia a transição de visualização
            if (!document.startViewTransition) {
                window.location.href = target;
                return;
            }

            document.startViewTransition(async () => {
                // Aqui você pode carregar a página ou simplesmente navegar
                window.location.href = target;
            });
        }
    });
});

/* CONTROLA O MENU ASIDE */
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