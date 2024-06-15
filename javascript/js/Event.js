{
    const button = document.getElementById("some_button")

    function changeBackground(){
        document.body.style.backgroundColor = "violet"

    }
    button.addEventListener("click", changeBackground)
    document.getElementById("some_button") = "violet"
}
