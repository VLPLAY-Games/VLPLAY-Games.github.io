
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
    if (scrolled === 100) {
        document.getElementById("btn_scroll_top").style.backgroundColor = "green";
    }
    else {
        document.getElementById("btn_scroll_top").style.backgroundColor = "#fa8072";
    }
    document.getElementById("btn_scroll_top").style.width = scrolled + "%";
}

scrollTopButton.addEventListener('click', function () {
    let topInt = setInterval(Timer, 1)
    function Timer() {
        window.scrollBy(0, -20);
        if (window.pageYOffset == 0) clearInterval(topInt);
    }
});


// Для страницы мини новостей на главном экране

const newsContainer = document.querySelector('.news');

// Загружаем JSON файл с данными о новостях
fetch('../JSON/news.json')
    .then(response => response.json())
    .then(data => {
        // Отобразим только первые 4 новости
        const firstFourNews = data.news.slice(0, 4);

        // Перебираем каждую новость и создаем соответствующий HTML-элемент
        firstFourNews.forEach(newsItem => {

            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            const background_news = document.createElement('div');
            background_news.classList.add('background-blur-news');
            // Получаем идентификатор новости (id)
            const newsId = newsItem.id_name;

            // Создаем элемент для отображения логотипа в зависимости от идентификатора новости
            const logoImg = document.createElement('img');
            logoImg.width = 100;
            logoImg.height = 100;
            switch (newsId) {
                case "1":
                    logoImg.src = '../img/Qlake/Qlake_Logo.png';
                    logoImg.alt = 'Логотип 1';
                    background_news.classList.add('background-blur-qlake');
                    background_news.classList.add('background-more-black');
                    break;
                case "2":
                    logoImg.src = '../img/SD/SD Logo.jpg';
                    logoImg.alt = 'Логотип 2';
                    background_news.classList.add('background-blur-sd');
                    background_news.classList.add('background-more-black');
                    break;
                case "3":
                    logoImg.src = '../img/XenoClock/XC Logo.jpg';
                    logoImg.alt = 'Логотип 3';
                    background_news.classList.add('background-blur-xc');
                    background_news.classList.add('background-more-black');
                    break;
                case "4":
                    logoImg.src = '../img/Bot/Bot Logo.jpg';
                    logoImg.alt = 'Логотип 4';
                    background_news.classList.add('background-blur-bot');
                    background_news.classList.add('background-more-black');
                    break;
                case "5":
                    logoImg.src = '../img/header/LOGO VL_PLAY Games.png';
                    logoImg.alt = 'VL_PLAY Games Logo';
                    background_news.classList.add('background-blur-site');
                    background_news.classList.add('background-more-black');
                    break;
                default:
                    logoImg.src = ''; // Если нет соответствия, можно оставить пустым
                    logoImg.alt = '';
            }

            // Создаем элементы для отображения данных о новости
            const title = document.createElement('h4');
            title.textContent = newsItem.title;

            const description = document.createElement('p');
            description.textContent = newsItem.description_short;

            const continueLink = document.createElement('a');
            continueLink.classList.add('btn_continue');

            const newsNum = newsItem.number;

            continueLink.href = "HTML/news/" + newsId + "_x/" + newsId + "_" + newsNum + ".html";
            continueLink.textContent = 'Подробнее';

            // Добавляем элементы на страницу
            articleDiv.appendChild(background_news);
            articleDiv.appendChild(logoImg); // Добавляем логотип
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(continueLink);

            // Добавляем созданный элемент в контейнер новостей
            newsContainer.appendChild(articleDiv);
        });
    })


// Для страницы Новостей

