// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.style.maxHeight = null;
                    q.querySelector('i').classList.remove('fa-chevron-up');
                    q.querySelector('i').classList.add('fa-chevron-down');
                }
            });
            
            // Toggle current FAQ
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    
    // Form Submission Handling
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual fetch/AJAX call)
            setTimeout(() => {
                // Reset button
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                
                // Show success message if exists
                const successMessage = document.getElementById('success-message');
                if (successMessage) {
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    // Scroll to success message
                    successMessage.scrollIntoView({ behavior: 'smooth' });
                }
                
                // For demo purposes only - in real implementation, handle actual form submission
                console.log('Form submitted', Object.fromEntries(formData));
            }, 1500);
        });
    });
    
    // Service Category Navigation
    const serviceCategories = document.querySelectorAll('.service-categories .category');
    
    if (serviceCategories.length > 0) {
        serviceCategories.forEach(category => {
            category.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all categories
                serviceCategories.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked category
                this.classList.add('active');
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    
    // Social Media Redirects
    const socialLinks = document.querySelectorAll('.social-links a, .social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            
            // Track social clicks (you would replace with your actual analytics)
            console.log('Social link clicked:', url);
            
            // Open in new tab
            window.open(url, '_blank');
        });
    });
    
    // WhatsApp Click Tracking
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track WhatsApp clicks
            console.log('WhatsApp button clicked');
            // In a real implementation, you might send this to Google Analytics
        });
    });
});