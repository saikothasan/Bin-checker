document.getElementById('check-bin').addEventListener('click', function () {
    const bin = document.getElementById('bin-input').value;
    fetch('bin-data.json')
        .then(response => response.json())
        .then(data => {
            const binInfo = data[bin];
            const resultDiv = document.getElementById('result');
            if (binInfo) {
                resultDiv.innerHTML = `<i class="fas fa-university"></i> Bank: ${binInfo.bank}<br><i class="fas fa-globe"></i> Country: ${binInfo.country}`;
            } else {
                resultDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> BIN not found';
            }
        })
        .catch(error => console.error('Error fetching BIN data:', error));
});
