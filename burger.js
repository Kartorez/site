document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.header_burger_menu');
    const header = document.querySelector('.header');

    burgerMenu.addEventListener('click', function () {
        header.classList.toggle('active');
        burgerMenu.classList.toggle('active'); // Додано цей рядок
    });

    // Додайте наступний код для закриття меню, коли клікаєте за межами меню
    document.addEventListener('click', function (event) {
        const target = event.target;

        if (!target.closest('.header_container') && !target.closest('.header_burger_menu')) {
            header.classList.remove('active');
            burgerMenu.classList.remove('active'); // Додано цей рядок
        }
    });
});