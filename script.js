// Initialize EmailJS using the CDN, no need for import statement
emailjs.init('VcGCEfdQA37Xhfw4d'); // Replace with your User ID

// Handle form submission
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Send form data to EmailJS
    emailjs.sendForm('service_cfz2lkq', 'template_w6jqiy4', this)
      .then(function() {
        const successMsg = document.querySelector('#message-status');
        successMsg.textContent = 'Quote request successfully sent!';
        clear();
      }, function() {
        const errorMsg = document.querySelector('#message-status');
        errorMsg.textContent = 'Failed to send quote request. Please try again.';
      });
});


const navigator = document.querySelector('.navi-buttons');
const serviceSection = document.querySelector('.services-section');
const quoteSection = document.querySelector('.quote-section');
const aboutSection = document.querySelector('.about-us');
const contactSection = document.querySelector('.footer');
navigator.addEventListener('click', (e) => {
    let buttonid = e.target.id;
    
    switch(buttonid){
      case 'service':
        serviceSection.scrollIntoView({behavior:'smooth'});
        break;

      case 'quote':
        quoteSection.scrollIntoView({behavior:'smooth'});
        break;
      
      case 'about':
        aboutSection.scrollIntoView({behavior:'smooth'});
        
      case 'contact':
        contactSection.scrollIntoView({behavior:'smooth'});
          
    } 
    
});

const quoteHero = document.querySelector('.quoteHero-button');
quoteHero.addEventListener('click', (e) => {
  quoteSection.scrollIntoView({behavior:'smooth'});
}); 

let currLang = 'en'
const translateBtn = document.querySelector('.translate-button');
translateBtn.addEventListener('click', (e) => {
  if (currLang == 'en') {
    // Header Section
    const sectionTitle = document.querySelector('.section-title');
    sectionTitle.textContent = 'Soluciones de transporte en las que puede confiar';

    const sectionText = document.querySelector('.section-text');
    sectionText.textContent = 'Nos enorgullece ofrecer servicios de remolque de alta calidad que se ajusten a sus necesidades. Desde sitios de construcción hasta proyectos en el hogar, lo tenemos cubierto. ¿Necesita una solución de remolque rápida y confiable? No busque más. Nuestros remolques están listos cuando los necesite, sin complicaciones ni demoras.';

    const getQuoteBtn = document.querySelector('.section-button button');
    getQuoteBtn.textContent = '¡Solicite una cotización!';

    // Translate Navigation
    document.querySelector('#about').textContent = 'Sobre Nosotros';
    document.querySelector('#service').textContent = 'Servicios';
    document.querySelector('#gallery').textContent = 'Galería';
    document.querySelector('#quote').textContent = 'Solicitar Cotización';
    document.querySelector('#contact').textContent = 'Contacto';

    // Services Section
    document.querySelector('.service-header .title').textContent = 'Nuestros Servicios';
    
    // Service 1
const serviceTitle1 = document.querySelector('.text1 .title');
serviceTitle1.textContent = 'Servicio de Dejar y Recoger Remolque';

const serviceText1 = document.querySelector('.text1 .text');
serviceText1.textContent = 'Te dejamos el remolque en tu casa o trabajo, lo llenas a tu tiempo, y luego lo recogemos. No te preocupes por el transporte, nosotros nos encargamos.';

// Service 2
const serviceTitle2 = document.querySelector('.text2 .title');
serviceTitle2.textContent = 'Transporte de Materiales';

const serviceText2 = document.querySelector('.text2 .text');
serviceText2.textContent = 'Te ayudamos a mover tus materiales o equipo de un lugar a otro de manera segura y rápida.';

// Service 3
const serviceTitle3 = document.querySelector('.text3 .title');
serviceTitle3.textContent = 'Renta de Remolques';

const serviceText3 = document.querySelector('.text3 .text');
serviceText3.textContent = 'Renta un remolque para tu proyecto. Nosotros lo traemos y lo llevamos cuando termines.';


    // Quote Section
    document.querySelector('#get-quote h2').textContent = 'Solicitar Cotización';
    document.querySelector('#get-quote p').textContent = 'Complete el siguiente formulario y nos pondremos en contacto con usted con una cotización personalizada para sus necesidades.';

    document.querySelector('label[for="from_name"]').textContent = 'Nombre Completo:';
    document.querySelector('label[for="email"]').textContent = 'Dirección de Correo Electrónico:';
    document.querySelector('label[for="phone"]').textContent = 'Número de Teléfono:';
    document.querySelector('label[for="service"]').textContent = 'Seleccione un Servicio:';

    const serviceOptions = document.querySelectorAll('#service option');
    serviceOptions[0].textContent = 'Servicio de Entrega y Recogida de Remolques';
    serviceOptions[1].textContent = 'Servicio de Transporte de Materiales';
    serviceOptions[2].textContent = 'Alquiler de Remolque de Volteo';

    document.querySelector('label[for="message"]').textContent = 'Información Adicional:';
    document.querySelector('.quote-button').textContent = 'Enviar';
    
    const messagePlaceholder = document.querySelector('#message');
    messagePlaceholder.placeholder = 'Cuéntanos más sobre lo que necesitas...';

    const aboutTitle = document.querySelector('#aboutus-title');
    aboutTitle.textContent = 'Sobre Nosotros';

    const aboutText = document.querySelector('#aboutus-text');
    aboutText.textContent = 'En Silverado Dump Trailer Service & Construction, nos enorgullecemos de ser una empresa local familiar en Brownsville, Texas. Nos especializamos en ofrecer servicios de remolques volquete confiables y sin complicaciones, adaptados a sus necesidades. Ya sea que esté buscando alquilar un remolque para su proyecto o necesite transportar materiales, lo tenemos cubierto. Nuestro objetivo es brindar un servicio excepcional con un toque personal, garantizando que su proyecto se desarrolle sin problemas de principio a fin.'

    // Change Button Text to English
    translateBtn.textContent = 'English?';

    currLang = 'sp';
  } else {
    currLang = 'en';
    window.location.reload(); // Reset to English by refreshing
  }
});



function clear() {
  const clearInputs = document.querySelectorAll('input');
  clearInputs.forEach(input => input.value = '');

  const clearSelect = document.querySelector('select');
  clearSelect.value = 'trailer-drop-off';

  const clearText = document.querySelector('textarea');
  clearText.value = '';
}
