document.addEventListener('DOMContentLoaded', function() {
            const target = document.querySelector('.stage');
            console.log('Target element:', target);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('Element is intersecting');
                        target.classList.add('visible');
                        observer.unobserve(target);
                    }
                });
            });

            observer.observe(target);
        });
