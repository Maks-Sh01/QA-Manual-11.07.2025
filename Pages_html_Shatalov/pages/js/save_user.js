  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerText = `Привіт, ${currentUser}!`;

    // Ховаємо форму входу
    document.getElementById('loginUsername').style.display = 'none';
    document.getElementById('loginPassword').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.querySelector('a').style.display = 'none';
  }
