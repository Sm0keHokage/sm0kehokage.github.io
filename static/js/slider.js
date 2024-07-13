let index = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideInterval;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  const slideWidth = slides[index].clientWidth;
  const newLeft = slideWidth * index;
  document.querySelector('.slides').scrollTo({left: newLeft, behavior: 'smooth'});
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    showSlide(index + 1);
  }, 5000); // Смена слайда каждые 5 секунд
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// prevButton.addEventListener('click', () => {
//   showSlide(index - 1);
//   stopSlideShow(); // Останавливаем автопрокрутку при ручном переключении
//   startSlideShow(); // Перезапускаем автопрокрутку
// });

function rightClick() {
  showSlide(index + 1);
  stopSlideShow(); // Останавливаем автопрокрутку при ручном переключении
  startSlideShow();
}

function leftClick() {
  showSlide(index - 1);
  stopSlideShow(); // Останавливаем автопрокрутку при ручном переключении
  startSlideShow();
}

// nextButton.addEventListener('click', () => {
//   showSlide(index + 1);
//   stopSlideShow(); // Останавливаем автопрокрутку при ручном переключении
//   startSlideShow(); // Перезапускаем автопрокрутку
// });

startSlideShow(); // Запускаем автопрокрутку при загрузке страницы
