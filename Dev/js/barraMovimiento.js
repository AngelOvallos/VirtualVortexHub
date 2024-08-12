
const barras = document.querySelectorAll('.barra');

barras.forEach((barra) => {
  let currentIndex = 0;
  const items = barra.querySelectorAll('.item');
  const totalItems = items.length;
  const itemWidth = items[0].getBoundingClientRect().width;
  const container = barra.querySelector('.contenedor');
  const containerWidth = container.getBoundingClientRect().width;

  const anteriorButton = barra.querySelector('.anterior');
  const siguienteButton = barra.querySelector('.siguiente');

  anteriorButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToElement();
    }
  });

  siguienteButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      scrollToElement();
    }
  });

  function scrollToElement() {
    container.scrollTo({
      left: currentIndex * itemWidth,
      behavior: 'smooth'
    });

    anteriorButton.disabled = currentIndex === 0;
  }
});

