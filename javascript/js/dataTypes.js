
// {
//     let name = "Dan";
//     console.log(name);

//     let b = 24+7+"egg";
//     console.log(b);

//     let c = "egg" +24 +7;
//     console.log(c);
// }
// {
//     console.log("5" === "5");
//     console.log("5" === 5);
// }

// {
//     let x = 6;

//     if(x < 10){
//        console.log("x is greater than 10") 
//     }else{
//         console.log("x is less than 10");
//     }

// }
// {
//     let x = 30;
//     if(x < 50){
//         console.log("x is less than 50");
//     }else{
//         console.log("x is greater than 50") 

//     }
// }
// {
//  //check if a number is divisible by 3
 
//  let number = 50;

//  if(number % 3 == 0){
//     console.log( "number is divisible by 3" );
//  } else{
//     console.log( "number  is not  divisible by 3" );
//  }
// }
// {
//     let number = 80;

//  if(number % 4 == 0){
//     console.log( "number +  is divisible by 4");
//  } else{
//     console.log( "number + is not  divisible by 4" );
//  }
// }
// {
//     let number = 16;

//     if(number % 8 == 0){
//        console.log( "number +  is even by 8");
//     } else{
//        console.log("number +  is not even by 8");
//     }  
// }
// {
//     let n = 40;
//     let r = n % 2

//     if(n == 0){
//        console.log(n +  'is even');
//     } else{
//        console.log(n + " is odd");
//     }  
// }
// {
//   let greeting;
//   let hour = 0

//   if (hour < 3){
//     greeting = "Good Night";
// }else if (hour < 12){
//  greeting = "Good morning";
// }else if(hour < 16){
//  greeting = "Good afternoon";
// }else{
//  greeting = "Good evening";
// }
// console.log(greeting);
// }
// {
//     //A = 85 TO 100
//    // B 70 TO 84
//    // C 60 TO 69
//    // D 50 TO 59
//    //E BELOW 50
//    let grade;
//    let mark = 70;
//    if (mark == 85){
//     grade = "A";
//    }else if(mark == 70){
//     grade = "B"
//    }else if(mark == 60){
//     grade = "C";
//    }else (mark >=40)
//     grade = "E";
   
//    console.log(grade);
// }

// {
//     let year = 2020
//     if( year % 4 == 0)
//         {console.log("leap year")}
//     else{
//         console.log("not a leap yeay")
//     }
// }
// {
//     let a = 3

//     switch(a){
//     case 3:
//      console.log("a is dvisible by 3") 
//      break
//      case 6:
//         console.log("a is not divisible by 3") 
//         break 
//      default:
//             console.log("is not found")    

//     }
// }
  
// {
//     {
//         //nested if statement
//         let age = 21;
//         let gender = "male"
//         let height = 170
//         if ( age>18 ){
//             if(gender == "male"){
//                 if (height >= 200){
//                     console.log("Too tall")
//                 }else if(height >= 150){
//                     console.log("Allowed")
//                 }else if( height <= 100){
//                     console.log("Don't even think about it")
//                 }else{
//                     console.log("Considerable")
//                 }
//             }else{
//                 console.log("You are not male")
//             }
//         }else{
//             console.log("You are not old enough");
//         }
//     }
      
// }



let maths = "pass";
let english = "fail";
let chemistry = "fail";
let physics = "pass";
let kiswahili = "fail";



    
    if (maths === "pass" || english === "pass" || kiswahili === "pass") {
        console.log("Computer Science");
    }

   
    if (maths === "pass" && english === "pass" && kiswahili === "pass") {
        console.log("Journalism");
    }

    
    if (maths === "pass" && (english === "pass" || kiswahili === "pass") && physics === "pass") {
        console.log("Engineering");
    }

   
    if (maths === "pass" && (english === "pass" || kiswahili === "pass") && chemistry === "pass") {
        console.log("Medicine");
    }

    
    if (maths === "pass" && english === "pass" && chemistry === "pass" && physics === "pass" && kiswahili === "pass") {
        console.log("you can chooose a course of your choice")
    }

    































