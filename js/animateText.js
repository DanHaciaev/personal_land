document.addEventListener("DOMContentLoaded", function() {
    const textFacts = document.querySelectorAll(".animate_text, .animate-text");
    const firstImage = document.querySelector('.left-part img:first-of-type');
    const initialDelay = 1000; // Задержка для первого элемента
    const subsequentDelay = 300; // Задержка для последующих элементов

    function checkVisibility() {
        const windowHeight = window.innerHeight; // Высота окна
        const windowScrollY = window.scrollY; // Позиция прокрутки
        const windowBottom = windowHeight + windowScrollY; // Низ окна

        // Проверяем видимость текстов
        textFacts.forEach((fact, index) => {
            const elementTop = fact.getBoundingClientRect().top + windowScrollY; // Верх элемента
            const elementBottom = elementTop + fact.offsetHeight; // Низ элемента

            // Проверяем, попадает ли элемент в область видимости
            if (elementBottom > windowScrollY && elementTop < windowBottom) {
                // Если элемент видимый и еще не имеет класса "visible"
                if (!fact.classList.contains('visible')) {
                    const delay = (index === 0) ? initialDelay : subsequentDelay; // Устанавливаем задержку
                    setTimeout(() => {
                        fact.classList.add('visible'); // Добавляем класс для анимации
                    }, delay * index); // Увеличиваем задержку для каждого факта
                }
            }
        });

        // Проверяем видимость для первой картинки
        if (firstImage) {
            const imageTop = firstImage.getBoundingClientRect().top + windowScrollY; // Верх изображения
            if (imageTop < windowBottom && !firstImage.classList.contains('rotate')) {
                firstImage.classList.add('rotate'); // Добавляем класс для анимации вращения
            }
        }
    }

    window.addEventListener('scroll', checkVisibility); // Проверяем видимость при прокрутке
    checkVisibility(); // Проверяем видимость сразу при загрузке
});