// Загрузка данных из JSON-файла
fetch('../../JSON/news.json')
    .then(response => response.json())
    .then(data => {
        // Присваиваем данные переменной data
        const newsData = data.news;
        var countArrayInJson = 0;
        for(var key in newsData) {
            countArrayInJson++;
        }
        var countOfPages = Math.ceil(countArrayInJson/10);

        // Определите, сколько новостей отображать на одной странице
        const newsPerPage = 10;
        let currentPage = 1;

        // Функция для отображения новостей на текущей странице
        function displayNewsOnPage(page) {
            const startIndex = (page - 1) * newsPerPage;
            const endIndex = startIndex + newsPerPage;
            const newsOnPage = newsData.slice(startIndex, endIndex);

            const newsContainer = document.querySelector('.news-news');
            newsContainer.innerHTML = ''; // Очищаем контейнер новостей

            let currentNewsRow = null; // Текущая строка для новостей

            newsOnPage.forEach((newsItem, index) => {
                if (index % 2 === 0) {
                    // Создаем новую строку для новостей, начиная с каждой второй новости
                    currentNewsRow = document.createElement('div');
                    currentNewsRow.classList.add('news-row');
                }
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article-news');

                const background_news = document.createElement('div');
                background_news.classList.add('background-blur-news');

                // Получаем идентификатор новости (id)
                const newsId = newsItem.id_name;

                // Создаем элемент для отображения логотипа в зависимости от идентификатора новости
                const logoImg = document.createElement('img');
                logoImg.width = 100;
                logoImg.height = 100;
                switch (newsId) {
                   case "1":
                        logoImg.src = '../../img/Qlake/Qlake_Logo.png';
                        logoImg.alt = 'Логотип 1';
                        background_news.classList.add('background-blur-qlake');
                        background_news.classList.add('background-more-black');
                        break;
                    case "2":
                        logoImg.src = '../../img/SD/SD Logo.jpg';
                        logoImg.alt = 'Логотип 2';
                        background_news.classList.add('background-blur-sd');
                        background_news.classList.add('background-more-black');
                        break;
                    case "3":
                        logoImg.src = '../../img/XenoClock/XC Logo.jpg';
                        logoImg.alt = 'Логотип 3';
                        background_news.classList.add('background-blur-xc');
                        background_news.classList.add('background-more-black');
                        break;
                    case "4":
                        logoImg.src = '../../img/Bot/Bot Logo.jpg';
                        logoImg.alt = 'Логотип 4';
                        background_news.classList.add('background-blur-bot');
                        background_news.classList.add('background-more-black');
                        break;
                    case "5":
                        logoImg.src = '../../img/header/LOGO VL_PLAY Games.png';
                        logoImg.alt = 'VL_PLAY Games Logo';
                        background_news.classList.add('background-blur-site');
                        background_news.classList.add('background-more-black');
                        break;
                    default:
                        logoImg.src = ''; // Если нет соответствия, можно оставить пустым
                        logoImg.alt = '';
                }

                // Создаем элементы для отображения данных о новости
                const title = document.createElement('h4');
                title.textContent = newsItem.title;

                const description = document.createElement('p');
                description.textContent = newsItem.description_short;

                const continueLink = document.createElement('a');
                continueLink.classList.add('btn_continue');
                const newsNum = newsItem.number;

                continueLink.href = newsId + "_x/" + newsId + "_" + newsNum + ".html";
                continueLink.textContent = 'Подробнее';

                // Добавляем элементы на страницу
                articleDiv.appendChild(background_news);
                articleDiv.appendChild(logoImg); // Добавляем логотип
                articleDiv.appendChild(title);
                articleDiv.appendChild(description);
                articleDiv.appendChild(continueLink);

                // Добавляем созданный элемент в контейнер новостей
                currentNewsRow.appendChild(articleDiv);
                newsContainer.appendChild(currentNewsRow);
            });
        }

        // Функция для обновления отображаемой страницы при нажатии кнопок пагинации
        function updatePage() {
            displayNewsOnPage(currentPage);

            // Отключите/включите кнопки "Предыдущая" и "Следующая" в зависимости от текущей страницы
            const prevPageBtn = document.getElementById('prevPageBtn');
            const nextPageBtn = document.getElementById('nextPageBtn');

            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage === Math.ceil(newsData.length / newsPerPage);
        }

        const PageNumber = document.getElementById('PageNumber');
        PageNumber.textContent = currentPage;

        const PageNumber1 = document.getElementById('PageNumber1');
        PageNumber1.textContent = currentPage;
        const prevPageBtn = document.getElementById('prevPageBtn');
        // Обработка события при нажатии кнопки "Предыдущая"

        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updatePage();
                PageNumber.textContent = currentPage;
                PageNumber1.textContent = currentPage;
            }
            if (currentPage === 1 && countOfPages > 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            else if (currentPage === countOfPages){
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
            }
            else if (countOfPages > 1){
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            if (countOfPages === 1 && currentPage === 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
            }
        });

        // Обработка события при нажатии кнопки "Следующая"
        const nextPageBtn = document.getElementById('nextPageBtn');
        nextPageBtn.addEventListener('click', () => {
            if (currentPage < Math.ceil(newsData.length / newsPerPage)) {
                currentPage++;
                updatePage();
                PageNumber.textContent = currentPage;
                PageNumber1.textContent = currentPage;
            }
            if (currentPage == 1 && countOfPages > 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            else if (currentPage === countOfPages){
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
            }
            else if (countOfPages > 1){
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            if (countOfPages === 1 && currentPage === 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
            }
        });

 

        // Обработка события при нажатии кнопки "Предыдущая снизу"
        const prevPageBtn1 = document.getElementById('prevPageBtn1');
        prevPageBtn1.addEventListener('click', () => {
            if (currentPage > 1 && currentPage != 1) {
                currentPage--;
                updatePage();
                PageNumber.textContent = currentPage;
                PageNumber1.textContent = currentPage;
            }
            if (currentPage == 1 && countOfPages > 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            else if (currentPage === countOfPages){
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
            }
            else if (countOfPages > 1){
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            if (countOfPages === 1 && currentPage === 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
            }
        });

        // Обработка события при нажатии кнопки "Следующая снизу"
        const nextPageBtn1 = document.getElementById('nextPageBtn1');
        nextPageBtn1.addEventListener('click', () => {
            if (currentPage < Math.ceil(newsData.length / newsPerPage)) {
                currentPage++;
                updatePage();
                PageNumber.textContent = currentPage;
                PageNumber1.textContent = currentPage;
            }
            if (currentPage == 1 && countOfPages >1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            else if (currentPage === countOfPages){
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
            }
            else if (countOfPages > 1){
                prevPageBtn.classList.remove('opacity0');
                prevPageBtn1.classList.remove('opacity0');
                nextPageBtn.classList.remove('opacity0');
                nextPageBtn1.classList.remove('opacity0');
            }
            if (countOfPages === 1 && currentPage === 1){
                prevPageBtn.classList.add('opacity0');
                prevPageBtn1.classList.add('opacity0');
                nextPageBtn.classList.add('opacity0');
                nextPageBtn1.classList.add('opacity0');
            }
        });
        if (currentPage == 1 && countOfPages >1){
            prevPageBtn.classList.add('opacity0');
            prevPageBtn1.classList.add('opacity0');
            nextPageBtn.classList.remove('opacity0');
            nextPageBtn1.classList.remove('opacity0');
        }
        else if (currentPage === countOfPages){
            nextPageBtn.classList.add('opacity0');
            nextPageBtn1.classList.add('opacity0');
            prevPageBtn.classList.remove('opacity0');
            prevPageBtn1.classList.remove('opacity0');
        }
        else if (countOfPages > 1){
            prevPageBtn.classList.remove('opacity0');
            prevPageBtn1.classList.remove('opacity0');
            nextPageBtn.classList.remove('opacity0');
            nextPageBtn1.classList.remove('opacity0');
        }
        if (countOfPages === 1 && currentPage === 1){
            prevPageBtn.classList.add('opacity0');
            prevPageBtn1.classList.add('opacity0');
            nextPageBtn.classList.add('opacity0');
            nextPageBtn1.classList.add('opacity0');
        }
        // Инициализация отображения первой страницы новостей
        displayNewsOnPage(currentPage);
        updatePage();
    })


// Для плавного перехода на следующую странциу

document.addEventListener('DOMContentLoaded', function() {
    // Находим элемент <body>
    const body = document.body;
    
    // Изменяем непрозрачность на 1
    body.style.opacity = '1';
});