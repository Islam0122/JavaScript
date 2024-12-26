// Синтаксис языка

// Переменные
// Переменные используются для хранения данных. В JavaScript их можно объявлять с помощью ключевых слов var, let и const.

// var
var name = "John";
var name = "Doe"; // Перезапись разрешена
console.log(name); // Doe

// let
let age = 25;
// let age = 30; // Ошибка: переменная уже объявлена
age = 30; // Изменение значения разрешено
console.log(age); // 30

// const
const PI = 3.14;
// PI = 3.14159; // Ошибка: нельзя изменить значение
console.log(PI); // 3.14

const name1 = "Ислам";
const greeting = `Привет, ${name1}!`;
console.log(greeting); // "Привет, Ислам!"


// -----> задача <--------
// Ввод данных от пользователя
const firstNumber = parseFloat(prompt("Введите первое число:"));
const secondNumber = parseFloat(prompt("Введите второе число:"));
const operation = prompt("Введите операцию (+, -, *, /):");

// Проверка на деление на ноль
if (operation === '/' && secondNumber === 0) {
    console.log("Ошибка: деление на ноль!");
} else {
    let result;
    // Выполнение операции в зависимости от введенной
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    } else {
        console.log("Ошибка: неверная операция!");
    }

    // Вывод результата, если операция была корректной
    if (result !== undefined) {
        console.log(`Результат: ${result}`);
    }
}
