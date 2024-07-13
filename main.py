from flask import Flask, render_template, request, jsonify
import telebot
bot = telebot.TeleBot('7341917713:AAHsBK1r16kHlbD3xmyfKThi94jIvaCImlk')
user_ids = [846336977]


app = Flask(__name__)
arr = ['', 'Ремонт Плунжерных насосов и Редукторов всей линейки СИН от 84 000,00',
       'Ремонт и восстановление Клапанных коробок СИН от 28 000,00', 'Расточка и установка накладок от 75 000,00',
       'Замена эксцентриков коренного вала насоса СИН от 80 000,00',
       'Центровка кривошипного-шатунного механизма от 45 000,00',
       'Покраска Плунжерных насосов и Редукторов всей линейки СИН от 15 000,00', 'Другое']


def send_message_to_all_users(text):
  print('+')
  for user_id in user_ids:
    try:
      bot.send_message(user_id, text)
    except Exception as e:
      print(f"Не удалось отправить сообщение пользователю {user_id}: {e}")


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
  data = request.get_json()
  full_name = data.get('fullName', [''])[0]
  phone_number = data.get('phoneNumber', [''])[0]
  services = data.get('service', [])
  text = f'ФИО: {full_name} Номер телефона: {phone_number} \n Услуги:'
  print(f"ФИО: {full_name}")
  print(f"Номер телефона: {phone_number}")
  print("Выбранные услуги:")
  for i, service in enumerate(services):
    print(service)
    text += f'\n{i + 1}) {arr[int(service)]}'
  send_message_to_all_users(text)
  return jsonify({'status': 'success', 'received_services': services})


if __name__ == '__main__':
    app.run(debug=True)
    bot.polling()
