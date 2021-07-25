const select = document.querySelector("select");
let currentSelect = select[0];
let navItemTitle = document.querySelectorAll(".nav__item-title");


// Browsers language
let browserLang = navigator.language;
let lang = browserLang.substring(0, 2);

if (lang != "en" && "sr") {
  lang = "sr";
  currentSelect.innerText = "Sprski"
} else {
  currentSelect.innerText = "English"
}

select.addEventListener("change", (e) => {
  const filterData = e.target.value;
  if(filterData === "en") {
    lang = "en";
    getBurgers(lang);
    getSides(lang);
    getSnacks(lang);
    getSweets(lang);
    getDips(lang);
    getAddOns(lang);
    navChange(lang);
    todaysDate(lang);
    buttonChange(lang);
    bannerMessageChange(lang);
    installStepChange(lang);
  } else if (filterData === "sr") {
    lang = "sr";
    getBurgers(lang);
    getSides(lang);
    getSnacks(lang);
    getSweets(lang);
    getDips(lang);
    getAddOns(lang);
    navChange(lang);
    todaysDate(lang);
    buttonChange(lang);
    bannerMessageChange(lang);
    installStepChange(lang);
  } 
});


navLabel = {
  "sr": {
    0: 'burgeri',
    1: 'prilozi',
    2: 'umak',
    3: "grickalice",
    4: "slatkiši",
    5: "dodaci"
  },
  "en": {
    0: 'burgers',
    1: 'sides',
    2: 'dips',
    3: "snacks",
    4: "sweets",
    5: "add-ons"
  },
}

function navChange(lang) {
  navItemTitle.forEach((e, key) => {
  e.innerText = navLabel[lang][key];
})
}

navChange(lang);