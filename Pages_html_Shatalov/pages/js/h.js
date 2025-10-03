window.onload = function () {
  const currentUser = localStorage.getItem('currentUser');
  const message = document.getElementById('message');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginForm = document.getElementById('loginForm');

  if (currentUser) {
    message.style.color = 'green';
    message.innerText = `Привіт, ${currentUser}! Ви вже авторизовані.`;
    logoutBtn.style.display = 'block';
    loginForm.style.display = 'none';
  }
};
function logout() {
  localStorage.removeItem('currentUser');
  location.reload(); 
}
