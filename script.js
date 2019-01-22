const getQuote = document.querySelector('#get-quote');
const showQuote = document.querySelector('#show-quote');
const showImage = document.querySelector('#show-img');

getQuote.addEventListener('click', getFetches)

function fetchQuote() {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(data => data.json())
    .then(data => showQuote.innerText = data);
}

function fetchImage() {
  fetch('https://picsum.photos/450/?random')
    .then(data => showImage.innerHTML = `<img src="${data.url}" class="random-img">`);
}

function getFetches() {
  fetchImage();
  fetchQuote();
}