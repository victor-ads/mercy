document.addEventListener('DOMContentLoaded', function() {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const price = urlParams.get('price');

    // Form elements
    const engineerNameInput = document.getElementById('engineer-name');
    const amountInput = document.getElementById('amount');
    const expectedAmountInput = document.getElementById('expected-amount');
    const errorMessage = document.getElementById('error-message');
    const paymentForm = document.getElementById('payment-form');

    // Populate the form fields with the retrieved values
    engineerNameInput.value = name;
    amountInput.value = price.replace(/[^0-9.-]+/g, ""); // Remove currency symbols for input
    expectedAmountInput.value = price.replace(/[^0-9.-]+/g, ""); // Set the hidden expected amount

    // Handle form submission
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredAmount = parseFloat(amountInput.value.replace(/[^0-9.-]+/g, ""));
        const expectedAmount = parseFloat(expectedAmountInput.value.replace(/[^0-9.-]+/g, ""));
        
        // Validate amount
        if (enteredAmount !== expectedAmount) {
            errorMessage.textContent = 'Invalid amount. Please enter the exact amount.';
        } else {
            errorMessage.textContent = '';
            // Construct the Paystack payment URL
            const paymentUrl = `https://paystack.com/pay/l5833s-aak?amount=${enteredAmount * 100}&email=customer@example.com&name=${encodeURIComponent(name)}`;
            // Redirect to Paystack payment page
            window.location.href = paymentUrl;
        }
    });
});
