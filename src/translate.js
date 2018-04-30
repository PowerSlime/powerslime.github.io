var translateText = function (language) {
	$('[data-translate-id]').each(function (index, item) {
		var current_item = $(item);
		var current_item_id = current_item.data('translate-id');
		var new_html = locals[current_item_id][language];

		if (new_html) {
			current_item.html(new_html);
		}
	});
}

$(document).ready(function () {
	translateText('en');

	$('.translations').on('click', 'li', function () {
		translateText($(this).text().toLowerCase());
	});
});

locals = {
	"about-me-occupation": {
		en: "Student",
		ru: "Студент",
		ro: "Student"
	},
	"about-me-header": {
		en: "About me",
		ru: "Обо мне",
		ro: "Despre mine"
	},
	"about-me-description": {
		en: "I’m 18, live in Moldova, I want to become a fullstack web-developer. My favorite language is Python.",
		ru: "Мне 18 лет, живу в Молдове, хочу стать Fullstack веб-разработчиком. Мой любимый язык - Python.",
		ro: "Am 18 de ani, trăiesc in Moldova, vreau să devin Fullstack web-dezvoltător. Limbaj de programare meu preferat - Python."
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
		en: 'Designed by <a href="https://github.com/PowerSlime" ,="" target="_blank">me</a>. You can check all the sources <a href="https://github.com/PowerSlime/powerslime.github.io" ,="" target="_blank">here</a>.',
		ru: 'Дизайн разработан <a href="https://github.com/PowerSlime" ,="" target="_blank">мной</a>. Вы можете посмотреть все исходники <a href="https://github.com/PowerSlime/powerslime.github.io" ,="" target="_blank">здесь</a>.',
		ro: 'Design dezvoltat de <a href="https://github.com/PowerSlime" ,="" target="_blank">mine</a>. Voi puteți să vă uitați in surse pe <a href="https://github.com/PowerSlime/powerslime.github.io" ,="" target="_blank">acest</a> link.'
	},
}
