function sanitizeInput(inputElement) {
  inputElement.addEventListener('input', () => {
    inputElement.value = inputElement.value.replace(/[^0-9()+-]/g, ''); //* Удаляет все символы, кроме цифр, скобок, + и -
  });
}

//- Применение функции к каждому полю ввода
sanitizeInput(document.getElementById('heroTelInput'));
sanitizeInput(document.getElementById('orderTelInput'));
sanitizeInput(document.getElementById('footerTelInput'));


// - Умный хедер
let lastScrollTop = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    header.style.top="-80px"
  }else {
    header.style.top="0px"
  }
  lastScrollTop = scrollTop;
})