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

{   
//     const n = 20;
//     function fizzBuzz(n) {
//         for (let i = 0; i <= n; i++) {
//             if (i % 6 === 0 && i % 3 === 0 && i !== 0) {
//                 console.log("fizzBuzz");
//             } else if (i % 6 === 0 && i !== 0) {
//                 console.log("buzz");
//             } else if (i % 3 === 0 && i !== 0) {
//                 console.log("fizz");
//             } else {
//                 console.log(i);
//             }
//         }
//     }
    

   
//     fizzBuzz(n);
    
// }

// {
//     const inputString = "Hello, World!"; 
//     const numberOfVowels = countVowels(inputString);

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

// console.log(`The number of vowels in "${inputString}" is ${numberOfVowels}.`);

// }

// }

{
const students = [
    { name: "Basho", marks: [85, 90, 78, 92, 88] },
    { name: "Bob", marks: [80, 85, 84, 90, 89] },
    { name: "yahya", marks: [90, 92, 94, 88, 86] },
    { name: "kajembe", marks: [70, 75, 80, 85, 90] },
    { name: "Edward", marks: [88, 82, 91, 79, 85] }
];


function arrayOfStudents(students) {
    // Calculate the average marks for each student
    const studentAverages = students.map(student => {
        const sum = student.marks.reduce((acc, mark) => acc + mark, 0);
        const average = sum / student.marks.length;
        return {
            name: student.name,
            average: average
        };
    });

    // Sort the students by their average marks in descending order
    studentAverages.sort((a, b) => b.average - a.average);

    // Print the students' names and their average marks
    studentAverages.forEach(student => {
        console.log(`${student.name}: ${student.average.toFixed(2)}`);
    });
}


arrayOfStudents(students);
}
}