const items = document.querySelectorAll(".carousel-item");
let index = 0;

setInterval(() => {
  items[index].classList.remove("active");
  index = (index + 1) % items.length;
  items[index].classList.add("active");
}, 5000);
