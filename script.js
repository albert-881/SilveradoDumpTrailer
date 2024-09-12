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
navigator.addEventListener('click', (e) => {
    let buttonid = e.target.id;
    
    switch(buttonid){
      case 'service':
        const serviceSection = document.querySelector('.services-section');
        serviceSection.scrollIntoView({behavior:'smooth'});
        break;

      case 'quote':
        const quoteSection = document.querySelector('.quote-section');
        quoteSection.scrollIntoView({behavior:'smooth'});
        break;
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
