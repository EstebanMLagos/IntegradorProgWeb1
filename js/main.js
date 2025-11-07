document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.carousel');
  if (carousel) {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
// en el bloque de abajo vas a tener el texto que se ve en el index
    const images = [
      'img/F-16.jpg',
      'img/imagen8.jpg',
      'img/tam2ca2.jpg'
    ];

    let currentIndex = 0;

    function loadCarousel() {
      carouselInner.innerHTML = '';
      images.forEach(src => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Imagen de carrusel';
        item.appendChild(img);
        carouselInner.appendChild(item);
      });
      updateCarousel();
    }
// no me toques nada de este codigo por favor, ya esta todo bien implementado acorde a las consignas (eso creo)
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showSlide(index) {
      if (index < 0) {
        currentIndex = images.length - 1;
      } else if (index >= images.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateCarousel();
    }

    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });

    loadCarousel();
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const errorContainer = document.getElementById('form-errors');
    const submittedContainer = document.getElementById('submitted-data');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      errorContainer.innerHTML = '';
      submittedContainer.innerHTML = '';
      let errors = [];

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[0-9\s-]{7,15}$/;

      if (!nombre) {
        errors.push('El campo Nombre es obligatorio.');
      }
      if (nombre.length > 50) {
        errors.push('El campo Nombre no debe exceder los 50 caracteres.');
      }
      
      if (!email) {
        errors.push('El campo Email es obligatorio.');
      } else if (!emailRegex.test(email)) {
        errors.push('El formato del Email no es válido.');
      }
      
      if (!telefono) {
        errors.push('El campo Teléfono es obligatorio.');
      } else if (!phoneRegex.test(telefono)) {
        errors.push('El formato del Teléfono no es válido (use 7-15 dígitos).');
      }

      if (errors.length > 0) {
        errors.forEach(error => {
          const errorElement = document.createElement('p');
          errorElement.className = 'error-message';
          errorElement.textContent = error;
          errorContainer.appendChild(errorElement);
        });
      } else {
        const title = document.createElement('h3');
        title.textContent = 'Datos Enviados Correctamente:';
        
        const pNombre = document.createElement('p');
        pNombre.innerHTML = `<strong>Nombre:</strong> ${nombre}`;
        
        const pEmail = document.createElement('p');
        pEmail.innerHTML = `<strong>Email:</strong> ${email}`;
        
        const pTelefono = document.createElement('p');
        pTelefono.innerHTML = `<strong>Teléfono:</strong> ${telefono}`;
        
        submittedContainer.appendChild(title);
        submittedContainer.appendChild(pNombre);
        submittedContainer.appendChild(pEmail);
        submittedContainer.appendChild(pTelefono);
        
        contactForm.reset();
      }
    });
  }

});
