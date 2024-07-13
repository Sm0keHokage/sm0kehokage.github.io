var videos = document.querySelectorAll('video');

// Функция для остановки всех видео, кроме текущего
function pauseAllVideos(exceptVideo) {
  videos.forEach(function(video) {
    if (video !== exceptVideo) {
      video.pause();
    }
  });
}

// Добавляем обработчик события 'play' для каждого видео
videos.forEach(function(video) {
  video.addEventListener('play', function() {
    pauseAllVideos(this);
  });
});
