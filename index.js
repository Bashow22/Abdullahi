// {
//    let n = 5
//    if (n % 5 == 0) {
//       console.log("n is divisible by 5")
//    } else{
//       console.log("is not divisible by 5")
//    }
// }
// {
//    let n = 6
//    if (n % 6 == 0) {
//       console.log("n is divisible by 6")
//    } else{
//       console.log("is not divisible by 6")
//    } 
// }



// {
//     let maths = "pass";
//     let english = "pass";
//     let chemistry = "fail";
//     let physics = "pass";
//     let kiswahili = "pass";
//     let history = "fail";
//     let geography = "pass";



//    if (maths === "pass" && english && physics === "pass" || chemistry === "fail") {
//        console.log("Computer Science");
//    }

   
//    else if (maths === "pass" && english === "pass" && kiswahili === "pass" && history) {
//        console.log("Journalism");
//    }

   
//    else if  (maths === "pass" && kiswahili && history && (physics === "pass" || chemistry === "pass")) {
//        console.log("Engineering");
//    }

   
//    else if (maths === "pass" && english && chemistry === "pass" && geography) {
//        console.log("Medicine");
//    }

   
//    else if (maths === "pass" && english === "pass" && chemistry === "pass" && physics === "pass" &&
//        kiswahili === "pass" && history === "pass" && geography === "pass") {
//        console.log ("You can choose a course of your choice.");
//    }
// }
 
// {
//    function getSum(n) {
//     let sum = (n*(n+1)) /2
//     return sum;
//    }

//    let ans = getSum(5)
//    console.log(ans);
// }

//   {
//     function getSum(area){
//         let sum =(h*(a+b)/2)
//         return area;
//     }
//     let sum =(16*(4+7)/2)
//     console.log(sum)
//   }
//   {
//     const person1 ={
//         fname:"abdullahi",
//         lname:"bashir",
//         age:"24",
//     }
//     const person2 ={
//         fname:"hamza",
//         lname:"mohamed",
//         age:"19",
//   }
//   console.log(person2.fname)
//   }
//   {
//     const person ={
//         fname:"john",
//         lname:"doe",
//         yob:2005,
//         fullname: function(){
//             console.log(this.fname +""+this.lname)
//         },
//         age:function(){
//             return 2024 -this.yob
//         }
//     }

//     console.log(person.age())
//     person.yob
//   }

//   {
//     const numbers = [4, 6, 7, 8, 90, 56]
//     console.log(numbers)

//     numbers.reverse(
//     numbers.sort()
// )
    
//     console.log(numbers)
//   }
  {
    {
        const numbers = [4, 6, 7, 8, 90, 56]
        console.log(numbers)
    
        numbers.toSorted()
        numbers.toReversed()
        console.log(numbers)
      }
  }


{
    const results = [
        {
            name: "Jane",
            marks: [89, 45, 67, 89, 67]
        },
        {
            name: "Alfred",
            marks: [89, 56, 43, 78, 89]
        },
        {
            name:"Steve",
            marks: [67, 89, 56, 44, 90]
        }
       ]
       console.log(results[2].marks[3])
       console.log(results[1].name + ": " + results[1].marks[3])
    
}