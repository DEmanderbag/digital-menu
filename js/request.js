const burgers = document.querySelector(".burgers");
const sides = document.querySelector(".sides");
const snacks = document.querySelector(".snacks");
const sweets = document.querySelector(".sweets");
const dips = document.querySelector(".dips");
const addOns = document.querySelector(".addons");
const menu = document.querySelector(".menu");

getBurgers(lang);
getSides(lang);
getSnacks(lang);
getSweets(lang);
getDips(lang);
getAddOns(lang);

async function getBurgers(lang) {
  const request = await fetch(`../data/burgers-${lang}.json`);
  const data = await request.json();
  displayItem(data, burgers);
}

async function getSides(lang) {
  const request = await fetch(`../data/sides-${lang}.json`);
  const data = await request.json();
  displayItemLess(data, sides);
}

async function getSnacks(lang) {
  const request = await fetch(`../data/snacks-${lang}.json`);
  const data = await request.json();
  displayItemLess(data, snacks);
}

async function getSweets(lang) {
  const request = await fetch(`../data/sweets-${lang}.json`);
  const data = await request.json();
  displayItemLess(data, sweets);
}

async function getDips(lang) {
  const request = await fetch(`../data/dips-${lang}.json`);
  const data = await request.json();
  displayItemLess(data, dips);
}

async function getAddOns(lang) {
  const request = await fetch(`../data/addons-${lang}.json`);
  const data = await request.json();
  displayItemLess(data, addOns);
}

function displayItem(items, place) {
  place.innerHTML = `<h2>${lang == "en" ? "Burgers" : "Burgeri"}</h2>`;
  for (let item of items) {
    let htmlData = `
   <div class="layout-1">
          <div class="layout-1__image">
            <img src="${item.img}" alt="">
          </div>
          <div class="layout-1__group">
            <h3 class="layout-1__title">${item.name}</h3>
            <p class="layout-1__description">${item.description}</p>
            <p class="price"><span>${item.vegan} </span>RSD ${item.price}</p>
          </div>
        </div>`;
    place.insertAdjacentHTML("beforeend", htmlData);
  }
}


groups = {
  "sr": {
    sides: 'prilozi',
    snacks: 'grickalice',
    sweets: "slatkiši",
    dips: "umak",
    addons: "Dodaci"
  },
  "en": {
    sides: 'sides',
    snacks: 'snacks',
    sweets: "sweets",
    dips: "dips",
    addons: "add-ons"
  },
}

function displayItemLess(items, place) {
  let key = place.classList[1];
  place.innerHTML = `<h2>${groups[lang][key]}</h2>`;
  for (let item of items) {
    let htmlData = `
    <div class="item-price-name">
      <p>${item.name}</p>
      <p class="price price-small">${item.price}</p>
    </div>`;
    place.insertAdjacentHTML("beforeend", htmlData);
  }
}
