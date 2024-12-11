// Generoidaan sattuman varainen numero
const randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

// Valitaan elementit
const guessInput = document.getElementById("guess");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");

// Lisätään tapahtumankuuntelija arvauksen lähetyspainikkeelle
submitButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);

    // tarkistetaan käyttäjän laittama numero.
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Anna numero väliltä 1 ja 100.";
        return;
    }

    // Päivitetään yritysten määrää
    attempts++;

    // Tarkistetaan arvaus jos arvaus on oikea tulostetaan tulosten määrä ja se oikea numero, jos arvaus on väärä kerrotaan onko numero liian pieni vai iso
    if (userGuess === randomNumber) {
        feedback.textContent = `Onnittelut! Oikea numero oli ${randomNumber}. Löysit sen ${attempts} yrityksellä.`;
        submitButton.disabled = true;
        restartButton.classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Liian pieni! Kokeile isompaa numeroa.";
    } else {
        feedback.textContent = "Liian suuri! Kokeile pienempää numeroa.";
    }

    // Tyhjennetään syötekenttä
    guessInput.value = "";
});

// Lisätään tapahtumankuuntelija aloitusnapille
restartButton.addEventListener("click", () => {
    window.location.reload(); // Ladataan sivu uudelleen aloittaaksemme alusta
});
