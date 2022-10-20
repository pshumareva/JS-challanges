//  for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}.`)
//  }

const jonas = [
  "Jonas",
  "Lastname",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

let types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
  types.push(typeof jonas[i]);
}
console.log(types);

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; //skips everything which is not a string
  console.log(jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break; //when it reaches a number it stops
  console.log(jonas[i]);
}

// Looping backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log("backwards", jonas[i]);
}

//Nested loops
for (let exercise = 1; exercise <= 3; exercise++){
  console.log(`Starting exercise ${exercise}`)
  for (let rep= 1; rep <= 5; rep++){
    console.log(`Lifting weights repetition ${rep} `)
  }
}
