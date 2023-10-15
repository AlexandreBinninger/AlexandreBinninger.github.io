const hobbies = [
    "mathematics",
    "calisthenics",
    "programming",
    "philosophy",
    "video games",
    "digital art",
    "A.I.",
    "languages"
];
const element = document.querySelector(".hobbies");
let currentHobbyIndex = 0;
let currentText = "";

function typeHobby() {
    if (currentText.length < hobbies[currentHobbyIndex].length) {
        currentText += hobbies[currentHobbyIndex].charAt(currentText.length);
        element.textContent = currentText;
        setTimeout(typeHobby, 150); // Adjust the typing speed here
    } else {
        setTimeout(deleteHobby, 1000); // Adjust the delay before deleting here
    }
}

function deleteHobby() {
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        element.textContent = currentText;
        setTimeout(deleteHobby, 100); // Adjust the deleting speed here
    } else {
        currentHobbyIndex = (currentHobbyIndex + 1) % hobbies.length;
        setTimeout(typeHobby, 500); // Adjust the delay before typing the next hobby here
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeHobby();
});