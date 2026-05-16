function actualWeather( city, temperature ) {
    console.log(`Сейчас в городе ${ city } температура - ${ temperature } по Цельсию`)
}

const lightSpeed = 299792458;

function speedTest(currentSpeed) {
    if (currentSpeed > lightSpeed) {
        console.log('Сверхсветовая скорость')
    } else if (currentSpeed < lightSpeed) {
        console.log('Субсветовая скорость')
    } else if (currentSpeed === lightSpeed) {
        console.log('Равна скорости света')
    }
}


const product = 'Торт';
const price = 350;

function productPurchase(currentBalance) {
if (currentBalance > price) {
    console.log(`${ product } приобретён. Спасибо за покупку!`)
} else {
    const balanceDifference = price - currentBalance;
    console.log(`Вам не хватает ${balanceDifference}$, пополните баланс`)
}
}

const clothesForWinter = ['куртка ', ' свитер '];
const clothesForSummer = ['футболка ', ' шорты '];
const clothesForDesert = ['верблюд', ' бурдюк', ' панамка']

function weatherAdvisor(currentTemperature) {
    if (currentTemperature <= 0) {
        console.log(`на улице холодно, одевайся теплее! здесь понадобятся ${clothesForWinter}`)
    } else if (currentTemperature > 0 && currentTemperature < 20){
        console.log(`на улице нормально, одейвайся на свой вкус. лучше всего подойдут ${clothesForSummer}`)
    } else if (currentTemperature > 20) {
        console.log(`на улице совсем жарко, лучше не выходить! или бери с собой охладительный напиток. тебе может понадобиться ${clothesForDesert}`)
    }
}

weatherAdvisor(55);