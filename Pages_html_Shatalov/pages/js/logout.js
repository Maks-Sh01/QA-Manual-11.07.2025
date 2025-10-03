// Перевірка при завантаженні сторінки
window.onload = function () {
  const currentUser = localStorage.getItem('currentUser');
  const message = document.getElementById('message');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');

  if (currentUser) {
    message.style.color = 'green';
    message.innerText = `Привіт, ${currentUser}!.`;
    logoutBtn.style.display = 'block';
    loginForm.style.display = 'none';
  }
};

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

function logout() {
  localStorage.removeItem('currentUser');
  location.reload(); // Перезавантажити сторінку
}
