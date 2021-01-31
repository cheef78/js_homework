"use strict";
/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let number = prompt('В диапазоне от 2 до N будут выведены все простые числа. Введите значение границы диапазона больше 0. N = ');
while(true){
    if (isNaN(number) == true) {
    alert(`Вы ввели нечисловое значение. Это недопустимо !!!!`);
    }
    break; 
}
    

function simpleNumber (number)
{
    let simpNumbs = []
    if (number <= 1) {
        alert(`Вы ввели значение границы меньше или = 1. Это недопустимо !!!!`);
        }
    
    else {
        let i =2;
        while (i<= number) {
            let n = parseInt(number**0.5)+1
            
            
        }
        
        alert(`В выбранном вами диапазоне от 0 до ${number}, простыми являются числа ${simpNumbs}`);
        }
}

simpleNumber (number) 


    





