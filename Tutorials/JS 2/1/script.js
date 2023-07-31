
document.addEventListener('DOMContentLoaded', function () {
    
    const datetimeElement = document.getElementById('datetime');

   
    function updateDateTime() {
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString();
        datetimeElement.textContent = `Current Date: ${dateStr}, Time: ${timeStr}`;
    }

    
    updateDateTime();

   
    setInterval(updateDateTime, 1000);
});
