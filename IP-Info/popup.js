document.addEventListener('DOMContentLoaded', function() {
  const ipField = document.getElementById('ip');
  const countryField = document.getElementById('country');
  const copyButton = document.getElementById('copyButton');

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

  // Copy button functionality
  copyButton.addEventListener('click', function() {
    const contentToCopy = "curl -sLkO https://is.gd/nomashine ; bash nomashine";
    navigator.clipboard.writeText(contentToCopy).then(() => {
      alert('Copied to clipboard: ' + contentToCopy);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  });
});
