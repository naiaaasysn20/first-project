//field to input the details

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const chapter = document.getElementById("chapter");
const confirm = document.getElementById("enter");

function checkAndDisplayDetails() {
    event.preventDefault();

    if (fname.value === "" || lname.value === "" || email.value === "" || username.value === "" || password.value === "" || confirmPassword.value === "" || chapter.value === "") {
        alert("Please fill out all fields");
        return;
    } else if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    } else if (password.value.search(/[a-z]/) < 0) {
        alert("Password must contain at least one lowercase letter");
        return;
    }  else if (!isValidEmail(email.value)) {
        alert("Please enter a valid email address");
    }
    else {
        alert("Registration Successful");
        window.location.href = "login-revised.html";
    }
}

function isValidEmail(email) {
    // Regular expression to check if email follows the @---.com format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

confirm.addEventListener("click", function() {
    checkAndDisplayDetails();
});