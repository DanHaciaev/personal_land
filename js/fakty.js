document.addEventListener("DOMContentLoaded", function() {
    const facts = document.querySelectorAll(".fakty_1, .fakty_2, .fakty_3");
    
    // Проверяем, есть ли найденные элементы
    if (facts.length === 0) {
        return; // Выходим из функции, если элементов нет
    }

    let delay = 200; // Начальная задержка

    function checkVisibility() {
        const windowHeight = window.innerHeight; // Высота окна
        const windowScrollY = window.scrollY; // Позиция прокрутки
        const windowBottom = windowHeight + windowScrollY; // Низ окна

        facts.forEach((fact, index) => {
            const elementTop = fact.getBoundingClientRect().top + windowScrollY; // Верх элемента
            const elementBottom = elementTop + fact.offsetHeight; // Низ элемента

            // Проверяем, попадает ли элемент в область видимости
            if (elementBottom > windowScrollY && elementTop < windowBottom) {
                // Проверяем, добавлен ли класс "visible"
                if (!fact.classList.contains('visible')) {
                    setTimeout(() => {
                        fact.classList.add('visible'); // Добавляем класс для анимации
                    }, delay);
                    delay += 1000; // Увеличиваем задержку для следующего элемента
                }
            }
        });

        // Если второй элемент видимый, добавляем класс видимости третьему с задержкой
        if (facts.length > 2 && facts[1].classList.contains('visible') && !facts[2].classList.contains('visible')) {
            setTimeout(() => {
                facts[2].classList.add('visible'); // Делаем третий элемент видимым с задержкой 500 мс
            }, 1000);
        }
    }

    window.addEventListener('scroll', checkVisibility); // Проверяем видимость при прокрутке
    checkVisibility(); // Проверяем видимость сразу при загрузке
});
