document.addEventListener("DOMContentLoaded", function() {
    const facts = document.querySelectorAll(".points");
    let delay = 1500; // Начальная задержка

    function checkVisibility() {
        const windowHeight = window.innerHeight; // Высота окна
        const windowScrollY = window.scrollY; // Позиция прокрутки
        const windowBottom = windowHeight + windowScrollY; // Низ окна

        facts.forEach((fact, index) => {
            const elementTop = fact.getBoundingClientRect().top + windowScrollY; // Верх элемента
            const elementBottom = elementTop + fact.offsetHeight; // Низ элемента

            // Проверяем, попадает ли элемент в область видимости
            if (elementBottom > windowScrollY && elementTop < windowBottom) {
                // Если элемент видимый и еще не имеет класса "visible"
                if (!fact.classList.contains('visible')) {
                    setTimeout(() => {
                        fact.classList.add('visible'); // Добавляем класс для анимации
                    }, delay * index); // Увеличиваем задержку для каждого факта
                }
            }
        });
    }

    window.addEventListener('scroll', checkVisibility); // Проверяем видимость при прокрутке
    checkVisibility(); // Проверяем видимость сразу при загрузке
});
