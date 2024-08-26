

document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('proceed-to-payment');
    if (paymentForm) {
        paymentForm.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const form = document.getElementById('booking-form');
            if (form.checkValidity()) {
                window.location.href = 'payment.html'; // Redirect to payment.html if form is valid
            } else {
                form.reportValidity(); // Show validation messages if form is invalid
            }
        });
    }
});
