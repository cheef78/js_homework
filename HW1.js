"use strict";
/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let number = prompt('В диапазоне от 2 до N будут выведены все простые числа. Введите значение границы диапазона больше 0. N = ');

    

function simpleNumber (number)
{
    while(true){
        if (isNaN(number) == true || number <= 1)  {
        alert(`Вы ввели нечисловое значение или число меньше 2. Это недопустимо !!!!`);
        }
        break;
    }
    let simpNumbs = []
    let k = 0;
    if (number == 2) {
        simpNumbs[k] = 2;
        alert(`В выбранном вами диапазоне от 2 до ${number}, простыми являются числа ${simpNumbs}`);
            }
        
    else {
        let i =2;
        while (i<= number) {
            let n = parseInt(number**0.5)+1;
            let j=2;
            while (j<= n) {
                if 




            }
            
            
        }
        
        
        }
    
}

simpleNumber (number) 


    





