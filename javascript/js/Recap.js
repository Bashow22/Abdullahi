{
   const myH3 = document.getElementById("myH3")
   
   const button = document.getElementById("myButton")

    let isDefault = true
   function changeStyleOfH3(){
    if(isDefault){
    myH3.className = "headingStyle2"
    isDefault = false
    }else{
        myH3.className = "headingStyle"
        isDefault = true
    }
    console.log(myH3.className)
   }
}
