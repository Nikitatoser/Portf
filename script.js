
    

    document.body.addEventListener('mousemove', function(e) {
        const x = e.pageX - window.innerWidth / 2;
        const y = e.pageY - window.innerHeight / 2;

        const glowEffect = `radial-gradient(circle at ${e.pageX}px ${e.pageY}px, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0))`;
        document.body.style.backgroundImage = glowEffect;
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const techSection = document.querySelector('.tech .row-tech');
        const techBoxes = Array.from(techSection.children); // Отримуємо всі tech-box
    
        // Копіюємо елементи для створення безкінечної прокрутки
        techBoxes.forEach(box => {
            const clone = box.cloneNode(true); // Клонуємо блок
            techSection.appendChild(clone); // Додаємо до контейнера
        });
    
        // Наблюдатель, щоб слідкувати за видимістю секції "Technologies"
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    techSection.style.animationPlayState = 'running'; // Запускаємо анімацію
                } else {
                    techSection.style.animationPlayState = 'running'; // Залишаємо анімацію активною
                }
            });
        }, { threshold: 0.5 }); // Запуск при 50% видимості секції
    
        observer.observe(techSection);
    });
