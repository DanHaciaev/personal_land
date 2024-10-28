document.addEventListener("DOMContentLoaded", function() {
    // Выбираем все элементы маркеров и названий городов
    const markers = document.querySelectorAll('.map-markers, .city-name');

    function checkVisibility() {
        const windowHeight = window.innerHeight; // Высота окна
        const windowScrollY = window.scrollY; // Позиция прокрутки
        const windowBottom = windowHeight + windowScrollY; // Низ окна

        markers.forEach(marker => {
            const elementTop = marker.getBoundingClientRect().top + windowScrollY; // Верх элемента
            const elementBottom = elementTop + marker.offsetHeight; // Низ элемента

            // Проверяем, попадает ли элемент в область видимости
            if (elementBottom > windowScrollY && elementTop < windowBottom) {
                // Если элемент видимый и еще не имеет класса "visible"
                if (!marker.classList.contains('visible')) {
                    marker.classList.add('visible'); // Добавляем класс для анимации
                }
            }
        });
    }

    window.addEventListener('scroll', checkVisibility); // Проверяем видимость при прокрутке
    checkVisibility(); // Проверяем видимость сразу при загрузке
});
