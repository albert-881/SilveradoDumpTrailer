// Initialize EmailJS using the CDN, no need for import statement
emailjs.init('VcGCEfdQA37Xhfw4d'); // Replace with your User ID

// Handle form submission
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Send form data to EmailJS
    emailjs.sendForm('service_cfz2lkq', 'template_w6jqiy4', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Quote request successfully sent!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send quote request. Please try again.');
      });
});
