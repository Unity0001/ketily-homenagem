const items = document.querySelectorAll(".carousel-item");
let index = 0;

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
      video.play();
    }
  }
}, 5000);
