document.addEventListener('DOMContentLoaded', () => {
    
    // --- Controle do Menu Mobile ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- Navegação Suave e Fechamento do Menu ---
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fecha o menu mobile ao clicar em um link (se estiver aberto)
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }

            // Animação de descida (Smooth Scroll)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const headerOffset = 70; // Altura do cabeçalho fixo
            
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // --- Mudança de estilo no Header ao rolar a página ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});