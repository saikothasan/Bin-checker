document.getElementById('checkBinButton').addEventListener('click', function() {
    const bin = document.getElementById('binInput').value;
    const resultDiv = document.getElementById('result');

    if (!bin) {
        resultDiv.innerHTML = '<p class="text-danger">Please enter a BIN.</p>';
        return;
    }

    fetch(`https://binlist.shdc.workers.dev/?bin=${bin}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <h2 class="text-center">BIN Information</h2>
                <p><strong>BIN:</strong> ${data.BIN}</p>
                <p><strong>Brand:</strong> ${data.Brand}</p>
                <p><strong>Type:</strong> ${data.Type}</p>
                <p><strong>Category:</strong> ${data.Category}</p>
                <p><strong>Issuer:</strong> ${data.Issuer}</p>
                <p><strong>Issuer Phone:</strong> ${data.IssuerPhone}</p>
                <p><strong>Issuer URL:</strong> <a href="${data.isoCode2}" target="_blank">${data.isoCode2}</a></p>
                <p><strong>Country Code:</strong> ${data.isoCode3}</p>
                <p><strong>Country Name:</strong> ${data.CountryName}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
});
