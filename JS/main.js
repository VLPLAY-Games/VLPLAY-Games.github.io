import { initializeLanguage } from './translations.js';

// Кнопка Вверх
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= document.body.clientHeight / 4) {
        scrollTopButton.style.opacity = 1;
    }
    else {
        scrollTopButton.style.opacity = 0;
    }
});

window.onscroll = function () { myFunction() };
function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const btn_scroll_top = document.querySelector('.btn_scroll_top');
    if (scrolled === 100) {
        btn_scroll_top.backgroundColor = "green";
    }
    else {
        btn_scroll_top.backgroundColor = "#fa8072";
    }
    btn_scroll_top.width = scrolled + "%";
}

scrollTopButton.addEventListener('click', function () {
    let topInt = setInterval(Timer, 1)
    function Timer() {
        window.scrollBy(0, -20);
        if (window.pageYOffset == 0) clearInterval(topInt);
    }
});

// Для плавного перехода на следующую странциу

document.addEventListener('DOMContentLoaded', function() {
    // Находим элемент <body>
    const body = document.body;
    
    // Изменяем непрозрачность на 1
    body.style.opacity = '1';
});

window.addEventListener('load', function () {
    const spinWrapper = document.querySelector('.spin-wrapper');
    const spinner = document.querySelector('.spinner');
    const spinWrapperparent = spinWrapper.parentNode;
    spinWrapperparent.removeChild(spinWrapper);

    const spinnerparent = spinner.parentNode;
    spinnerparent.removeChild(spinner);
    var pageContainer = document.querySelector('.page-container');
    pageContainer.style.display = 'block';
});


document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
