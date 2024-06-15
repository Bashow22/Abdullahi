// {
//     const myPar = document.getElementsByTagName("p")

//     console.log(myPar.length)
     
//     for ()
// }

// {
//   const myPar = document.getElementById("some_id")
// //   console.log(myPar)
//     myPar.innerHTML = "JAVASCRIPT IS COOL"
//     myPar.innerHTML = '<h1 style="font-size: 2cm: color: grreen;">hello dom with js</h1>';
    // myImaage.src ="https://i.pinimg.com/736x/d1/34/4e/d1344e5e76f08af7e7f0b8ecb7ef2614.jpg" 
//   const myPar2 = document.getElementsByTagName("p")
//   console.log(myPar2)

//   const elementsClass = document.getElementsByClassName("domjs class")
//   console.log(elementsClass)

//   for (let i = 0; i<elementsClass.length; i++){
//     console.log(elementsClass[i])
//   }

//   const elementsByQuery = document.querySelectorAll("h1#domjs class")
//   console.log(elementsByQuery)
// }

{
   
    function  validateInput(){
        let myInput = document.getElementById("numb");

        let user_value = myInput.value 
        
        if (isNaN(user_value) || !(user_value >= 1 && user_value <=10)){
            alert("wrong input")   
        }else{
            alert("correct")
        }
    }



function  changeToUpperCase(){
    let myInput = document.getElementById("numb");

    myInput.value = myInput.value.toUpperCase()
    }
}

// function changeStyle(){
//     const myH1 = document.getElementById("par2")
//     myH1.style.color = "green"

// }