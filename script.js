const translations = {
    en: {
        title: "Hantoor - Coming Soon",
        mainHeading: "Your next rental experience",
        accentHeading: "is almost here",
        subtitle: "Official rollout begins soon across Syria.",
        badgeText: "COMING SOON",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        btn: "Ar"
    },
    ar: {
        title: "حنطور - قريباً",
        mainHeading: "تجربتك القادمة لاستئجار السيارات",
        accentHeading: "أصبحت أقرب من أي وقت",
        subtitle: "نستعد لإطلاق تجربة جديدة لاستئجار السيارات قريبًا في سوريا",
        badgeText: "ترقبونا قريبا",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        btn: "En"
    }
};

const langBtn = document.getElementById('lang-switch');
const htmlTag = document.documentElement;
const heroImg = document.querySelector('.hero-img');
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
    document.getElementById('label-days').innerText = t.days;
    document.getElementById('label-hours').innerText = t.hours;
    document.getElementById('label-minutes').innerText = t.minutes;
    document.getElementById('label-seconds').innerText = t.seconds;
    langBtn.innerText = t.btn;
    heroImg.src = heroImg.dataset[lang === 'ar' ? 'srcAr' : 'srcEn'];
    const mobileHeroImg = document.querySelector('.mobile-hero img');
    if (mobileHeroImg) mobileHeroImg.src = mobileHeroImg.dataset[lang === 'ar' ? 'srcAr' : 'srcEn'];

    updateCountdownValues();
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

const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countDownDate = new Date("July 1, 2026 00:00:00").getTime();

function updateCountdownValues() {
    const now      = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => el.innerText = "0");
        return;
    }

    daysEl.innerText    = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.innerText   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
}

detectLanguage();
setInterval(updateCountdownValues, 1000);
updateCountdownValues();
