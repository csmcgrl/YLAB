const createThanksWindow = (authWindow) => {
  const successAuth = document.createElement('p');
  successAuth.textContent = 'Авторизация прошла успешно!';
  successAuth.classList.add('success_authorization_text');
  authWindow.innerHTML = '';
  authWindow.appendChild(successAuth);
}


document.addEventListener('submit', (e) => {
  e.preventDefault();
 const authWindow = document.querySelector('.form_auth_block_content');
  const email = document.querySelector('input[name="auth_email"]').value;
  const password = document.querySelector('input[name="auth_pass"]').value;

  fetch('/url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(() => {
    alert('Ваши данные были успешно отправлены на сервер.');
    createThanksWindow(authWindow);
  })
  .catch(() => {
    alert('Произошла ошибка при отправке данных.');
  });
});

