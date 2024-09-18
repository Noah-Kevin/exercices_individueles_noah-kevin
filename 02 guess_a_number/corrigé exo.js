function userNumber(score) {
    let userNumber = prompt(`J2: Essai n°${score} Devinez le nombre:`);
    console.log("essaie prompt : " + userNumber);
    return userNumber
}

function initialNumber() {
    let number
    do {
        number = prompt("J1: Chiffre entre 0 et 50");
        console.log("pas compris entre 0 et 50")
    } while (number < 0 || number > 50)
    console.log("nombre à deviner : " + number);
    return number
}

function didIWin(givenNumber, guess) {
    if (givenNumber < guess) {
        alert("Plus grand");
        return false;
    } else if (givenNumber > guess) {
        alert("Plus petit");
        return false;
    } else {
        alert("Bravo ! Tu as trouvé le bon nombre.");
        return true;
    }
}

function gamePlay() {   
    let givenNumber = -1
    let result = false
    let numberToGuess = initialNumber()
    let score = 0
    while (result !== true && score <= 5) {
        givenNumber = userNumber(score)
        result = didIWin(givenNumber, numberToGuess)
        score++
        console.log(score)
    }
    if (result == false) {
        alert("T'as perdu !")
        console.log("T'as perdu")
    }
    console.log(result)
    console.log("test gameplay : ", givenNumber)

}

gamePlay()