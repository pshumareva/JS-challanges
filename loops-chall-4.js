//  for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
//  }

// const jonas = [
//   "Jonas",
//   "Lastname",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// let types = [];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue; //skips everything which is not a string
//   console.log(jonas[i]);
// }

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break; //when it reaches a number it stops
//   console.log(jonas[i]);
// }

// // Looping backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log("backwards", jonas[i]);
// }

// //Nested loops
// for (let exercise = 1; exercise <= 3; exercise++){
//   console.log(`Starting exercise ${exercise}`)
//   for (let rep= 1; rep <= 5; rep++){
//     console.log(`Lifting weights repetition ${rep} `)
//   }
// }

//WHILE LOOP -is for whenever you dont know how many iterations you will have
// let rep = 1;
// while (rep <= 10){
//   console.log(`WHILE: Lifting weights repetition ${rep} `)
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6){
//   console.log(dice)
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

//CODING CHALLENGE
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

const calcAverage = function () {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
  }
  let average = sum / totals.length
  console.log(average)
  return average;
};
calcAverage(totals);
