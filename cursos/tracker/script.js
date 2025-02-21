document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Usar libphonenumber-js para validar y obtener información
    const { parsePhoneNumberFromString } = libphonenumber;

    try {
        const phoneNumberInfo = parsePhoneNumberFromString(phoneNumber);

        if (!phoneNumberInfo || !phoneNumberInfo.isValid()) {
            document.getElementById('result').innerText = 'Invalid phone number. Please enter a valid number.';
            return;
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p><strong>Country:</strong> ${phoneNumberInfo.country || 'N/A'}</p>
            <p><strong>Country Calling Code:</strong> ${phoneNumberInfo.countryCallingCode || 'N/A'}</p>
            <p><strong>National Number:</strong> ${phoneNumberInfo.nationalNumber || 'N/A'}</p>
            <p><strong>International Format:</strong> ${phoneNumberInfo.formatInternational() || 'N/A'}</p>
            <p><strong>National Format:</strong> ${phoneNumberInfo.formatNational() || 'N/A'}</p>
            <p><strong>Possible:</strong> ${phoneNumberInfo.isPossible() ? 'Yes' : 'No'}</p>
            <p><strong>Valid:</strong> ${phoneNumberInfo.isValid() ? 'Yes' : 'No'}</p>
            <p><strong>Type:</strong> ${phoneNumberInfo.getType() || 'N/A'}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'There was an error processing the phone number.';
    }
});