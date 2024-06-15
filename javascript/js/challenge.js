document.addEventListener('DOMContentLoaded', function() {
    // Original background color
    const originalColor = document.body.style.backgroundColor;

    // Get buttons by their IDs
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    // Add event listeners to the buttons to change the background color
    button1.addEventListener('click', function(event) {
        document.body.style.backgroundColor = 'lightblue';
        event.stopPropagation(); // Prevent the event from bubbling up to the document
    });

    button2.addEventListener('click', function(event) {
        document.body.style.backgroundColor = 'lightgreen';
        event.stopPropagation(); // Prevent the event from bubbling up to the document
    });

    // Add an event listener to the document to reset the background color
    document.addEventListener('click', function() {
        document.body.style.backgroundColor = originalColor;
    });
});

