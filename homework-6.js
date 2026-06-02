//задание 6.3 объект на основе моих данных

const infoAboutMe = {
    name: 'Артём',
    surname: 'Лебедев',
    email: 'oworer@gmail.com',
    work: 'ВТБ',
    age: 23,
    country: 'Россия',
    martialStatus: 'холост',
    language: ['русский',' французский', ' английский'],
    education: 'среднее общее образование',
    hobbies: [' спорт', ' программирование']
}

//задание 6.4 объект на основе автомобиля

const dreamCar = {
    mark: 'Nissan',
    model: 'GT-R',
    color: 'белый',
    vehicleYear: '2025',
    transmissionsType: 'автомат',
}

//задание 6.5 функция, проверяющая наличие максимальной скорости у объекта

function maxSpeedCheck(object) {
     return 'maxSpeed' in object? 'такое поле есть' : object.maxSpeed = '320 км/ч'
}

//задание 6.6 функция, которая выводит значение свойства объекта
function showObjectValue(object , feature) {
    console.log(object[feature])
}

//задание 6.7 массив с названиями продуктов

const products = ['кофе', 'молоко', 'печенье', 'салат айсберг', 'яйца', 'лосось', 'батат', 'манго'];

const library = [
    {
        bookName: '451 градус по Фаренгейту',
        author: 'Рэй Брэдбери',
        year: '1953',
        color: 'красный',
        genre: 'анти-утопия',
    },
    {
        bookName: 'Капитанская дочка',
        author: 'Александр Сергеевич Пушкин',
        year: '1836',
        color: 'жёлтый',
        genre: 'роман',
    },
    {
        bookName: 'Тартюф',
        author: 'Мольер',
        year: '1669',
        color: 'чёрно-белый',
        genre: 'комедия',
    },
];

const lostBook = {
    bookName: 'Дюймовочка',
    author: 'Ханс Христиан Андерсен',
    year: '1835',
    color: 'голубой',
    genre: 'сказка',
}

library.push(lostBook);

//задание 6.9 объединение двух массивов
const newBooks = [
    {
        bookName: 'Пацаны',
        author: 'Гарт Эннис, Дэрик Робертсон',
        year: '2006',
        color: 'белый',
        genre: 'комиксы',
    },
    {
        bookName: 'Человек-паук',
        author: 'Стэн Ли',
        year: '1962',
        color: 'белый',
        genre: 'комиксы',
    },
    {
        bookName: 'Супермен',
        author: 'Джо Шустер',
        year: '1938',
        color: 'оранжевый',
        genre: 'комиксы',
    }
];

const actualLibrary = [...library, ...newBooks];

function addFeatureToObjects(massive) {
    return massive.map( element => ({
        ...element,
        isRare: element.year > 2000
    }))
}

const updatedLibrary = addFeatureToObjects(actualLibrary);

