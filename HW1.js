"use strict";
/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let number = prompt('В диапазоне от 2 до N будут выведены все простые числа. Введите значение границы диапазона больше 1. N = ');

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
                        /*alert(`Текущее число =  ${i} Максимальный делитель =  ${divides} Текущий делитель =  ${j} Текущий остаток =  ${i % j} Текущее значение счетчиков 0 остатков от деления =  ${zeroCount}`);
                        */
                    }
                    else {
                        /*alert(`Текущее число =  ${i} Максимальный делитель =  ${divides} Текущий делитель =  ${j} Текущий остаток =  ${i % j} Текущее значение счетчиков 0 остатков от деления =  ${zeroCount}`);
                        */
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

simpleNumber (number) 