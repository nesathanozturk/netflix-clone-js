let nav = document.getElementById('nav');
let player = document.querySelector("#video")
let btnPlayPause = document.querySelector("#btnPlayPause")
// Elemanları seçtik.

// Butonun çalışması için yazılacaklar:

player.addEventListener("play", function() {
    changeButtonType(btnPlayPause, "Durdur");
}, false); // "Oynat" butonuna bastığımızda buton değişip, "Durdur" butonuna dönüşecek. Bu sayede videoyu durdurabileceğiz.

player.addEventListener("pause", function() {
    changeButtonType(btnPlayPause, "Oynat")
}, false); // "Durdur" butonuna bastığımızda buton değişip, "Oynat" butonuna dönüşecek. Bu sayede videoyu oynatabileceğiz.

function playPauseVideo() {
    if (player.paused || player.ended) {
        changeButtonType(btnPlayPause, "Durdur");
        player.play(); // Eğer video durur ya da sona ererse, "Durdur" butonuna bastığımızda video çalışır.
    } else {
        changeButtonType(btnPlayPause, "Oynat");
        player.pause(); // Eğer video çalışıyorsa, "Oynat" butonuna bastığımızda video durur.
    }
};

// Buton değerlerinin ekranda yazılması.

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
};

// Sayfa hareket ettiğinde üstte oluşacak siyah navbar:

window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
        nav.classList.add("nav__black"); // Eğer koşula uyarsa, class'ı oluşturup, siyah navbar oluşacak.
    } else {
        nav.classList.remove("nav__black"); // Eğer koşula uymazsa, oluşan class'ı kaldıracak ve siyah navbar gözükmeyecek.
    }
});
