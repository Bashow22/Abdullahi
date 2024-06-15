// {
//     let grade;
//     let mark = 70;
//     if (mark == 85){
//      grade = "A";
//     }else if(mark == 70){
//      grade = "B"
//     }else if(mark == 60){
//      grade = "C";
//     }else (mark >=40)
//      grade = "E";
    
//     console.log(grade);  
// }

// {

//     class Calculator  {
//     static Add (a, b){
//         return a + b
//     }
//     static Subtract(a, b){
//         return a - b
//     }
//     static MUltiply(a,b){
//         return a * b
//     }
//     static Division(a, b){
//         return a / b
//     }
//     static Percent(a, b){
//         return a % b
//     }
// }
//     console.log( Calculator.Percent(30, 1000))
// } 

class Student{
    #age
    constructor(name, age, avg){
        this.name = name
        this.#age = age
        this.avg = avg
    }
    getGrade(){
        if(this.avg>50){
            return "pass"
         } else{
                return "fail"
            }
        
    }
    get getAge(){
        return this.#age
    }

    get getName(){
        return this.name
    }

    set setAge(newAge){
        this.#age = newAge
    }
    set setName(newName){
        this.name = newName
    }
    static getSchooldetails(){
        console.log("This school is called Zawadi Primary.");
    }
  }
    let studentObj = new Student("John", 13, 78)
    studentObj.setAge = 14
    studentObj.setName = "Dan"

    console.log(studentObj.getAge);
    console.log(studentObj.getName);
    
