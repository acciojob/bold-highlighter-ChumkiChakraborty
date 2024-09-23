function highlight() {
    // Select all <strong> elements and change their color to green
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all <strong> elements and revert their color to black
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}

// Add event listeners to the link for mouseover and mouseout events
const highlightLink = document.getElementById('highlightLink');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
