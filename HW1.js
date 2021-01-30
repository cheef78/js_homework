"use strict";
/*если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/


let x = parseFloat(prompt ('Введите любое число Х = '));
let y = parseFloat(prompt ('Введите любое число У = '));
if (x >= 0 & y >= 0)
    alert("x и y больше 0, поэтому определяем их разность = " + (x-y));
else if ( x < 0 & y < 0)
    alert( "x и y меньше 0, поэтому определяем их произведение = " + (x*y));
else
    alert( "x и y разных знаков, поэтому определяем их сумму = " + (x+y));

/*Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.*/

let a = parseInt(prompt ('Введите любое число в диапазоне от 0 до 15 '));
let b = [];

switch (a){
    case 0:
        for (let i = 0; i < (16-a); i++) {
             b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 1:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 2:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;  
    case 3:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 4:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 5:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 6:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 7:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 8:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 9:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 10:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 11:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 12:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 13:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 14:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    case 15:
        for (let i = 0; i < (16-a); i++) {
            b[i]=(i+a);}
    alert( "Ряд чисел от a = " + a + " до 15 = " + b);
    break;
    default:
        alert( "Вы ввели число вне диапазона, или ввели не число");
    break;
    }

/*
Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return .
*/    
function summa (x, y)
{
return (x + y);
}

function divide (x, y)
{
return (x / y);
}

function difrent (x, y)
{
return (x - y);
}

function multuply (x, y)
{
return (x * y);
}

/*
Реализовать функцию с тремя параметрами: f unction mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch ).
*/  

let num1 = parseFloat(prompt ('Введите любое число Х = '));
let num2 = parseFloat(prompt ('Введите любое число У = '));
let operation = String(prompt ('Выберите тип операции над введенными числами " + " - сложение, " - " - вычитание, " / " - деление, " * " - умножение '));

function mathOperation (num1, num2, operation)
{
    switch (operation){
        case '+':
            return summa (num1,num2);
        break;
        case '-':
            return difrent (num1,num2);  
        break;
        case '/':
            return divide (num1,num2);
        break;
        case '*':
            return multuply (num1,num2);
        break;
        default:
            return 'Ошибка ввода данных';
        break;
    }    
}

alert( `Результат выбранной вами операции над введенными числами ${num1} ${operation} ${num2} = ${mathOperation(num1, num2, operation)}`);
