function submitForm() {
    const form = document.getElementById('userForm');
    const formData = new FormData(form);

    const data = {
        resourceType: "Patient",
        name: [
            {
                use: "official",
                text: formData.get('name'),
                family: formData.get('familyName')
            }
        ]
    }

    const request_parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:8080/fhir/Patient', request_parameters)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}
