document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', scrollToSection);
    });
  
    function scrollToSection(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const yOffset = -80; // Ajuste del desplazamiento vertical para que no se superponga el navbar
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
  
      // Cerramos el menú hamburguesa si está abierto (si tienes uno en tu navbar)
      const hamburguerCheckbox = document.getElementById('hamburguer-checkbox');
      if (hamburguerCheckbox.checked) {
        hamburguerCheckbox.checked = false;
      }
    }
  
    // Añadimos un listener para actualizar la posición del navbar al hacer scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      const scrollY = window.scrollY;
  
      if (scrollY > 100) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    });
  });
  