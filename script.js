const items = document.querySelectorAll(".carousel-item");
const bgMusic = document.getElementById("bg-music");

let index = 0;

document.addEventListener(
  "click",
  () => {
    if (bgMusic && bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
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

    const video = items[index].querySelector("video");
    if (video) {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }

      video.play();
    }
  }
}, 5000);
