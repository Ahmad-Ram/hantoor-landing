const translations = {
    en: {
        title: "Hantoor - Coming Soon",
        companyName: "Hantoor",
        mainHeading: "GET READY TO DRIVE",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        btn: "العربية"
    },
    ar: {
        title: "حنطور - قريباً",
        companyName: "حنطور",
        mainHeading: "استعد للقيادة",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        btn: "English"
    }
};

const langBtn = document.getElementById('lang-switch');
const htmlTag = document.documentElement;
let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update HTML attributes
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update Text Content
    document.title = t.title;
    document.getElementById('company-name').innerText = t.companyName;
    document.getElementById('main-heading').innerText = t.mainHeading;
    document.getElementById('label-days').innerText = t.days;
    document.getElementById('label-hours').innerText = t.hours;
    document.getElementById('label-minutes').innerText = t.minutes;
    document.getElementById('label-seconds').innerText = t.seconds;
    langBtn.innerText = t.btn;

    // Immediately update values
    updateCountdownValues();
}

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.startsWith('ar') ? 'ar' : 'en';
    updateLanguage(lang);
}

langBtn.addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'ar' : 'en');
});

// Countdown Elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countDownDate = new Date("May 1, 2026 00:00:00").getTime();

function updateCountdownValues() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => el.innerText = "0");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
}

// Initial detection and start interval
detectLanguage();
setInterval(updateCountdownValues, 1000);
updateCountdownValues();
