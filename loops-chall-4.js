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