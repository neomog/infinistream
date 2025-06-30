// Form handling
document.getElementById('job-order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    saveJobOrder();
});

function saveJobOrder() {
    // Get form data
    const formData = {
        customerName: document.getElementById('customer-name').value,
        // other form fields
    };
    
    // Save to localStorage
    const jobOrders = getJobOrders();
    const jobId = 'JOB-' + Date.now();
    jobOrders[jobId] = formData;
    saveJobOrders(jobOrders);
    
    alert('Job order saved!');
}

function generateJobOrder() {
    // Generate printable version
    const jobId = 'JOB-' + Date.now();
    window.location.href = `view.html?id=${jobId}`;
}