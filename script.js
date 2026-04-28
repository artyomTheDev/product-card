const recolorFirstCardBtn = document.querySelector('#recolor-first-card-btn');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = '#0000FF';

recolorFirstCardBtn.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueHashColor;
    console.log(allProductCards)
})

const greenHashColor = '#00FF44'

const allProductCards = document.querySelectorAll('.product-card');
const recolorAllCardsBtn = document.getElementById('recolor-all-cards-btn');

recolorAllCardsBtn.addEventListener('click', () => {
    allProductCards.forEach(
        card => card.style.backgroundColor = greenHashColor
    )
})

const googleTransitionButton = document.getElementById('go-google-btn');
googleTransitionButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?')

    if (answer === true) {
        window.open('https://google.com');
    }
}

const text = document.querySelector('.product-title')

text.addEventListener("mouseover", () => {
    console.log(text.innerText);
});
