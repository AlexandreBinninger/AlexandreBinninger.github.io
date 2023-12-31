const hobbies = [
    "mathematics",
    "calisthenics",
    "programming",
    "philosophy",
    "video games",
    "digital art",
    "Gen A.I.",
    "languages"
];
const element = document.querySelector(".hobbies");
let currentHobbyIndex = 0;
let currentText = "";
let fontSizeRef = 0;

function DecreaseFontSize() {
    const container = document.querySelector('.hobbies-section');
    const fullText = document.querySelector('.hobbies-fulltext');
    let fontSize = parseFloat(window.getComputedStyle(fullText).fontSize);
    // Reduce font size until the full text (prefix + hobby) fits
    while (fullText.offsetWidth > container.offsetWidth && fontSize > 0) {
        fontSize -= 0.1; // Decrease step can be smaller for smoother adjustment
        fullText.style.fontSize = fontSize + 'px';
    }
}


function IncreaseFontSize() {
    const container = document.querySelector('.hobbies-section');
    const fullText = document.querySelector('.hobbies-fulltext');
    let fontSize = parseFloat(window.getComputedStyle(fullText).fontSize);
    // Reduce font size until the full text (prefix + hobby) fits
    while (fullText.offsetWidth < container.offsetWidth && fontSize < fontSizeRef) {
        fontSize += 0.1; // Decrease step can be smaller for smoother adjustment
        fullText.style.fontSize = fontSize + 'px';
    }
}

function typeHobby() {
    if (currentText.length < hobbies[currentHobbyIndex].length) {
        currentText += hobbies[currentHobbyIndex].charAt(currentText.length);
        element.textContent = currentText;
        DecreaseFontSize(); // Call font size adjustment here
        setTimeout(typeHobby, 150);
    } else {
        setTimeout(deleteHobby, 1000);
    }
}

function deleteHobby() {
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        element.textContent = currentText;
        IncreaseFontSize(); // Also call it here
        setTimeout(deleteHobby, 100);
    } else {
        currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length;
        setTimeout(typeHobby, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    window.onload = () => {
        const fullText = document.querySelector('.hobbies-fulltext');
        fontSizeRef = parseFloat(window.getComputedStyle(fullText).fontSize);
    }
    typeHobby();
});
