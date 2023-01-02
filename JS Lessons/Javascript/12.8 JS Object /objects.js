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

//Age range bagshiin uurchilsun
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

//Search by letter
const result = [];
const query = "An";
for (let i = 0; i < data.length; i++) {
  const row = data[i];
  if (row.firstName.toLowerCase().includes(query.toLowerCase())) {
    result.push(row);
  }
}
console.log(result);

//Search by first letter
const results = [];
const queries = "Z";
for (let i = 0; i < data.length; i++) {
  const row = data[i];
  if (row.firstName[0].toLowerCase() === queries.toLowerCase()) {
    results.push(row);
  }
}
console.log(results);

//HW-SIMPLE OBJECT
let Dog = {
  breed: "Corgi",
  name: "June",
  color: "Yellow",
  age: 2.5,
  lovableQuality: "Big ears",
};
console.log(
  `${Dog.name}is a ${Dog.breed} whose color is ${Dog.color} and he is now ${Dog.age} years old. His lovable quality is his ${Dog.lovableQuality}`
);

//HW-MERN OBJECT
const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

//Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.
let user7 = users[6];
console.log(user7);
// console.log(users[6].name, users[6].email, users[6].skills, users[6].age, users[6].isLoggedIn, users[6].points);

//Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
let maxNum = 0;
let user;
for (let i = 0; i < users.length; i++) {
  if (users[i].skills.length > maxNum) {
    user = users[i].name; //neriig ni hadgalj bga
    maxNum = users[i].skills.length;
  }
}
console.log(user);

//Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
function getPoint(point, max) {
  let count = {
    logged: 0,
    points: 0,
  };
  let result = [];
  for (i = 0; i < point.length; i++) {
    if (point[i].isLoggedIn) {
      count.logged++;
      if (point[i].points >= max) {
        count.points++;
        result.push(point[i]);
      }
    }
  }
  return result;
}
console.log(getPoint(users, 50));

//Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
