document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real app, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show alert
    alert(`Thanks for your message, ${name}! We'll get back to you soon.`);
    
    // Reset form
    this.reset();
});