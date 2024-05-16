// {
//     let level;
//     let age = 54
  
//     if(age >= 120 ){
//     level = "retired"
// } else if(age >= 60)
//     {level = "employed"
// } else if(age >= 24)
//     {level = "campus";
// } else if(age >= 18)
//     {level = "high school";
// } else if(age >= 15)
//     {level ="primary";
// }
//     console.log(level);  

// }
let level;
let age = 54;

if (age >= 60) {
    level = "retired";
} else if (age >= 24) {
    level = "employed";
} else if (age >= 18) {
    level = "campus";
} else if (age >= 15) {
    level = "high school";
} else if (age >= 10) {
    level = "primary";
} else {
    level = "below primary";
}

console.log(level);
