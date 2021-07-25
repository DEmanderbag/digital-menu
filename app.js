if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

const iosBanner = document.querySelector(".iosBanner");
const btnInstall = document.querySelector(".btn-install");
const installText = document.querySelector(".install-text");
const installStep = document.querySelector(".step p");
const closeBtn = document.querySelector(".close");
let userAgent = window.navigator.userAgent;

btnInstallMessage = {
  "sr": "Preuzmi našu aplikaciju",
  "en": "Install our app",
}

bannerInstallMessage = {
  "sr": "Preuzmi našu aplikaciju za brži prsistup sa početnog ekrana kada",
  "en": "Install our application on your home screen for quick and easy access when you're on the go.",
}

installStepMessage = {
  "sr": `Pritisni <span><img src="assets/icons/share.svg" alt=""></span> zatim "Dodaj na početni ekran"`,
  "en": `Just tap <span><img src="assets/icons/share.svg" alt=""></span> then "Add to Home Screen"`,
}

function buttonChange(lang) {
  btnInstall.textContent = btnInstallMessage[lang];
}

function bannerMessageChange(lang) {
  installText.textContent = bannerInstallMessage[lang];
}

function installStepChange(lang) {
  installStep.innerHTML = installStepMessage[lang];
}

buttonChange(lang);
bannerMessageChange(lang);
installStepChange(lang);

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  btnInstall.addEventListener("click", () => {
    iosBanner.classList.add("open");

    closeBtn.addEventListener("click", () => {
      iosBanner.classList.remove("open");
    })
  })
}


// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA

  btnInstall.addEventListener("click", (e) => {
    iosBanner.classList.remove("open");
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
    if(choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS promnt");
    }
    deferredPrompt = null;
    })
  })
});

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav");
  nav.classList.toggle("sticky", window.scrollY > 110);
  menu.classList.toggle("padding-top", window.scrollY > 110);
})

const navItem = document.getElementsByClassName("nav__item");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
