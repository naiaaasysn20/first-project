//field to input the details
const username = document.getElementById("username");
const password = document.getElementById("password");
const enter = document.getElementById("enter");

const usernameSample = "admin";
const passwordSample = "admin";


function checkAndDisplayDetails() {
    event.preventDefault();

    if (username.value === "" || password.value === "") {
        alert("Please fill out all fields");
        return;
    }  else if (username.value === usernameSample && password.value === passwordSample) {
        
        window.location.href = "index.html";
        alert("Login Successful"); 
    } else {
        alert("Incorrect username or password");
    }
}

enter.addEventListener("click", function() {
    checkAndDisplayDetails();
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAndDisplayDetails();
    }
});