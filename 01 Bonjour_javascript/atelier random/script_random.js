const values = ["toto", "tata", "tutu"];

//returns an integer between 0 .. (max - 1)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(randomIndex); // 0 ou 1 ou 2
// console.log(values[randomIndex]); // undefined
function displayRandomText() {
  const randomIndex = getRandomInt(values.length);
  document.querySelector(".mon-paragraphe").innerText = values[randomIndex];
}
let conteneurImage = document.querySelector('img[src=""]');
conteneurImage.src =
  "http://pluspng.com/img-png/dog-png-transparent-background-puppy-png-image-900.png";
