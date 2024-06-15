// {
//   for (let i = 0; i <= 5; i++){
//     console.log("Today is thursday" + i)
//   }  
// }
// {
//   const arr = [34, 56, 78, 90, 23, 56, 76, 43]
// console.log(arr)

//   for (let i = 0; i < arr.length; i++){
//    arr[i]= arr[i] + 2;
//   }
//   console.log(arr)
// }


// {
//     // sum of numbers:
//     // upto n
//     let n = 5
//     // 0 + 1+2+3+4+5
//     let sum = 0;
//     for (let k = 0; k <= n; k++ ){
//         console.log("Sum before update: " + sum + ". k is currently: " + k)
//         sum = sum + k;
//         console.log("Sum after update: " + sum)
//         console.log("\n")
//     }
// }
// {
//     function printValues(n) {
//         for (let k = 0; k <= n; k+=2) {
//             console.log(k);
//         }
//     }
    
//     printValues(5);
//     //print in reverse: function n : from n to 0
    
// }

// {

// function printValues(n) {
//     for (let k = 0; k <= n; k += 2) {
//         console.log(k);
//     }
// }


// function printValuesReverse(n) {
//     for (let k = n; k >= 0; k--) {
//         console.log(k);
//     }
// }


// printValues(5);
// printValuesReverse(5);
  
// }
// const n = 50;
// function printMultiplesOf5And10(n) {
//     for (let k = 0; k <= n; k++) {
//         if (k % 5 === 0 || k % 10 === 0) {
//             console.log(k);
//         }
//     }
// }

// const n = 60;
// printMultiplesOf5And10(n);

// {
//     // write a function that takes two parameters: a and e,
//     // should return the (a^e). 3, 4 (3^4)
//     function getPower(a, e){
//         let prod = 1;
//         for(let i = 1; i <= e; i++){
//             prod = prod * a;
//         }
//         return prod;
//     }
//     console.log(getPower(5, 3))
// }
// const n = 36;
// function fizzBuzz(n) {
//     for (let a = 0; a <= n; a++) {
//         if (a % 7 === 0 || a % 3 === 0  ) {
//             console.log("fizzBuzz");
//         } else if (a % 7 === 0 ) {
//             console.log("buzz");
//         } else if (a % 3 === 0) {
//             console.log("fizz");
//         } else {
//             console.log(a);
//         }
//     }
// }
// fizzBuzz(n);

// {
// const inputString = "Hello, World!";
// const numberOfVowels = countVowels(inputString);
// function countVowels(str) {
//     let vowelCount = 0;
//     const vowels = "aeiouAEIOU";
    
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }
    
//     return vowelCount;
// }


// console.log ("inputString")
// }

// {
//     const students = [
//         { name: "Basho", marks: [85, 90, 78, 92, 88] },
//         { name: "Bob", marks: [80, 85, 84, 90, 89] },
//         { name: "yahya", marks: [90, 92, 94, 88, 86] },
//         { name: "kajembe", marks: [70, 75, 80, 85, 90] },
//         { name: "Edward", marks: [88, 82, 91, 79, 85] }
//     ];
//     function arrayOfStudents(students) {
//         const studentAverages = students.map(student => {
//             const sum = student.marks.reduce((acc, mark) => acc + mark, 0);
//             const average = sum / student.marks.length;
//             return {
//                 name: student.name,
//                 average: average
//             };
//         });
//         studentAverages.sort((a, b) => b.average - a.average);
//         studentAverages.forEach(student => {
//          console.log(`${student.name}: ${student.average.toFixed(2)}`);
//         });
//     }
//     arrayOfStudents(students);
//     }
    
//     {
//         // an array of objects
//         //objects: students: marks, name
//         // get the average marks, print out( sorted )
//         //function to get the average in an array:
//         //example: [78, 89, 78, 90, 65]
//         function getAverage(marks){
//             let sum = 0;
//             for (let i = 0; i <= marks.length-1; i++){
//                 sum = sum + marks[i];
//             }
//             return sum / marks.length;
//         }
//        //
//        sample_students = [
//         {
//             name: "John",
//             marks: [78, 90, 54, 55, 32]
//         },
//         {
//             name: "Dennis",
//             marks: [89, 90, 56, 44, 58]
//         },
//         {
//             name: "Agnes",
//             marks: [90, 56, 45, 88, 90]
//         },
//         {
//             name: "Alvin",
//             marks: [81, 56, 77, 88, 96]
//         }
//        ]
//        function getStudentsAverage(students){
//         let student_avg = []
//         for (i = 0; i <= students.length-1; i++){
//             student_rslts = {
//                 name: students[i].name,
//                 avg: getAverage(students[i].marks)
//             }
//             if(i == 0){
//                 student_avg.push(student_rslts)
//             }else{
//                 if (student_rslts.avg > student_avg[0].avg){
//                     let new_array = []
//                     new_array.push(student_rslts)
//                     for (k = 0; k < student_avg.length; k++){
//                         new_array.push(student_avg[k])
//                     }
//                     student_avg = new_array
//                 }else if(student_rslts.avg > student_avg[i - 1].avg){
//                     popped_student = student_avg.pop()
//                     student_avg.push(student_rslts)
//                     student_avg.push(popped_student)
//                 }
//                 else{
//                     student_avg.push(student_rslts)
//                 }
//             }
//         }
//         console.log(student_avg)
//        }
//        getStudentsAverage(sample_students)
//     }



// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];


// function removeDuplicates(array) {
//     let uniqueArr = [];
//     let duplicatesArr = [];
//     let seen = new Set();



//     for (let item of array) {
//         if (seen.has(item)) {
//             if (!duplicatesArr.includes(item)) {
//                 duplicatesArr.push(item);
//             }
//         } else {
//             seen.add(item);
//             uniqueArr.push(item);
//         }
//     }

//     return { uniqueArr, duplicatesArr };
// }


// let result = removeDuplicates(arr);

// console.log("Array with only duplicates:", result.duplicatesArr);



// // Initial array
// var arr3 = [5, 9, 3, 2, 6, 8, 7, 4, 1];

// // Function to sort the array in ascending order
// function sortArray(array) {
//     return array.sort((a, b) => a - b);
// }

// // Sort the array
// var sortedArray = sortArray(arr3);

// // Console the sorted array
// console.log(sortedArray);


// // Function to find two numbers that add up to the target
// const nums = [2, 7, 11, 15];
// const target = 9;

// function twoSum(nums, target) {
//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {
//         // Inner loop to check the next elements
//         for (let j = i + 1; j < nums.length; j++) {
//             // Check if the sum of nums[i] and nums[j] equals the target
//             if (nums[i] + nums[j] === target) {
//                 // If found, return the indices
//                 return [i, j];
//             }
//         }
//     }
    
//     return [];
// }

// const result = twoSum(nums, target);


// console.log(result);



// //Function to create a formatted shopping list
// const shoppingList = (groceries) => {
//     // Use map to create an array of formatted strings
//     const formattedItems = groceries.map(({ item, quantity }) => {
//         return `${item}: ${quantity}`;
//     });

//     // Join the array into a single string separated by new lines
//     return formattedItems.join('\n');
// }

// // Example usage
// const groceries = [
//     { item: 'Apples', quantity: 4 },
//     { item: 'Bananas', quantity: 6 },
//     { item: 'Carrots', quantity: 5 },
//     { item: 'Doritos', quantity: 3 }
// ];

//  result= shoppingList(groceries);

// // Console the result
// console.log(result);


// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

// // Using a bubble sort algorithm
// for (var i = 1; i < arr3.length; i++) {
//     for (var j = 0; j < i; j++) {
//         if (arr3[i] < arr3[j]) {
//            var temp = arr3[i];
//             arr3[i] = arr3[j];
//             arr3[j] = temp;
//         }
//     }
// }

// console.log(arr3); // [ -5, -3, 1, 2, 3, 4, 5, 6, 8, 9 ]


// function sortArray(array) {
//     let sorted = [];
//     for (let i = 0; i<array.length; i++){

//          for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let number = array[i];
//                 array[i] = array[j];
//                 array[j] = number;
//             }

//         }
//         sorted.push(array[i])   
// }
//     return sorted

// }
// console.log(sortArray([5, -4, -2, 7, 9, 4,]))
// {
// const person = {
//    name: "Able",
//    age:87,
//    county:"meru",
//    school:{
//     name: "St peter",
//     location:"central",
//     level:"National",
//    }
// }
// let {name, age, county } = person

//     console.log(county)

// }

// const cars = [{name:"Audi", color:"blue", cc:"3500",},
//              {name:"vitz", color:"black", cc:"1500"}]

//              cars.forEach(({name, color, cc}) => {
//                 console.log(`my car is ${name} color ${color} and with cc of ${cc}`);
                
//              });



// const students = [
//     { name:"Dan", age:14, Marks: {math:50, english:70, sci:77, ss:50}},
//     { name:"Jane", age:13, marks: {math:54, english:75, sci:57, ss:60}}
// ];

