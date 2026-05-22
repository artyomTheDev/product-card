//задание 7.2 фильтрация массива

import { comments } from './comments.js';

const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const newNumbers = numbers.filter( x => x >= 5);

console.log(newNumbers);

//задание 7.3 проверка на наличие сущности в массиве

const birds = ['синица', 'воробей', 'сова', 'петух', 'пингвин', 'соловей', 'ястреб', 'ворон', 'сойка', 'орёл', 'кукушка', 'голубь'];

function isItInMassive(item) {
    const checkResult = birds.filter(bird => item === bird)
    console.log(checkResult)
}

isItInMassive('ястреб');

//задание 7.4 функция, разворачивающая массив

function reverseMassive(massive) {
    return massive.reverse();
}

//задание 7.6 и 7.7 комментарии, которые содержат .com

function mailFilter(massive) {
    // берём все комментарии и сравниваем домен почты с доменом .com и возвращаем значение
    const mailWithCom = massive.filter( email => email.email.includes('.com') )
    console.log(mailWithCom);
}

//задание 7.8 перебор массива и изменение postId

function postIdChanger(massive) {
    const changedIdMassive = massive.map( object =>  ({
        ...object,
        postId: object.id <5 ? 2 : 1
    }))
    console.log(changedIdMassive);
}

//задание 7.9 перебор массива и отображение id & name

function onlyIdAndName(massive) {
    const idAndNameMassive = massive.map( object => ({
        id: object.id,
        name: object.name
    }))
    console.log(idAndNameMassive)
}

//задание 7.10 перебор массива с добавлением нового ключа и применение тернарного оператора

function isInvalidAdding(massive) {
    const changedMassive = massive.map( object => ({
        ...object,
        isInvalid: object.body.length >= 180
    }))
    console.log(changedMassive)
}

//задание 7.11 вывод массива почт с помощью reduce

