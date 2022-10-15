  
 /* To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5]

let results = []

for(let num of nums) {
  results.push(num * 2);

}

console.log(results);

// Using map()

const multByTwo = function(num) {

  return num * 2;
}

const mapResults = nums.map(multByTwo);

console.log(mapResults);


// Simplified w/ map()  ...if you can simplify this code by  passing the function to the map method directly.  




/*const multByTwo = () => results;  

results = mapResults;

console.log(mapResults);

*/

const simpVersion = nums.map((function (num) {return (num *2)})); 
console.log(simpVersion);

// Simplfied w/ map() + arrow function

let numsArray = [1, 2, 3, 4, 5, 6, 7]
let newResults = numsArray.map(num => num *2);
console.log(newResults); 




// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const poop = students.map(student => [student.name, student.id]);
console.log(poop);