var translateText = function (language) {
    $("[data-translate-id]").each(function (index, item) {
        var current_item = $(item);
        var current_item_id = current_item.data("translate-id");
        var new_html = locals[current_item_id][language];

        if (new_html) {
            current_item.html(new_html);
        }
    });
};

$(document).ready(function () {
    translateText("en");

    $(".translations").on("click", "li", function () {
        translateText($(this).text().toLowerCase());
    });
});

locals = {
    "about-me-occupation": {
        en: "Front-end developer",
        ru: "Front-end разработчик",
        ro: "Front-end developer"
    },
    "about-me-header": {
        en: "About me",
        ru: "Обо мне",
        ro: "Despre mine"
    },
    "about-me-description": {
        en: "I’m 19, live in Moldova. My favorite language is JavaScript. I'm always interested in learning new technologies, discovering new tools that I can use in projects.",
        ru: "Мне 19 лет, живу в Молдове. Мой любимый язык - JavaScript. Я всегда готов к изучению новых технологий, инструментов для использования их в проектах.",
        ro: "Am 19 de ani, trăiesc in Moldov. Limbaj de programare meu preferat - Javascript. Imi place se descoper techonologii si instrumente noi de a folosi pe ei in proiecte."
    },
    "about-me-date": {
        en: "Date of birth:",
        ru: "Дата рождения:",
        ro: "Data nașterii:"
    },
    "about-me-country": {
        en: "Country:",
        ru: "Страна:",
        ro: "Țara:"
    },
    "language-header": {
        en: "Languages",
        ru: "Языки",
        ro: "Limbe"
    },
    "language-en": {
        en: "English",
        ru: "Английский",
        ro: "Engleză"
    },
    "language-ro": {
        en: "Romanian",
        ru: "Румынский",
        ro: "Româna"
    },
    "language-ru": {
        en: "Russian",
        ru: "Русский",
        ro: "Rusă"
    },
    "language-first-part": {
        en: "Russian is my native language. English is “language of work”, also I like it so much. Romanian for me is a bit harder than English, only because I don’t use it so much...",
        ru: "Русский - мой родной язык. Английский “язык по работе”, но мне он очень нравится. Румынский для меня немного сложней английского, только потому, что я не использую его так часто...",
        ro: "Rusa este limba mea maternă. Engleza “limba pentru lucru”, dar ea tare îmi place. Româna este in pic mai grea pentru mine decît engliza, numai decît eu nu o folosesc așa de des..."
    },
    "language-second-part": {
        en: "I want to know English as good as Russian. It will give me a possibility to speak easier with other people.",
        ru: "Я хочу знать английский так же хорошо, как и русский. Это даст мне возможность проще общаться с другими людьми.",
        ro: "Eu vreau să știu engliza așa de bine, ca și rusa. Acest lucru îmi va permite să comunic mai ușor cu alți oameni."
    },
    "education-header": {
        en: "Education",
        ru: "Образование",
        ro: "Educația"
    },
    "skills-header": {
        en: "Skills",
        ru: "Навыки",
        ro: "Aptitudini"
    },
    "interests-header": {
        en: "Interests",
        ru: "Интересы",
        ro: "Interese"
    },
    "interests-anime": {
        en: "Click ^_^",
        ru: "Кликни ^_^",
        ro: "Click ^_^"
    },
    "interests-photography": {
        en: "Photography",
        ru: "Фотография",
        ro: "Fotografie"
    },
    "interests-design": {
        en: "Design",
        ru: "Дизайн",
        ro: "Design"
    },
    "interests-programming": {
        en: "Programming",
        ru: "Разработка ПО",
        ro: "Programare"
    },
    "projects-header": {
        en: "Projects",
        ru: "Мои работы",
        ro: "Lucrările mele"
    },
    "project-python-deerio": {
        en: "[Python] DeerIO API",
        ro: "[Python] DeerIO API",
        ru: "[Python] DeerIO API"
    },
    "project-deerio": {
        en: "[React] DeerIO Enchanted",
        ro: "[React] DeerIO Enchanted",
        ru: "[React] DeerIO Enchanted",
    },
    "project-magicofgods": {
        en: "Magic of Gods Landing",
        ro: "Magic of Gods Landing",
        ru: "Лендинг Magic of Gods"
    },
    "project-artist": {
        en: "Artist template",
        ru: "Шаблон для художника",
        ro: "Pagina pentru artist"
    },
    "project-starter-template": {
        en: "Starter template",
        ru: "Базовый шаблон",
        ro: "Pagina de bază"
    },
    "project-this": {
        en: "This page",
        ru: "Эта страница",
        ro: "Pagina aceasta"
    },
    "footer-info": {
        en: "Designed by <a href=\"https://github.com/PowerSlime\" ,=\"\" target=\"_blank\">me</a>. You can check all the sources <a href=\"https://github.com/PowerSlime/powerslime.github.io\" ,=\"\" target=\"_blank\">here</a>.",
        ru: "Дизайн разработан <a href=\"https://github.com/PowerSlime\" ,=\"\" target=\"_blank\">мной</a>. Вы можете посмотреть все исходники <a href=\"https://github.com/PowerSlime/powerslime.github.io\" ,=\"\" target=\"_blank\">здесь</a>.",
        ro: "Design dezvoltat de <a href=\"https://github.com/PowerSlime\" ,=\"\" target=\"_blank\">mine</a>. Voi puteți să vă uitați in surse pe <a href=\"https://github.com/PowerSlime/powerslime.github.io\" ,=\"\" target=\"_blank\">acest</a> link."
    },
};
