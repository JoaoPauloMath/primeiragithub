// Função para imprimir a página
function printPage() {
    window.print();
}

// Função para rolar suavemente até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Mensagem educativa no console
    console.log("📖 Página educativa: Direitos e Deveres dos Estudantes. Compartilhe conhecimento!");
    
    // Botão de impressão
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', printPage);
    }
    
    // Link de impressão no rodapé
    const printFooterLink = document.getElementById('printFooterLink');
    if (printFooterLink) {
        printFooterLink.addEventListener('click', function(e) {
            e.preventDefault();
            printPage();
        });
    }
    
    // Link "Voltar ao topo"
    const backToTopLink = document.getElementById('backToTopLink');
    if (backToTopLink) {
        backToTopLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }
    
    // Adiciona efeito de clique suave nos cards (apenas para feedback visual)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Evita conflito se clicar em links ou botões dentro do card
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            // Pequeno feedback visual opcional (apenas para demonstrar interação)
            card.style.transform = 'translateY(-4px)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
    
    // Adiciona animação suave ao carregar para os elementos principais
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hero.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Anima os cards com pequeno delay
    const cardsToAnimate = document.querySelectorAll('.card');
    cardsToAnimate.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Adiciona tooltips interativos para os badges (opcional)
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});