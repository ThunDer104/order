function sanitizeInput(inputElement) {
  inputElement.addEventListener('input', () => {
      inputElement.value = inputElement.value.replace(/[^0-9()+-]/g, ''); //* Удаляет все символы, кроме цифр, скобок, + и -
  });
}

//- Применение функции к каждому полю ввода
sanitizeInput(document.getElementById('heroTelInput'));
sanitizeInput(document.getElementById('orderTelInput'));
sanitizeInput(document.getElementById('footerTelInput'));