const rotatingTextElement = document.querySelector('.rotating-text');
const textArray = ['Precio especial a mayoristas!', 'Zapatos desde 155 pesitos!', 'Venta por catalogo'];
let currentIndex = 0;

function rotateText() {
    rotatingTextElement.textContent = textArray[currentIndex];
    rotatingTextElement.style.animation = 'none'; // Establece la animación a 'none' para reiniciar
    void rotatingTextElement.offsetWidth; // Forza un reflow para aplicar el cambio
    rotatingTextElement.style.animation = null; // Restablece la animación a null para que use la definida en CSS
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(rotateText, 7000); // Cambia el texto cada 10 segundos (10000 milisegundos)

document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('active');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
      } else {
          dropdownContent.style.display = "block";
      }
  });
});