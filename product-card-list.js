export const allProductCards = [
    {
        id: 1,
        image:"./images/mousse.png",
        skinType:'Для нормальной кожи',
        title:'Увлажняющий мусс',
        description:'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
        composition:[
            'активные натуральные комплексы',
            'витамины С, А, РР, В И Е',
            'солнцезащитные компоненты'
        ],
        price: '2750 ₽',
    },
    {
        id: 2,
        image:'./images/mask.png',
        skinType:'Для нормальной кожи',
        title:'Увлажняющая маска',
        description:'Способствует удерживанию влаги в верхних слоях кожи.',
        composition:[
            'воски',
            'минералы',
            'масла'
        ],
        price: '3500 ₽',
    },
    {
        id: 3,
        image:'./images/gel.png',
        skinType:'Для нормальной кожи',
        title:'Гель для умывания',
        description:'Интенсивно очищает, не повреждает защитный барьер кожи.',
        composition:[
            'минералы',
            'витамины С, А, РР, В И Е',
            'солнцезащитные компоненты'
        ],
        price: '1650 ₽',
    },
    {
        id: 4,
        image:'./images/present-kit_1.png',
        skinType:'Для нормальной кожи',
        title:'Подарочный набор №1',
        description:'Набор, состоящий из увлажняющего крема и маски.',
        composition:[
            'воски',
            'минералы',
            'масла'
        ],
        price: '4750 ₽',
    },
    {
        id: 5,
        image:'./images/present-kit_2.png',
        skinType:'Для нормальной кожи',
        title:'Подарочный набор №5',
        description:'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
        composition:[
            'воски',
            'минералы',
            'масла'
        ],
        price: '7520 ₽',
    },
]

const productCardsTemplate = document.getElementById('product-cards');
const productCardsList = document.getElementById('product-cards-list');

allProductCards.forEach(card => {
    const productCardClone = productCardsTemplate.content.cloneNode(true);
    console.log(productCardClone.querySelector("#product-card-img"))
    productCardClone.querySelector(".product-card-img").src = card.image
    productCardClone.querySelector("#skinType").textContent = card.skinType
    productCardClone.querySelector("#title").textContent = card.title
    productCardClone.querySelector("#description").textContent = card.description
    productCardClone.querySelector("#composition").textContent = card.composition
    productCardClone.querySelector("#price").textContent = card.price
    productCardsList.append(productCardClone)
})

