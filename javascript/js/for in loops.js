// {
//     const numbers = [56, 78, 89, 90]
//     // for (let i in numbers){
//     //     console.log(numbers[i])
//     // }
//     // for (let number of numbers){
//     //     console.log(number)
//     // }
//     //function to get the sum of elements in an array
//     function getSum(arr){
//         sum = 0
//         for (let i in arr){
//             sum = sum + arr[i]
//         }
//         return sum;
//     }
//    console.log(getSum(numbers))
// }
// {
//     const numbers = [56, 78, 89, 90]
//     // for (let i in numbers){
//     //     console.log(numbers[i])
//     // }
//     // for (let number of numbers){
//     //     console.log(number)
//     // }
//     //function to get the sum of elements in an array
//     function getSum(arr){
//         sum = 0
//         for (let i of arr){
//             sum = sum + i
//         }
//         return sum;
//     }
//    console.log(getSum(numbers))
// }

// {
//     const numbers = [56, 78, 89, 90];

   
//     function getSum(arr) {
//         let sum = 0;
//         for (let i of arr) {
//             sum += i;
//         }
//         return sum;
//     }

//     console.log(getSum(numbers)); 
   
//     function getMax(arr) {
//         let max = arr[0]; 
//         for (let i of arr) {
//             if (i > max) {
//                 max = i;
//             }
//         }
//         return max;
//     }

//     console.log(getMax(numbers)); 
// }


// {
//     const arr =[89, 89, 76, 54, 346, 89]
//     let x = 0;
//     while (x < arr.length) {
//         console.log(arr[x])

//         x++;
//     }
// }

// {
//     const arr = [89, 89, 76, 54, 346, 89];
//     let x = 0;
//     let sum = 0;

//     while (x < arr.length) {
//         console.log(arr[x]);
//         sum =sum + arr[x];
//         x++;
//     }

//     console.log(sum);
    

    
// }
// {
//     x = 10;
//     do{
//         console.log("hell world")
//         x++
//     }while(x<10)

//         console.log(x)
// }


// function drawTriangle(rows) {
//     let triangle = [];
//     for (let a = 1; a <= rows; a++) {
//         for (let k = 1; k <= a; k++) {
//             triangle = triangle + k
//         }
//         triangle = triangle + "\n";
//     }
//     console.log(triangle);
// }

// drawTriangle(10);




// {
//     function isPalindrome(str){
//         let d = str.length -1
//         for(let i = 0; i < str.length / 2; i++) {
//             if (str[i] != str[d]) {
//                 return false;
//             }
//             d--;
//         }
//         return true;
//     }
// let str1 = "bash";
// let str2 = "abm";
// let str3 = "jb";
//  console.log(isPalindrome (str1));
//  console.log(isPalindrome(str2));
//  console.log(isPalindrome(str3));
// }

// let level;
// let age = 54;

// if (age <= 60) {
//     level = "retired";
// } else if (age <= 24) {
//     level = "employed";
// } else if (age <= 18) {
//     level = "campus";
// } else if (age <= 15) {
//     level = "high school";
// } else if (age <= 10) {
//     level = "primary";
// } else {
//     level = "below primary";
// }

// console.log(level);





// function isPrime(n) {
   
//     if (n < 2) {
//         return false;
//     }
   
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }

//     return true;
// }

// console.log(isPrime(97)); 

// function drawCenteredTriangle(game){
//     for(let m = 1; m <= game; m++){
//         let newLine = "";
//         let spaces = game - m;
//         for(let s = 0; s < spaces; s++){
//             newLine += " ";
//         }
//         for(let k = 1; k <= m; k++){
//             newLine += k + " ";
//         }
//         console.log(newLine);
//     }
// }
// drawCenteredTriangle(20)


// // Pyramid up to 9:
// {
//     for (let i = 1; i <=5; i++){
//         let s = ""
//         for (let k = i - 4; k < 10; k++){
//             if (k > 0 && k <= i + (i-1)){
//                 s = s + k
//             }else{
//                 s = s + " "
//             }
//         }
//         console.log(s)
//     }
// }
// {
// const numbers = [7, 10, 12, 14, 16];
//     sum = 0
//     arr.forEach((value, index) => {
//      sum = sum + value
//     });
// }
// const numbers = [49, 144, 225, 400,];
// function printFourthRoots(arr) {
//     arr.forEach(num => {
//         console.log(Math.pow(num, 1/4));
//     });
// }

