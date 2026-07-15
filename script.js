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
        btn: "Ar",
        privacyPolicy: "Privacy Policy",
        partnerWithUs: "Partner with us",
    },
    ar: {
        title: "حنتور - قريباً",
        mainHeading: "تجربتك القادمة لاستئجار السيارات",
        accentHeading: "أصبحت أقرب من أي وقت",
        subtitle: "نستعد لإطلاق تجربة جديدة لاستئجار السيارات قريبًا في سوريا",
        badgeText: "ترقبونا قريبا",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        btn: "En",
        privacyPolicy: "سياسة الخصوصية",
        partnerWithUs: "انضم كمزود"
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
    localStorage.setItem('hantoor-lang', lang);

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
    document.getElementById('footer-privacy').innerText = t.privacyPolicy;
    document.getElementById('footer-partner').innerText = t.partnerWithUs;

    // mobile hero stays the same for both languages
}

function detectLanguage() {
    const saved = localStorage.getItem('hantoor-lang');
    updateLanguage(saved || 'ar');
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

const countDownDate = new Date("2026-07-31T21:00:00Z").getTime();

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
