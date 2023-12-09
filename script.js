let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    showImage(currentImageIndex);
});

function prevImage() {
    showImage(currentImageIndex - 1);
}

function nextImage() {
    showImage(currentImageIndex + 1);
}

function showImage(index) {
    const images = document.querySelectorAll('.image-box img');
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }

    images.forEach((img, i) => {
        img.style.display = i === currentImageIndex ? 'block' : 'none';
    });
}

// Toggle Dark Mode
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    console.log('Dark mode toggled');
    document.body.classList.toggle('dark-mode');
});

// Toggle Text Size
document.getElementById('toggle-text-size').addEventListener('click', function() {
    document.body.classList.toggle('large-text');
});

// Set up Dark Mode and Large Text CSS when the classes are toggled
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeStyle = document.createElement('style');
    darkModeStyle.innerHTML = `
        body.dark-mode, body.dark-mode nav, body.dark-mode header, body.dark-mode footer {
            background-color: #000000; /* Black background */
            color: #9AC1D9; /* Text color */
        }

        body.dark-mode a, body.dark-mode nav a:hover, body.dark-mode .dropdown-content a:hover {
            color: #9AC1D9; /* Text color for links */
        }
        
        body.dark-mode .dropdown-content, body.dark-mode .settings-content {
            background-color: #1a1a1a; /* Slightly lighter black for dropdown background */
        }
    `;
    document.head.appendChild(darkModeStyle);

    const largeTextStyle = document.createElement('style');
    largeTextStyle.innerHTML = `
        body.large-text {
            font-size: 1.2em; /* Increase text size */
        }
    `;
    document.head.appendChild(largeTextStyle);
});


document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from submitting the traditional way

    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2); // Converts height to meters and calculates BMI

    var result = `Your BMI is ${bmi}.`;
    

    document.getElementById('bmi-result').innerText = result;
});

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'A' && activeElement.href) {
            window.location = activeElement.href;
        }
    }
});