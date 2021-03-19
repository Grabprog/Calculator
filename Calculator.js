// найти инпут1 по айди и записать в переменную
// найти инпут2 по айди и записать в переменную
// найти кнопку +
// создать ф-цию листенер, с реакцией на клик
// сказать кнопке: вызови эту ф-цию когда по тебе кликнут
// заполнить ф-цию листенер логикой
//      берем знач из инпут1 и записываем в переменную
//      берем знач из инпут2 и записываем в переменную
//      складываем 2 значения и записываем в переменную
//      алерт результата

// делаем аналогично для ост кнопок


var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


//plus button logic
var plusbutton = document.getElementById('plusbtn');
var OnClickPlusButton = function () {
    var value1 = input1.value;
    var value2 = input2.value;
    var numberValue1 = new Number(value1);
    var numberValue2 = new Number(value2);
    var resultValue = numberValue1 + numberValue2;


    window.alert(resultValue);
}
plusbutton.addEventListener('click', OnClickPlusButton);

//minus button logic
var minusbutton = document.getElementById('minusbtn');
var OnClickMinusButton = function () {
    var value1 = input1.value;
    var value2 = input2.value;
    var numberValue1 = new Number(value1);
    var numberValue2 = new Number(value2);
    var resultValue = numberValue1 - numberValue2;


    window.alert(resultValue);
}
minusbutton.addEventListener('click', OnClickMinusButton);

//multiply button logic
var multiplybutton = document.getElementById('multiplybtn');
var OnClickMultiplyButton = function () {
    var value1 = input1.value;
    var value2 = input2.value;
    var numberValue1 = new Number(value1);
    var numberValue2 = new Number(value2);
    var resultValue = numberValue1 * numberValue2;


    window.alert(resultValue);
}
multiplybutton.addEventListener('click', OnClickMultiplyButton);

//devide button logic
var devidebutton = document.getElementById('devidebtn');
var OnClickDevideButton = function () {
    var value1 = input1.value;
    var value2 = input2.value;
    var numberValue1 = new Number(value1);
    var numberValue2 = new Number(value2);
    var resultValue = numberValue1 / numberValue2;


    window.alert(resultValue);
}
devidebutton.addEventListener('click', OnClickDevideButton);


