document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for the forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Awesome!';
            btn.style.backgroundColor = 'var(--green)';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 3000);
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('nav-open');
        });

        // Close menu when clicking a link
        const navLinks = headerNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('nav-open');
            });
        });
    }
});
