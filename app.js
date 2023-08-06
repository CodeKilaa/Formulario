const colorButtons = document.querySelectorAll('.color');
const link = document.querySelector('#sign-up-color');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.style.backgroundColor;
    document.documentElement.style.setProperty('--color-primario', color);
    link.style.color = color; // Cambia el color del enlace al mismo color del botón
  });
});
