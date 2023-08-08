// Función para mostrar/ocultar el menú de navegación en dispositivos móviles
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
  
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
      menuToggle.innerHTML = '☰';
    } else {
      navLinks.style.display = 'block';
      menuToggle.innerHTML = '✕';
    }
  }
  
  // Función para mostrar mensaje de "enviado" al hacer clic en el botón de enviar
  function showMessage() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');
  
    submitButton.disabled = true;
    submitButton.innerText = 'Enviado';
  
    // Simulación de envío de datos a través de una petición asíncrona (por ejemplo, mediante AJAX)
    setTimeout(function () {
      form.reset();
      submitButton.disabled = false;
      submitButton.innerText = 'Enviar';
    }, 3000); // Tiempo de espera para resetear el formulario y habilitar el botón después de 3 segundos
  }

      // Función para mover las imágenes hacia la izquierda
      function moveLeft() {
        const slider = document.querySelector('.slider');
        const firstImage = slider.firstElementChild;
        slider.style.transition = 'transform 0.3s ease-in-out';
        slider.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          slider.appendChild(firstImage);
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
        }, 300);
      }
  
      // Intervalo para mover automáticamente las imágenes cada 3 segundos
      setInterval(moveLeft, 3000);

      // JavaScript para ajustar el tamaño de los enlaces a diferentes tamaños de pantalla
    function adjustLinksContainer() {
      var linksContainer = document.getElementById("links-container");
      var linkItems = linksContainer.getElementsByClassName("link-item");
      var containerWidth = linksContainer.offsetWidth;

      var numItems = linkItems.length;
      var itemWidth = Math.floor(containerWidth / numItems);

      for (var i = 0; i < numItems; i++) {
        linkItems[i].style.width = itemWidth + "px";
      }
    }

    // Ajustar enlaces cuando se carga la página y cuando se redimensiona la ventana
    window.onload = adjustLinksContainer;
    window.onresize = adjustLinksContainer;
  