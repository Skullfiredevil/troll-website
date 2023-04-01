const generateButton = document.querySelector("#generate-button");
const generatedImage = document.querySelector("#generated-image");
const colorButton = document.querySelector("#color-button");
const randomText = document.querySelector("#random-text");

// image generator
const images = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];
generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  generatedImage.src = randomImage;
});

// background color
colorButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
});

// word generator
function getRandomWords() {
  Promise.all([
    fetch("https://random-word-api.herokuapp.com/word"),
    fetch("https://random-word-api.herokuapp.com/word")
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const randomWords = data.join(" ");
      randomText.textContent = randomWords;
    })
    .catch(error => console.error(error));
}

setInterval(() => {
  getRandomWords();
}, 2000);
