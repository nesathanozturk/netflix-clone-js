// Elements:
let nav = document.getElementById('nav');
let player = document.querySelector("#video");
let btnPlayPause = document.querySelector("#btnPlayPause");

// Functions:
player.addEventListener("play", function() {
    changeButtonType(btnPlayPause, "Durdur");
}, false);

player.addEventListener("pause", function() {
    changeButtonType(btnPlayPause, "Oynat");
}, false);

function playPauseVideo() {
    if (player.paused || player.ended) {
        changeButtonType(btnPlayPause, "Durdur");
        player.play();
    } else {
        changeButtonType(btnPlayPause, "Oynat");
        player.pause();
    };
};

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
};

// Black Navbar
window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
        nav.classList.add("nav__black");
    } else {
        nav.classList.remove("nav__black");
    };
});
