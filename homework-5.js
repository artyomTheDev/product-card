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

function productPurchase(currentBalance) {
    const product = 'Торт';
    const price = 350;
if (currentBalance > price) {
    console.log(`${ product } приобретён. Спасибо за покупку!`)
} else {
    const balanceDifference = price - currentBalance;
    console.log(`Вам не хватает ${balanceDifference}$, пополните баланс`)
}
}
