// var modal = document.getElementById("myModal_two");
// var trigger = document.getElementsByClassName("slide");
// var span = document.getElementsByClassName("close")[0];
//
// // Когда пользователь нажимает на изображение, откройте модальное окно
// trigger.onclick = function() {
//   modal.style.display = "block";
// }
//
// // Когда пользователь нажимает на (x), закройте модальное окно
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// // Когда пользователь нажимает в любом месте за пределами модального окна, закройте его
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//
// // Обработка отправки формы

// Получаем модальное окно и кнопку закрыть
var modal = document.getElementById("myModal_two");
var span = document.getElementsByClassName("close")[0];

// Получаем все изображения с классом triggerModal
var triggers = document.getElementsByClassName("slide");

// Функция для открытия модального окна
function showModal() {
  modal.style.display = "block";
}

// Добавляем обработчик событий клика ко всем изображениям
for (var i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener('click', showModal);
}

// Когда пользователь нажимает на (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 document.getElementById("serviceForm").onsubmit = function(event) {
            const form = document.getElementById('serviceForm');
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            });

            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
