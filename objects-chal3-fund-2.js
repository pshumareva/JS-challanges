const jonas = {
  firstName: "Jonas",
  lastName: "WhateverItIs",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: false,

  //   calcAge : function(birthYear) {
  //     return 2037 - birthYear
  //   }
  //   calcAge: function(){
  //     return 2037 - this.birthYear // this.birthyear = jonas.birthyear
  //     //any function thats attached to an object is called a method
  //   }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());

//exctracting data from object:
//dot notation
console.log(jonas.lastName);
//bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//in this case the dot notation wont work
// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
// // console.log(jonas.interestedIn) will return undefined
// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn])// returns teacher
// } else {
//     console.log('Wrong request!  Choose between firstName, lastName, age, job and friends')
// }

//adding something to an object
jonas.location = "Portugal";
jonas["twitter"] = "something";

//Challenge
//"Jonas has 3 friends and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
);

// CODING CHALLENGE 3
const guys = {
  mark: {
    firstName: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = (this.mass / this.height ** 2).toFixed(1);
      return  this.bmi;
    },
  },
  john: {
    firstName: "John",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
      return this.bmi;
    },
  },
};

if (guys.mark.calcBMI > guys.john.calcBMI) {
  console.log(
    `${guys.mark.firstName}'s BMI (${guys.mark.bmi}) is higher than ${
      guys.john.firstName
    }'s (${guys.john.bmi})`
  );
} else {
  console.log(
    `${guys.john.firstName}'s BMI (${guys.john.bmi}) is higher than ${
      guys.mark.firstName
    }'s (${guys.mark.bmi})`
  );
}
