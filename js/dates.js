let dateElement = document.querySelector(".date");

weekday = {
  "sr": ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
  "en": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

months = {
  "sr": ['Januar', 'Februar', 'Mart', 'April', 'May', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
  "en": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

function todaysDate(lang){ 
let date  = new Date();

let dayOfWeek = weekday[lang][date.getDay()];
let currentMonth =  months[lang][date.getMonth()];
dayOfMonth = (date.getDate());

let fullDate = `${dayOfWeek}, ${dayOfMonth}. ${currentMonth}`;

dateElement.textContent = fullDate;
}

todaysDate(lang);