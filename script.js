// Смена цвета заднего фона первой карточки

const recolorFirstCardBtn = document.querySelector('#recolor-first-card-btn');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0000FF';

recolorFirstCardBtn.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueHashColor;
    console.log(allProductCards)
})

// Смена цвета всех карточек на зелёный

const greenHashColor = '#00FF44'

const allProductCards = document.querySelectorAll('.product-card');
const recolorAllCardsBtn = document.getElementById('recolor-all-cards-btn');

recolorAllCardsBtn.addEventListener('click', () => {
    allProductCards.forEach(
        card => card.style.backgroundColor = greenHashColor
    )
})

// Переход на страницу Google

const googleTransitionButton = document.getElementById('go-google-btn');
googleTransitionButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?')

    if (answer === true) {
        window.open('https://google.com');
    }
}

// Вывод содержимого в консоль

const text = document.querySelector('.product-title')

text.addEventListener("mouseover", () => {
    console.log(text.innerText);
});

// Смена цвета кнопки

const buttonColor = document.getElementById('change-btn-color');
let isBlue = false;

buttonColor.addEventListener('click', () => {
    isBlue = !isBlue;
    buttonColor.classList.toggle('blue-color', isBlue);
    buttonColor.classList.toggle('purple-color', !isBlue);
})