{
    let button = document.getElementById("submitBtn")
    sampleNumbers ="0123456789"
    sampleSpecial ="#@\\|*&%^$£"
    uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowecase="abcdefghijklmnopqrstuvwxyz"
    function checkpassword(password, regular) {
        for(i =0;i<regular.length;i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }
    function validatePassword(){
        let password = document.getElementById("Password").value
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial) &&  (password.length>8) &&  checkpassword(password, uppercase) &&  checkpassword(password, lowecase)){
            alert("Correct")
        }else{
            alert("Incorrect")
        } 
    }
    button.addEventListener('click', validatePassword)
}

