"use strict";
let celsDegree = prompt('Введите значение температуры в градусах Цельсия');
let farenDegree;
//celsDegree = 15;
farenDegree = (9 / 5) * celsDegree + 32;
console.log(farenDegree);
alert ( `Значение температуры в градусах Цельсия = $ { celsDegree }  C`   +  ` \ nЗначение температуры в градусах Фаренгейта = $ { farenDegree }  F` );
