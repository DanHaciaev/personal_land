document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".bonen");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && // Если верх элемента виден
            rect.bottom > 0 // Если низ элемента виден
        );
    }

    function animateElements() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add("move-in");
            } 
        });
    }

    window.addEventListener("scroll", animateElements);
    animateElements(); // Проверка при загрузке страницы
});
