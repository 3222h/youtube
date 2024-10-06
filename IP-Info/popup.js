document.addEventListener('DOMContentLoaded', function() {
  const ipField = document.getElementById('ip');
  const countryField = document.getElementById('country');
  const ipTypeField = document.getElementById('ip-type');
  const flagField = document.getElementById('flag');

  // Fetch IP information from the API using your token
  fetch('https://ipinfo.io/json?token=4cc07ac45e4848')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const country = data.country;
      const org = data.org;

      // Update the UI with the fetched details
      ipField.textContent = ip;
      countryField.textContent = country;
      flagField.innerHTML = `<img src="https://www.countryflags.io/${country}/shiny/64.png">`;

      // Determine the IP type based on organization data
      let ipType = 'Unknown';
      if (org.toLowerCase().includes('vpn')) {
        ipType = 'VPN IP';
      } else if (org.toLowerCase().includes('business')) {
        ipType = 'Business IP';
      } else if (org.toLowerCase().includes('residential')) {
        ipType = 'Residential IP';
      } else if (org.toLowerCase().includes('datacenter')) {
        ipType = 'Datacenter IP';
      }

      ipTypeField.textContent = ipType;
    })
    .catch(error => {
      ipField.textContent = 'Error fetching IP';
      console.error(error);
    });
});
