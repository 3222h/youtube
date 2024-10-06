document.addEventListener('DOMContentLoaded', function() {
  const ipField = document.getElementById('ip');
  const countryField = document.getElementById('country');

  // Mapping of country codes to full country names
  const countryNames = {
    "IN": "India",
    "US": "United States",
    "GB": "United Kingdom",
    // Add more countries as needed
  };

  // Fetch IP information from the API using your token
  fetch('https://ipinfo.io/json?token=4cc07ac45e4848')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const countryCode = data.country;

      // Update the UI with the fetched details
      ipField.textContent = ip;

      // Display the full country name using the country code
      const fullCountryName = countryNames[countryCode] || countryCode;  // Default to code if name not found
      countryField.textContent = fullCountryName;
    })
    .catch(error => {
      ipField.textContent = 'Error fetching IP';
      console.error(error);
    });
});
