//задание 7.2 фильтрация массива

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