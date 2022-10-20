var arrOne = [3, 5, 3];
var arrTwo = [3, 18, 3];

console.log(arrOne.sort());

console.log(
  arrTwo.sort((a, b) => {
    return b - a;
  })
);

console.log(
  arrTwo.sort((a, b) => {
    return a - b;
  })
);

var people = [
  {
    name: "Tyler",
    age: 14,
  },
  {
    name: "Bob",
    age: 19,
  },
  {
    name: "Jon",
    age: 34,
  },
  {
    name: "Doe",
    age: 4,
  },
];

/* Acc oder by age */
console.log(
  people.sort((a, b) => {
    return a.age - b.age;
  })
);
