// let style = {
//   0: "red",
//   1: 25,
// };

// //let arr = ['red', 25];

// //console.table(style);
// //console.table(arr);

// let emptyObject = {};

// let object = {
//   key1: "some value",
//   key2: "etc ...",
// };
// // get props
// // console.log(object['key1']);
// // console.log(object.key2);

// let user = {
//     name: 'Abu Tahsien'
// };

// //set props
// user['likes birds'] = true;
// user.age = 23;

// // delete property

// delete user['likes birds'];

// // special case :
// let index = 'job';

// user[index] = 'web developer';

// let index1 = 'age';


// // console.table(user);
// // console.log(user[index1]);

// let key1 = 'Number Of Wheels';
// let value1 = 4;

// let name = 'Samier';

// let car = {
//     key1: value1
// };

// let owner = {
//   name
// };

// // console.log(owner);

// let fruit = 'Apple';

// let bag = {
//     [fruit + 'Computers']:5
// }

// // console.log(bag);

// function makeUser(name, age) {
//     return {
//         name , //name: name,
//         age // age:age
//     }
// }

// //console.log(makeUser('Ghada', 56));

// /**
//  * 
//  * @param {Array} content 
//  * @param {String} owner 
//  * @returns Object
//  */
// function makeBag(content, owner) {
//     let bag = { owner };
//     content.forEach((item, i) => {
//         bag['key' + (i+1)] = item
//     });
//     return bag;
// }


// // example : makeBag([laptop, apples], 'Maher');
// // {
// //      key1: laptop,
// //      key2: apples,
// //.     owner: 'Maher'
// //}

// //console.table(makeBag(['laptop', 'apples'], 'Maher'));
// let course = {
//     teacher: 'Talal',
//     subject: 'web developement',
//     students: ['Safwan',
//         'Kamal',
//         'Ahamd',
//         'Nour',
//         'Mohammad'],
//     duration: 115,
//     place: 'Online',
//     price:'FOC',
//     startDate: '20/10/2023',
    
// }

// for (const key in course) {
//     if (key == "students")
//     {
//         console.log(key + ':');
//         console.table(course[key]);
//     } else {
//         console.log(key + " : " + course[key]);
//     } 
        
// }

// let users = ['Radhi', 'Sami'];
// // users = {
// //     0: 'Rami',
// //     1:'Zaher'
// // }
// for (item of users) {

//  // console.log(item);
// }

// /*
// obj ={
// countOfclassA:10,
// countOfclassB:15,
// countOfclassC:7,


// }
// */

// function sumObjParams(obj) {
//     return obj.countOfclassA +
//         obj.countOfclassB +
//         obj.countOfclassC;
// }
// console.log(
//   sumObjParams({
//     countOfclassA: 10,
//     countOfclassB: 15,
//     countOfclassC: 7
//   })
// );


// let example = {
//   countOfclassA: 10,
//   countOfclassB: 15,
//   countOfclassC: 7,
// };

// console.log(example?.name);
// let result = Object.keys(example);
// result = Object.values(example);
// result = Object.entries(example);
 
// console.table(result);


 let result; 
let user = {
    username: "admin",
    pass: 1234
}
result = Object.entries(user);

for (value of result) {
   // console.log(value)
}

//let arr = [['myName', 'Safwan', 'Itamar'],
//    ['age', 64],
//    ['job', 'Wev Developer']]
   // arr = [1,2,3] :  not an entry object
//let obj2 = Object.fromEntries(arr);

//console.log(obj2);
    
//console.table(result);

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};

let doublePrices = Object.fromEntries(

    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])



);

console.log(doublePrices);



