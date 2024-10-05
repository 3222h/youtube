document.addEventListener('DOMContentLoaded', () => {
    // Get the user's IP information
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            document.getElementById('ip').textContent = ip;
            return fetch(`https://ipapi.co/${ip}/json/`);
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-type').textContent = data.org || 'N/A';
            document.getElementById('country').textContent = data.country_name || 'N/A';
            document.getElementById('browser-timezone').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
        })
        .catch(error => {
            console.error('Error fetching IP information:', error);
        });
});
