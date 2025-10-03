function register() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const message = document.getElementById('message');

  if (!username || !password || !confirm) {
    message.style.color = '#cc0000';
    message.innerText = 'Заповніть усі поля!';
    return;
  }

  if (localStorage.getItem(username)) {
    message.style.color = '#cc0000';
    message.innerText = 'Користувач вже існує!';
    return;
  }

  if (password !== confirm) {
    message.style.color = '#cc0000';
    message.innerText = 'Паролі не збігаються!';
    return;
  }

  localStorage.setItem(username, password);
  message.style.color = 'green';
  message.innerText = 'Реєстрація успішна!';
}
