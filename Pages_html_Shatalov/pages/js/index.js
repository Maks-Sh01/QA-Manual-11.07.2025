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

function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const message = document.getElementById('message');
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    message.style.color = 'green';
    message.innerText = `Привіт, ${username}!`;

    document.getElementById('loginUsername').style.display = 'none';
    document.getElementById('loginPassword').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.querySelector('a').style.display = 'none';
  } else {
    message.style.color = '#cc0000';
    message.innerText = 'Невірні дані!';
  }
}

function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const message = document.getElementById('message');
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem('currentUser', username);
    message.style.color = 'green';
    message.innerText = `Привіт, ${username}! Авторизація успішна.`;
    document.getElementById('logoutBtn').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
  } else {
    message.style.color = '#cc0000';
    message.innerText = 'Невірні дані!';
  }
}

