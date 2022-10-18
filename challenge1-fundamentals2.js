"use strict";

const calcAverage = (arg1,arg2,arg3) => (arg1 + arg2 + arg3) / 3; 

const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);

const checkWinner = (points1 , points2) => {
    if (points1 > points2){
        console.log(`Dolphins win (${points1} vs ${points2})`)
    } else {
        console.log(`Koalas win (${points1} vs ${points2})`)
    }
}