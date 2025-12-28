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

document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });

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

    const video = items[index].querySelector("video");
    if (video) {
      video.play().catch(() => {});
    }
  }
}, 5000);
