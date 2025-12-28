const items = document.querySelectorAll(".carousel-item");
const bgMusic = document.getElementById("bg-music");

let index = 0;
let musicaLiberada = false;

const ultimoItem = items[items.length - 1];
const video = ultimoItem.querySelector("video");

if (video) {
  video.pause();
  video.muted = true;
  video.controls = false;
  video.style.pointerEvents = "none";
}

function tocarMusica() {
  if (!bgMusic || musicaLiberada) return;

  bgMusic
    .play()
    .then(() => {
      musicaLiberada = true;
    })
    .catch(() => {});
}

window.addEventListener("load", tocarMusica);

document.addEventListener(
  "touchstart",
  () => {
    tocarMusica();
  },
  { once: true }
);

document.addEventListener(
  "click",
  () => {
    tocarMusica();
  },
  { once: true }
);

const interval = setInterval(() => {
  items[index].classList.remove("active");
  index++;

  if (index >= items.length) {
    clearInterval(interval);
    return;
  }

  items[index].classList.add("active");

  if (index === items.length - 1) {
    clearInterval(interval);

    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }

    if (video) {
      video.muted = false;
      video.controls = true;
      video.style.pointerEvents = "auto";
      video.play().catch(() => {});
    }
  }
}, 5000);
