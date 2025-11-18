
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

function updateSlider() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === slides.length - 1 ? "none" : "block";
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) index++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) index--;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

updateSlider();
