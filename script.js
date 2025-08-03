// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Toggle icon
        if (mobileNav.classList.contains('active')) {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        } else {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(17, 24, 39, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(17, 24, 39, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you within 24 hours.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .stat-card, .hero-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const isNumber = !isNaN(parseInt(finalValue));
                
                if (isNumber) {
                    const numericValue = parseInt(finalValue);
                    animateCounter(target, 0, numericValue, 2000);
                }
                
                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    statValues.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            const suffix = element.textContent.replace(/[0-9]/g, '');
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    // Form validation
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        const isValid = value !== '';
        
        if (field.type === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailRegex.test(value);
            
            if (!isValidEmail) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        if (!isValid) {
            showFieldError(field, 'This field is required');
            return false;
        } else {
            clearFieldError(field);
            return true;
        }
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
        
        let errorMsg = field.parentNode.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#ef4444';
            errorMsg.style.fontSize = '0.875rem';
            errorMsg.style.marginTop = '0.25rem';
            field.parentNode.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        field.style.borderColor = '#d1d5db';
        
        const errorMsg = field.parentNode.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    // Parallax effect for hero background
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.hero-bg');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }

    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth page transitions
function smoothTransition(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.href && !this.href.includes('#')) {
            e.preventDefault();
            this.style.opacity = '0.7';
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                window.location.href = this.href;
            }, 150);
        }
    });
});