// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Subscribing...';
        submitButton.classList.add('loading');
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Thanks for subscribing!';
            form.appendChild(successMessage);
            successMessage.style.display = 'block';
            
            // Clear form
            form.reset();
        } catch (error) {
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error';
            errorMessage.textContent = 'Something went wrong. Please try again.';
            form.appendChild(errorMessage);
            errorMessage.style.display = 'block';
        } finally {
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.classList.remove('loading');
        }
    });
});