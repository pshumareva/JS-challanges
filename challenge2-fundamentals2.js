//2 ways of creating an array
const friends = ["Michael", "Steven", "Peter"]; //literal syntax
//OR
const years = new Array(1991, 1995, 1993);

//mutating the array
friends[2] = "Jay"; //Replacing Peter with Jay
//ONLY PRIMITIVE VALUES CAN NOT BE MUTATED USING CONST, which meants arrays can mutate even if they're declared with a const, but cannot replace the entire array;
const lastName = "ThisGuysLastName";
const jonas = ["Jonas", lastName, 2037 - 1991];

//Array methods
friends.push("Jay"); //Adds onto end of array;
friends.unshift("George"); // Adds onto beginning of array;
friends.pop(); //Remove last element of an array; Returns the removed element
friends.shift(); //Removes first element of an array;

friends.indexOf("Michael"); // Gives you index of the element;
//If we try to remove an element that is not existant in the array it returns -1;
friends.includes("Michael"); // Will return true or false; uses strict equality;

// CODING CHALLENGE

const calcTip = (bills) => {
  let tip;
  if (value >= 50 && value <= 300) {
    tip = value * 0.15;
  } else {
    tip = value * 0.2;
  }

};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//And this is why we use FOR LOOP, to shorten this madness;