// printFourthRoots(numbers);

// let today = new Date ();

// console.log(today)

// let yesterday = new Date();
// console.log(yesterday)


// const arrays = [[8, 9, 4, 56, 78], [67, 89, 98], [56, 45, 32, 45], [45, 67, 80]];
// const result = sumOfInnerArrays(arrays);
// function sumOfInnerArrays(arr) {
   
//     const sums = [];
   
//     let totalSum = 0;

//     arr.forEach(innerArray => {
       
//         const sum = innerArray.reduce((acc, num) =>acc + num, 0);
       
//         sums.push(sum);
       
//         totalSum += sum;
//     });

//     console.log(totalSum);
    
//     return sums;
// }

// console.log(result);

// {
    // array of arrays
//     const sample_array = [[89, 56, 43], [32, 77, 56, 43], [90, 43, 49, 23, 90]]
//     function getSumOfElements(arr){
//         let sum_array = []
//         arr.forEach((innerArray)=>{
//             let sum = 0
//             innerArray.forEach((element)=>{
//                 sum = sum + element
//             })
//             sum_array.push(sum)
//         })
//         let total_sum = 0;
//         sum_array.forEach((value)=>{
//             total_sum = total_sum + value
//         })
//         console.log("Total: " + total_sum)
//         return sum_array;
//     }
//     console.log(getSumOfElements(sample_array))
// }


// 



// function fibonacci(n) {
//     if (n <= 0) {
//         return [];
//     } else if (n == 1) {
//         return [0];
//     } else if (n == 2) {
//         return [0, 1];
//     }

//     let fibSequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }

//     return fibSequence;
// }

// console.log(fibonacci(5)); 


 
// let number = [46,68,74,89];
//     function returnDifference(arry){
//         if(arry.length === 0){
//             return "[]"
//         }
//       let min = number[0]
//       let max = number[0]

//  for(let i =1;i< arry.length; i++){
//      if(arry[i] > min){
//       min = arry[i]   
//       } if (arry[i] < max){
//         max = arry[i]
//      }      
// }
//      return min - max
// }
// console.log(returnDifference(number))


//    let numbers = [46, 68, 74, 89, 96];
//     function returnDifference(arry) {
//         if (arry.length === 0) {
//             return "empty array";
//         };
//         let max = arry[0];
//         let min = arry[0];
    
//         for (let i = 1; i < arry.length; i++) {
//             if (arry[i] > max) {
//                 max = arry[i];
//             }
//             if (arry[i] < min) {
//                 min = arry[i];
//             }
//         }
    
//         return max - min;
//     }
//     console.log(returnDifference(numbers));


// let arr = [2, 3, 2, 4, 4, 6, 5, 5, 8, 9, 9];


// function removeDuplicates(array) {
//     let duplicatesArr = [];
//     let seen =  new Set();

    
//     for (let item of array) {
//         if (seen.has(item)) {
//             if (!duplicatesArr.includes(item)) {
//                 duplicatesArr.push(item);
//             }
//         } else {
//             seen.add(item);
//         }
//     }

//     return {duplicatesArr};
// }


// let result = removeDuplicates(arr);

// console.log(result.duplicatesArr);
           
// const nums = [2, 7, 11, 15];
// const target = 18;

// // const result = twoSum(nums, target);
// function twoSum(nums, target) {
    
//     for (let i = 0; i < nums.length; i++) {
        
//         for (let j = i + 1; j < nums.length; j++) {
            
//             if (nums[i] + nums[j] === target) {
               
//                 return [i, j];
//             }
//         }
//     }
    
//     return [];
// }

// const result = twoSum(nums, target);


// console.log(result);

// {
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
//     let Person1 = new Person("john", 69)
//     let Person2 = new Person("darius", 10);
//     let Person3 = new Person("basho", 19)
//     console.log(Person1.name)
//     console.log(Person2.name)
//     console.log(Person3.name)
// }


