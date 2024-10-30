$(document).ready(function() {
    $('#checkBinButton').on('click', function() {
        var binInput = $('#binInput').val();
        if (binInput.length === 6) {
            $.ajax({
                type: 'GET',
                url: 'https://binlist.shdc.workers.dev/?bin=' + binInput,
                dataType: 'json',
                success: function(data) {
                    var resultHtml = '<h2 class="text-center">BIN Information</h2>';
                    resultHtml += '<p><strong>BIN:</strong> ' + data.BIN + '</p>';
                    resultHtml += '<p><strong>Brand:</strong> ' + data.Brand + '</p>';
                    resultHtml += '<p><strong>Type:</strong> ' + data.Type + '</p>';
                    resultHtml += '<p><strong>Category:</strong> ' + data.Category + '</p>';
                    resultHtml += '<p><strong>Issuer:</strong> ' + data.Issuer + '</p>';
                    resultHtml += '<p><strong>Issuer Phone:</strong> ' + data.IssuerPhone + '</p>';
                    resultHtml += '<p><strong>Issuer URL:</strong> <a href="' + data.IsoCode2 + '" target="_blank">' + data.IsoCode2 + '</a></p>';
                    resultHtml += '<p><strong>Country Code:</strong> ' + data.isoCode3 + '</p>';
                    resultHtml += '<p><strong>Country Name:</strong> ' + data.CountryName + '</p>';
                    $('#result').html(resultHtml);
                },
                error: function(xhr, status, error) {
                    $('#result').html('<p class="text-danger">Error: ' + error + '</p>');
                }
            });
        } else {
            $('#result').html('<p class="text-danger">Please enter a valid 6-digit BIN.</p>');
        }
    });
});
