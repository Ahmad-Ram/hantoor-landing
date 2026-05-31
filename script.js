const translations = {
    en: {
        title: "Hantoor - Coming Soon",
        mainHeading: "Your next rental experience",
        accentHeading: "is almost here",
        subtitle: "Official rollout begins soon across Syria.",
        badgeText: "COMING SOON",
        btn: "Ar"
    },
    ar: {
        title: "حنطور - قريباً",
        mainHeading: "تجربتك القادمة لاستئجار السيارات",
        accentHeading: "أصبحت أقرب من أي وقت",
        subtitle: "نستعد لإطلاق تجربة جديدة لاستئجار السيارات قريبًا في سوريا",
        badgeText: "ترقبونا قريبا",
        btn: "En"
    }
};

const langBtn = document.getElementById('lang-switch');
const htmlTag = document.documentElement;
let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.title = t.title;
    document.getElementById('main-heading').innerText = t.mainHeading;
    document.getElementById('accent-heading').innerText = t.accentHeading;
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('badge-text').innerText = t.badgeText;
    langBtn.innerText = t.btn;

    // mobile hero stays the same for both languages
}

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    updateLanguage(browserLang.startsWith('ar') ? 'ar' : 'en');
}

langBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    const page = document.querySelector('.page');
    const mobileHero = document.querySelector('.mobile-hero');

    page.classList.add('lang-fade');
    if (mobileHero) mobileHero.classList.add('lang-fade');

    setTimeout(() => {
        updateLanguage(nextLang);
        page.classList.remove('lang-fade');
        if (mobileHero) mobileHero.classList.remove('lang-fade');
    }, 250);
});

detectLanguage();