// {
// class Car {
//     constructor(name, color, model, mileage, weight, price){
//         this.name = name;
//         this.color = color;
//         this.model = model;
//         this.mileage = mileage;
//         this.weight = weight;
//         this.price = price;
//     }
// }
//     let Car1 = new Car ("mazda", "blue", 2024, 1200, "89kg", "$20000")
//     let Car2 = new Car ("audi", "yellow", 2019, 900, "94kg", "$12000")


//     console.log(Car1.name)
//     console.log(Car2.name)

// }

// {
//     class Animal{
//         constructor(type, modeOfMovement){
//             this.type = type;
//             this.modeOfMovement = modeOfMovement
//         }

//         produceSound(){
//             console.log("General animal sound heard");
//         }
//     }

//     class Dog extends Animal{
//         constructor(type, modeOfMovement, breed){
//             super(type, modeOfMovement);
//             this.breed = breed;
//         }

//         //overriding
//         produceSound(){
//             console.log("Barking")
//         }

//         showCase(){
//             console.log(`Hello I am a dog. I am a ${this.type}. I move by ${this.modeOfMovement}. I am a ${this.breed}`)
//         }
//     }

//     class Cat extends Animal{
//         constructor(type, modeOfMovement, breed, color){
//             super(type, modeOfMovement)
//             this.breed = breed;
//             this.color = color;
//         }

//         produceSound(){
//             console.log("Meows")
//         }

//         showCase(){
//             console.log(`Hello I am a cat. I am a ${this.type}. I move by ${this.modeOfMovement}. I am a ${this.breed}. My color is ${this.color}`)
//         }
//     }

//     let newAnimal = new Animal("Mammal", "Walks")
//     newAnimal.produceSound()

//     let newDog = new Dog("Mammal", "Walking", "Husky")
//     newDog.produceSound()

//     let newCat = new Cat("Mammal", "Walking", "xxx", "grey")

//     newDog.showCase()

//     newCat.showCase()
//     //type, modeOfMovement, breed, furColor
//     //produce sound: meows
//     //create an instance of the cat and call the produceSound method
// }

{
    class Animal{
        constructor(type, modeOfMovement){
            this.type = type;
            this.modeOfMovement = modeOfMovement
        }

        produceSound(){
            console.log("General animal sound heard");
        }
    }

    class Dog extends Animal{
        constructor(type, modeOfMovement, breed){
            super(type, modeOfMovement);
            this.breed = breed;
        }

        //overriding
        produceSound(){
            console.log("Barking")
        }

        showCase(age){
            console.log(`Hello I am a dog. I am a ${this.type}. I move by ${this.modeOfMovement}. I am a ${this.breed}. I am ${age} years old`)
        }
    }

    class Husky extends Dog{
        constructor(type, modeOfMovement, breed, color){
            super(type, modeOfMovement, breed);
            this.color = color;
        }

        //method overloading
        showCase(age, location){
            console.log(`Hello I am a husky. My color is ${this.color}. I am ${age} years old. I come from ${location}`)
        }
    }

    let myHusky = new Husky("Mammal", "Walking", "Husky", "White and Black")
    myHusky.produceSound()
    myHusky.showCase(7, "Europe")

    class Cat extends Animal{
        constructor(type, modeOfMovement, breed, color){
            super(type, modeOfMovement)
            this.breed = breed;
            this.color = color;
        }

        produceSound(){
            console.log("Meows")
        }

        showCase(){
            console.log(`Hello I am a cat. I am a ${this.type}. I move by ${this.modeOfMovement}. I am a ${this.breed}. My color is ${this.color}`)
        }
    }

    let newAnimal = new Animal("Mammal", "Walks")
    newAnimal.produceSound()

    let newDog = new Dog("Mammal", "Walking", "Husky")
    newDog.produceSound()

    let newCat = new Cat("Mammal", "Walking", "xxx", "grey")

    newDog.showCase(5)

    newCat.showCase()
    //type, modeOfMovement, breed, furColor
    // produce sound: meows
    // create an instance of the cat and call the produceSound method
}
