// Check if an Object is Empty in JavaScript 
//'lodash' – JS , Java isEmpty Equivalent
let myEmptyObject = {};

const isObjectEmpty = (objectName) => {
    return (Object.keys(objectName).length === 0);
};


// Sum the properties: 
// using Object.values and the for..of loop.

function sumSalaries(salaries) {
if (isObjectEmpty(salaries)) return 0;
let sum = 0;

    for (const salary of Object.values(salaries)) {
    sum += salary
}

  return sum; 
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(sumSalaries(myEmptyObject)); // 0
console.log( sumSalaries(salaries) ); // 650