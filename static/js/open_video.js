// Функция для остановки всех видео, кроме активного
function pauseAllVideos(exceptVideo) {
  var iframes = document.querySelectorAll('.modal-content iframe');
  iframes.forEach(function(iframe) {
    var video = iframe.contentWindow.document.querySelector('video');
    if (video && iframe !== exceptVideo) {
      video.pause();
    }
  });
}

// Добавляем обработчики событий ко всем iframe
function addIframeEventListeners() {
  var iframes = document.querySelectorAll('.modal-content iframe');
  iframes.forEach(function(iframe) {
    iframe.contentWindow.document.addEventListener('play', function(event) {
      pauseAllVideos(iframe);
    }, true);
  });
}

// Создаем экземпляр Intersection Observer
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    var iframe = entry.target;
    var video = iframe.contentWindow.document.querySelector('video');
    if (video) {
      if (entry.isIntersecting) {
        // Видео появилось в поле зрения и было остановлено программой, воспроизводим его
      } else {
        // Видео исчезло из поля зрения, ставим его на паузу
        video.pause();
      }
    }
  });
}, { threshold: 0.5 }); // Настройка, чтобы событие срабатывало, когда видео видно хотя бы на 50%

// Начинаем наблюдение за всеми iframe
function observeIframes() {
  var iframes = document.querySelectorAll('.modal-content iframe');
  iframes.forEach(function(iframe) {
    observer.observe(iframe);
  });
}

// Вызываем функцию addIframeEventListeners и observeIframes, чтобы добавить обработчики событий и начать наблюдение
addIframeEventListeners();
observeIframes();

// Здесь можно добавить код для закрытия модального окна
// Например, если у вас есть элемент <span> с классом "close"
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }

// Когда пользователь кликает на <span> (x), закрываем модальное окно
/* span.onclick = function() {
  modal.style.display = "none";
} */

// Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
