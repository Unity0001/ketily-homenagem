const items = document.querySelectorAll(".carousel-item");
const bgMusic = document.getElementById("bg-music");

let index = 0;
let musicaIniciada = false;

function iniciarMusica() {
  if (!musicaIniciada && bgMusic) {
    bgMusic.play().catch(() => {});
    musicaIniciada = true;
  }
}

window.addEventListener("load", () => {
  iniciarMusica();
});

document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });

const ultimoItem = items[items.length - 1];
const video = ultimoItem.querySelector("video");

if (video) {
  video.muted = true;
  video.controls = false;
  video.style.pointerEvents = "none";
}

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
