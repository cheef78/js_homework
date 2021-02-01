"use strict";
/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

/* let number = prompt('В диапазоне от 2 до N будут выведены все простые числа. Введите значение границы диапазона больше 1. N = ');

function simpleNumber (number)
{
    let simpNumbs = []
    simpNumbs[0] = 2;
    
    while(true){
        if (isNaN(number) == true || number <= 1)  {
        alert(`Вы ввели нечисловое значение или число меньше 2. Это недопустимо !!!!`);
        break;
        }
        else if (number == 2) {
            alert(`В выбранном вами диапазоне от 2 до ${number}, простыми являются числа ${simpNumbs}`);
            break;
            }
        else {
                
            let divides = parseInt(number**0.5);
            for (let i=3; i <= number;i++) {
                let zeroCount = 0;
                for(let j = 2; j <= divides; j++) {
                    if (i % j == 0 & i != j  ) {
                        zeroCount++;
                    }
                }
                
                if (zeroCount == 0) {
                    simpNumbs.push(i);
                    }
                 
            }
           
            alert(`В выбранном вами диапазоне от 2 до ${number}, простыми являются числа ${simpNumbs}`);
            break;
        
        }

    }
    
}       

simpleNumber (number);  */

/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice , которая будет считать стоимость корзины.
*/

let basket = [];
basket = [
          ['apples',115,1.5],
          ['lemons',95,0.5],
          ['potatoo',35 ,5],
          ['onion', 25,2],
          ['carrot',45,3],
          ['pork',550,2],
          ['milk',76 ,2]
            ];

function countBasketPrice (basket){
    let totalMass = 0;
    let totalPrice = 0;
    let goodsName = []
    for (let i = 0; i < basket.length; i++){
        totalMass = totalMass + basket[i][2];
        totalPrice = totalPrice + basket[i][1]*basket[i][2];
        goodsName.push(basket[i][0])    
    }

    alert (`В вашй корзине находятся товары следующих наименований - ${goodsName}. Общая масса товаров в корзине = ${totalMass} кг. Общая стоимость товаров в корзине = ${totalPrice} руб.`)  
    
}

countBasketPrice (basket);