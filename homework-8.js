import { allProductCards } from "./product-card-list.js";

const productCardsTemplate = document.getElementById('product-cards');
const productCardsList = document.getElementById('product-cards-list');

allProductCards.forEach(card => {
    const productCardClone = productCardsTemplate.content.cloneNode(true);
    console.log(productCardClone.querySelector("#product-card-img"))
    productCardClone.querySelector(".product-card-img").src = card.image
    productCardClone.querySelector("#skinType").textContent = card.skinType
    productCardClone.querySelector("#title").textContent = card.title
    productCardClone.querySelector("#description").textContent = card.description
    productCardClone.querySelector("#composition").innerHTML = card.composition.map(element => `<li>${ element }</li>`).join('')
    productCardClone.querySelector("#price").textContent = card.price
    productCardsList.append(productCardClone)
})

const getNameProduct = allProductCards.reduce((acc, product) => {
    const obj = {
        [product.title]: product.description
    }

    acc.push(obj);

    return acc;
}, [])

console.log(getNameProduct);