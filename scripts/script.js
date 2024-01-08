let currentSlide = 0;
  let intervalId;

  function showSlide(index) {
    const slider = document.getElementById('slider');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    
    currentSlide = index;
    slider.style.transform = `translateX(${-index * 100}%)`;

    paginationDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + 5) % 5;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    intervalId = setInterval(() => {
      nextSlide();
    }, 7000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Crear los puntos de paginación
  const paginationContainer = document.getElementById('slider-pagination');
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    dot.onclick = () => {
      stopAutoSlide();
      showSlide(i);
    };
    paginationContainer.appendChild(dot);
  }
  startAutoSlide(); // Iniciar el movimiento automático


   // Inicializar ScrollReveal
   ScrollReveal().reveal('.scroll-reveal-section', {
    delay: 200,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});