const createThanksWindow = (authWindow) => {
  const windowAfterSubmit = document.createElement('div');  
const successAuth = document.createElement('p')
successAuth.textContent = 'Авторизация прошла успешно!';
 windowAfterSubmit.classList.add('success_authorization_block')
 successAuth.classList.add('success_authorization_text')
  windowAfterSubmit.prepend(successAuth);
  authWindow.prepend(windowAfterSubmit);
  
}


document.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Ваши данные были отправлены на сервер.')
  const authWindow = document.querySelector('.form_auth_block_content');
  authWindow.innerHTML = '';
  createThanksWindow(authWindow);
})

