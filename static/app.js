document.getElementById('qa-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const story = document.getElementById('story').value;
    const query = document.getElementById('query').value;

    // Send a POST request to the /predict endpoint
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'story': story,
            'query': query
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.answer) {
            document.getElementById('answer-section').style.display = 'block';
            document.getElementById('answer').innerText = data.answer;
        } else if (data.error) {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});