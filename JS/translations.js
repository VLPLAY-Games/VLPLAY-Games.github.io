const translations = {
    'siteTitle': {
        'en': 'VL_PLAY Games - Home',
        'ru': 'VL_PLAY Games - Главная'
    },
    'nav_home': {
        'en': 'Home',
        'ru': 'Главная'
    },
    'nav_developments': {
        'en': 'Developments',
        'ru': 'Разработки'
    },
    'nav_news': {
        'en': 'News',
        'ru': 'Новости'
    },
    'nav_about_me': {
        'en': 'About Me',
        'ru': 'Обо мне'
    },
    'nav_contacts': {
        'en': 'Contacts',
        'ru': 'Контакты'
    },
    'hero': {
        'en': 'Clocks, Games, and More',
        'ru': 'Часы, игры и многое другое'
    },
    'learn_more': {
        'en': 'Learn More',
        'ru': 'Подробнее'
    },
    'developments': {
        'en': 'Developments',
        'ru': 'Разработки'
    },
    'xcTitle': {
        'en': 'XenoClock (in developing)',
        'ru': 'XenoClock (в разработке)'
    },
    'sdTitle': {
        'en': 'Silent Darkness (in developing)',
        'ru': 'Silent Darkness (в разработке)'
    },
    'xcDescription': {
        'en': 'I am creating unique clocks that combine high functionality using the ESP32 board and various modules.',
        'ru': 'Я занимаюсь созданием уникальных часов, сочетающих в себе высокую функциональность с помощью платы ESP32.'
    },
    'botDescription': {
        'en': 'My own Telegram bot that provides information about new technologies and has various additional features.',
        'ru': 'Мой собственный Telegram-бот, который информирует о новых технологиях и имеет различные дополнительные функции.'
    },
    'sdDescription': {
        'en': 'My game Silent Darkness is an exciting horror game that will immerse you in a dark world of secrets and horrors.',
        'ru': 'Моя игра Silent Darkness представляет собой захватывающий хоррор, который погрузит вас в мрачный мир тайн и ужасов.'
    },
    'qlakeDescription': {
        'en': 'Qlake is a first-person shooter with horror elements where you will carry out the main task - to kill the zombie leader.',
        'ru': 'Qlake — шутер от первого лица с элементами хоррора, где вы будете выполнять основную задачу — убить предводителя зомби.'
    },
    'latest_news': {
        'en': 'Latest News',
        'ru': 'Последние новости'
    },
    'all_news': {
        'en': 'All News',
        'ru': 'Все новости'
    },
    'siteTitleAboutme':{
        'en': 'VL_PLAY Games - About me',
        'ru': 'VL_PLAY Games - Обо мне'
    },
    'aboutMeBegin': {
        'en': 'About me',
        'ru': 'Обо мне'
    },
    'aboutMe1': {
        'en': "Hello! I'm the indie developer behind the moniker VL_PLAY. My passion is to create amazing technology and exciting games for audiences looking for something new and exciting.",
        'ru': 'Привет! Я инди-разработчик, стоящий за псевдонимом VL_PLAY. Мое призвание — создавать удивительные технологии и захватывающие игры для аудитории, ищущей что-то новое и увлекательное.'
    },
    'aboutMe2': {
        'en': 'My passion for programming started at an early age. Since then it has only gotten hotter. I am passionate about developing both software and hardware devices. My goal is to provide the user with incredible and innovative products that will make their life easier and more fun.',
        'ru': 'Страсть к программированию началась еще в раннем возрасте. С тех пор она разгорелась только сильнее. Я увлечен разработкой как программного обеспечения, так и аппаратных устройств. Моя цель — предоставить пользователю невероятные и инновационные продукты, которые сделают их жизнь легче и увлекательнее.'
    },
    'aboutMe3': {
        'en': 'Nowadays, the arsenal includes a variety of projects, ranging from exciting games in which players can plunge into a world of adventure and fantasy, to smart devices that combine advanced technology and design.',
        'ru': 'Сейчас в арсенале разнообразные проекты, начиная от захватывающих игр, в которых игроки могут окунуться в мир приключений и фантазии, заканчивая умными устройствами, которые объединяют в себе передовые технологии и дизайн.'
    },
    'aboutMe4': {
        'en': "When I'm not developing, I try to pay attention to learning and researching new technologies. And I really love sharing my knowledge and experience with other enthusiasts and developers in online communities.",
        'ru': 'В то время, когда не занят разработкой, стараюсь уделять внимание обучению и исследованию новых технологий. И очень люблю делиться своими знаниями и опытом с другими энтузиастами и разработчиками в онлайн-сообществах.'
    },
    'aboutMe5': {
        'en': 'Currently there are two completed projects: the Qlake game and the Telegram bot VL_PLAY Games Bot. In addition, I am working on two projects: the game Silent Darkness and the XenoClock smartwatch.',
        'ru': 'В настоящее время есть два завершенных проекта: игра Qlake и Телеграм-бот VL_PLAY Games Bot. Кроме того, я работаю над двумя проектами: игрой Silent Darkness и умными часами XenoClock.'
    },
    'aboutMe6': {
        'en': 'Nice to meet you! If there are any questions or comments, please feel free to contact me through the contact information on the page ',
        'ru': 'Рад знакомству с вами! Если есть какие-либо вопросы или комментарии, пожалуйста, не стесняйтесь связаться со мной через контактную информацию на странице '
    },
    'aboutMe7': {
        'en': 'I am always happy to communicate with like-minded people and potential partners.',
        'ru': 'Я всегда рад общению с единомышленниками и потенциальными партнерами.'
    },
    'aboutMe8': {
        'en': 'You can also see my ',
        'ru': 'Также вы можете посмотреть мой '
    },
    'aboutMe9': {
        'en': 'Contacts',
        'ru': 'Контакты'
    }
};

// Функция для установки куки
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Функция для получения значения куки по имени
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return null;
}

// Функция для установки языка
function setLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translations[translationKey] && translations[translationKey][language]) {
            element.textContent = translations[translationKey][language];
        }
    });

    // Сохраняем выбранный язык в куки
    setCookie('language', language, 30);
}

// Функция для инициализации языка при загрузке страницы
function initializeLanguage() {
    // Пытаемся получить язык из куков
    const savedLanguage = getCookie('language');

    // Если язык сохранен в куки, устанавливаем его
    if (savedLanguage) {
        setLanguage(savedLanguage);
    } else {
        // Иначе устанавливаем английский язык по умолчанию
        setLanguage('en');
    }
}

function translatePage(language) {
    
}

document.getElementById('switchToEnglish').addEventListener('click', () => setLanguage('en'));
document.getElementById('switchToRussian').addEventListener('click', () => setLanguage('ru'));

// Установите начальный язык (например, русский)
initializeLanguage();