const student = {
  lastName: "Gerel",
  firstName: "Erdene",
  age: 17,
  hobby: ["video games", "cartoon", "piano"],
};

console.log(
  `${student.lastName} овогтой ${student.firstName} нь ${student.age} настай`
);

const data = [
  { gender: "M", firstName: "Dorj", lastName: "Bat", score: 80, age: 19 },
  { gender: "M", firstName: "Temka", lastName: "Bold", score: 98, age: 15 },
  { gender: "M", firstName: "Anira", lastName: "Tsetseg", score: 67, age: 99 },
  { gender: "F", firstName: "Anuka", lastName: "Temuulen", score: 88, age: 27 },
  { gender: "F", firstName: "Zulaa", lastName: "Binderya", score: 96, age: 45 },
  { gender: "F", firstName: "Oyuka", lastName: "Erdene", score: 76, age: 76 },
  { gender: "F", firstName: "Zaya", lastName: "Javhlan", score: 63, age: 19 },
  { gender: "M", firstName: "Munkh", lastName: "Dalai", score: 99, age: 44 },
  { gender: "F", firstName: "Saraa", lastName: "Purev", score: 84, age: 50 },
  { gender: "F", firstName: "Anujin", lastName: "Dulguun", score: 77, age: 12 },
];

//Gender M and F
function getCountByGender(list, gender) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].gender === gender) {
      count++;
    }
  }
  return count;
}
const femaleCount = getCountByGender(data, "F");
const maleCount = getCountByGender(data, "M");

console.log(`Niit ${femaleCount} emegtei, ${maleCount} eregtei baina`);

//Age range
function getCountByAgeRange(list, min, max) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= min && list[i].age < max) {
      count++;
    }
  }
  return count;
}

const childrenCount = getCountByAgeRange(data, 0, 18);
const youth = getCountByAgeRange(data, 18, 30);
const adult = getCountByAgeRange(data, 30, 55);
const elder = getCountByAgeRange(data, 55, 100);

console.log(
  `Niit:${childrenCount} huuhed, ${youth} zaluuchuud, ${adult} dund nasnii humuus, ${elder} ahmad nasnii humuus baina`
);

//Age range bagshiin uurchlulttei
// function CountByFieldValueRange(list, key, min, max) {
//   let count = 0;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i][key] >= min && list[i][key] < max) {
//       count++;
//     }
//   }
//   return count;
// }

// const childrenCount = CountByFieldValueRange(data,'age', 0, 18);
// const youth = CountByFieldValueRange(data, 'age', 18, 30);
// const adult = CountByFieldValueRange(data,'age', 30, 55);
// const elder = CountByFieldValueRange(data, 'age', 55, 100);

// console.log(
//   `Niit:${childrenCount} huuhed, ${youth} zaluuchuud, ${adult} dund nasnii humuus, ${elder} ahmad nasnii humuus baina`
// );

//By grade
// const totalA = CountByFieldValueRange(data, "grade", 90, 101);

//Random str hussen str utga-s haidag function
