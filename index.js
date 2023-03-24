var button = document.getElementById("submit");

button.addEventListener("click", checkPassword);

function checkPassword(){

    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("reppassword").value;

    if(pass1!==pass2){
        alert("Your passwords dont match");
        event.preventDefault()
    }
}