//     const calculateAverageMarks = (marks) => {
//         const markValues = Object.values(marks);
//         let totalMarks = 0;

//         for (let mark of markValues){
//             totalMarks += mark;
//         }

//         return totalMarks / markValues.length;
//     };
//     students.forEach(({ name, age, marks }) => {
//         const averageMarks = calculateAverageMarks(marks);
//         console.log(`Name: ${name}, age: ${age}, averageMarks: ${averageMarks}`);
//     });  
         
             
  // Array of students
// const students = [
//     { name: "Dan", age: 14, marks: { maths: 50, english: 70, sci: 77, ss: 50 } },
//     { name: "Jane", age: 13, marks: { maths: 54, english: 75, sci: 57, ss: 60 } }
// ];

// // Function to calculate the average marks
// const calculateAverageMarks = (marks) => {
//     const markValues = Object.values(marks);
//     let totalMarks = 0;

//     // Loop through the mark values to calculate the total
//     for (let mark of markValues) {
//         totalMarks += mark;
//     }

//     // Return the average
//     return totalMarks / markValues.length;
// };

// // Loop through the array and print student details
// students.forEach(({ name, age, marks }) => {
//     const averageMarks = calculateAverageMarks(marks);
//     console.log(`Name: ${name}, age: ${age}, averageMarks: ${averageMarks}`);
// });
      


// {
//     const students = [
//      {
//          name: "John",
//          age: 13,
//          marks: {
//              maths: 80,
//              english: 70,
//              sci: 56,
//              ss: 70
//          }
//      },
//      {
//          name: "Anne",
//          age: 12,
//          marks: {
//              maths: 70,
//              english: 79,
//              sci: 66,
//              ss: 77
//          }
//      },
//      {
//          name: "Dave",
//          age: 13,
//          marks: {
//              maths: 60,
//              english: 74,
//              sci: 86,
//              ss: 72
//          }
//      }
//     ]
 
//     students.forEach(({name, age, marks:{maths, english, sci, ss}})=>{
//      average = (maths+english+sci+ss) /4
 
//      console.log(`Name: ${name}, age: ${age}, averageMarks: ${average}`)
//     })
     
//  }

// const person = {
//     name: 'Stephen',
//     age: '99+',
//     profession: 'Centurion',
//     birthPlace: {
//         continent:'Mama Africa',
//         country: 'Kenya',
//         location:'Mombasa',
//         language:'Swahili',
//         skills:'Bow and Arrow'
//     }
// }
//  let newPerson = {...person, name:'Alexander The Great', age:'150+',birthPlace: {...person.birthPlace, continent:'Europe', country:'Italy', location:'Roma',language:'Italian', skills:{...person.birthPlace,skills:{officialSkills:'Politics and Showmanship', unOfficialSkills:'Partying like there is no tomorrow'},bestAt:'Demonstrating Leadership'}}, bestKnownFor:'Conquering a third of the world'}
//  console.log(person)
//  console.log(newPerson)


// let nums = [1,3,5,6]
// target = 5
//  searchInsert = function(nums, target) {
//     for(i=0; i<nums.length; i++);
//     if(target <= nums[i]){
//         console.log(i);
//         return i;
        
//     }
 
 
// };

// searchInsert(nums);


// let nums= [1,3,5,6]
//  let target = 9
//  searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) {
//             return [i]
//         } else if (target < nums[i]) {
//             return [i]
//         } else if (i === nums.length - 1 ) {
//             return i + 1
//         }
//     }
// };console.log(searchInsert(nums,target));


const student = {
    name: "Basho",
    course: "Mathematics",
    Math: 89,
    eng: 80,
    kisw: 45,
    phy: 77,
    chem: 87,
}
let {name,course,...performance}=student
const output ={name, course, performance}
console.log(name, course, performance)

// {

//     const person = {
//         name: "John",
//         age: 67,
//         location: "Kibra",
//         status: "Married"
//     }

//     const {age, ...myRest} = person;

//     //console.log(age, myRest)

//     //rest

//     let student = {
//         name: "Farida",
//         course: "Mathematics",
//         maths: 89,
//         eng: 80,
//         kis: 45,
//         phyc: 77,
//         chem: 87
//     }

//     let {name, course, ...performance} = student

//     console.log(name, course, performance)

//     const output = { name, course, performance }

//     // name = "Kenya"
//     // language = "English",
//     // population = "50M"

//     // let country = {name, language, population}


//     console.log(output)
// }

// // let {name,course,...performance}=student
// // student = {...student,performance}

// // const output ={name, course, performance}
// // console.log(student)