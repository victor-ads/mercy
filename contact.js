 document.addEventListener('DOMContentLoaded', function() {
        const paymentForm = document.getElementById('contactForm');
        if (paymentForm) {
          paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Your submit handling code here
            console.log('Form submitted!');
          });
        
        }
     

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Validate form
    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent 
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent ;
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent ;
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent ;
        valid = false;
    }

    if (valid) {
        // Submit form or send data to server
        alert('Thank you for reaching out! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

  // Smooth scrolling effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
