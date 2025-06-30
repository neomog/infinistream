// Data storage functions
function getJobOrders() {
    return JSON.parse(localStorage.getItem('jobOrders')) || {};
}

function saveJobOrders(data) {
    localStorage.setItem('jobOrders', JSON.stringify(data));
}

function getJobOrderById(id) {
    const orders = getJobOrders();
    return orders[id];
}

// Navigation functions
function navigateToCreateJobOrder() {
    window.location.href = 'job-orders/create.html';
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(amount);
}