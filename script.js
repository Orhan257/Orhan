// Start Button'a tıklanınca oyun ekranını açan işlev
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton'); // Start butonunu seçiyoruz
    const homeScreen = document.getElementById('homeScreen'); // Ana ekran
    const gameScreen = document.getElementById('gameScreen'); // Oyun ekranı

    // Start butonuna tıklama olayını dinliyoruz
    startButton.addEventListener('click', () => {
    startSection.style.display = 'none';
    gameSection.classList.add('active');
});

    startButton.addEventListener('click', () => {
        homeScreen.style.display = 'none'; // Ana ekranı gizle
        gameScreen.style.display = 'flex'; // Oyun ekranını göster
        console.log('Game Started! Welcome to the Choose Your Country screen!');
    });
});

// Oyuncunun bayrak seçmesi için işlev
function selectFlag(country) {
    const selectedFlagElement = document.getElementById('selectedFlag');
    selectedFlagElement.textContent = "Selected Flag: " + country; // Seçilen bayrağı göster
    console.log(country + " flag selected!");
}

// Start butonuna tıklanınca oyun ekranını açan işlev
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton'); // Start butonunu seçiyoruz
    const homeScreen = document.getElementById('homeScreen'); // Ana ekran
    const gameScreen = document.getElementById('gameScreen'); // Oyun ekranı

    // Start butonuna tıklama olayını dinliyoruz
    startButton.addEventListener('click', () => {
        homeScreen.style.display = 'none'; // Ana ekranı gizle
        gameScreen.style.display = 'flex'; // Oyun ekranını göster
        console.log('Game Started! Welcome to the Choose Your Country screen!');
    });
});
