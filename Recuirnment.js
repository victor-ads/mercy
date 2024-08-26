// formValidation.js
document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('recruitmentForm');
    if (paymentForm) {
      paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Your submit handling code here
        console.log('Form submitted!');
      });
    } 
// Form validation
 
  document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
});

    document.addEventListener('DOMContentLoaded', function() {
        const phoneInput = document.getElementById('phone');
    });
        document.addEventListener('DOMContentLoaded', function() {
            const emailInput = document.getElementById('email');
        });
            document.addEventListener('DOMContentLoaded', function() {
                const specializationInput = document.getElementById('specialization');
            });




document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const image = document.getElementById('image').files[0];
    // Rest of your code
});




document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const cv = document.getElementById('cv').files[0];
    // Rest of your code
});




document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const idCard = document.getElementById('idCard').files[0];
    // Rest of your code
});




document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    
    const terms = document.getElementById('terms').checked;
    // Rest of your code
});



if (!name || !phone || !email || !specialization || !image || !cv || !idCard || !terms) {
   
    return;
}

// Further validation if needed
const phonePattern = /^\d{10,15}$/;
if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
}

// Handle form data submission, e.g., sending it to a server
// Here you can add your AJAX call or form data processing

alert('Form submitted successfully!');

// Redirect to homepage after form submission
window.location.href = 'index.html'; // Replace 'index.html' with the actual homepage URL
});
