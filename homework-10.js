import { allProductCards } from "./product-card-list.js";

const productCardsTemplate = document.getElementById('product-cards');
const productCardsList = document.getElementById('product-cards-list');


function getCardsCount() {

    let enteredNumber = prompt('Введите число от 1 до 5');

    if (enteredNumber < 1 || enteredNumber > 5 || enteredNumber === null || (isNaN(enteredNumber) === true)) {

        do {

            enteredNumber = prompt('Введённое значение не подходит, попробуйте другое')

        } while (enteredNumber < 1 || enteredNumber > 5 || enteredNumber === null || (isNaN(enteredNumber) === true))

    }

    return enteredNumber
}

const cardsCount = getCardsCount();

const newProductCardsList = allProductCards.slice(0, cardsCount)

function renderCards(cards) {
    cards.forEach(card => {
        const productCardClone = productCardsTemplate.content.cloneNode(true);
        productCardClone.querySelector(".product-card-img").src = card.image
        productCardClone.querySelector("#skinType").textContent = card.skinType
        productCardClone.querySelector("#title").textContent = card.title
        productCardClone.querySelector("#description").textContent = card.description
        productCardClone.querySelector("#composition").innerHTML = card.composition.map(element => `<li>${ element }</li>`).join('')
        productCardClone.querySelector("#price").textContent = card.price
        productCardsList.append(productCardClone)
    })
}

renderCards(newProductCardsList);

const getNameProduct = allProductCards.reduce((acc, product) => {
    const obj = {
        [product.title]: product.description
    }

    acc.push(obj);

    return acc;
}, [])

console.log(getNameProduct);