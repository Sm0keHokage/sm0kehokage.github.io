var modal = document.getElementById("myModal_two");
var btn = document.querySelector(".button_second");
var span = document.getElementsByClassName("close")[0];
var targetElement = document.querySelector(".info_about_company");
    // Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

    // Закрываем модальное окно при нажатии на <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

    // Закрываем модальное окно при нажатии вне его
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
