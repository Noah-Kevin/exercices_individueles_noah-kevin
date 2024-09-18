let givenNumber = prompt("saissisez votre nombre"); //1ère etape

let result;
function didIWin(givenNumber) {
  // const plat = "kebab"
  console.log(plat);
  if (givenNumber < 22) {
    result = "plus grand";
  } else if (givenNumber > 22) {
    result = "plus petit";
  } else {
    result = "Bravo ! vous avez le nombre";
  }
  document.querySelector("h1").innerHTML
}

// function display(){
// console.log("display" + givenNumber)

// }

console.log(givenNumber);
didIWin();
alert(result);
display();

function gamePlay() {
  let givenNumb = -1
  let result = false 
  while(result !== true) {
    result = didWin(givenNumber)
  }
  console.log
}
