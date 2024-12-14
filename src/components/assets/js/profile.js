//field to input the details
const username = document.getElementById("username");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const chapter = document.getElementById("chapter");
const confirm = document.getElementById("confirm");

//field to output the details
const outputUsername = document.getElementById("usernameOrig");
const outputFName = document.getElementById("firstname");
const outputLName = document.getElementById("lastname");
const outputEmail = document.getElementById("emailOrig");
const outputChapter = document.getElementById("chapterOrig");


        //condition to check if the input is empty
    function checkAndDisplayDetails() {
        if (username.value === "" || fname.value === "" || lname.value === "" || email.value === "" || chapter.value === "") {
            alert("Please fill out all fields");
                return;
            } else {
        //Inputs the details to profile section
                displayDetails();
                document.querySelector(".popup").classList.remove("active");
        }
    }

//Event listener for the confirm button
confirm.addEventListener("click", checkAndDisplayDetails);

// Event listener for the Enter key press
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAndDisplayDetails();
    }
});

//Function to display the details
function displayDetails() {
    outputUsername.innerHTML = username.value;
    outputFName.innerHTML = "<i class='fa-solid fa-file-signature'></i> " + fname.value;
    outputLName.innerHTML = lname.value;
    outputEmail.innerHTML = "<i class='fa-solid fa-envelope'></i> " + email.value;
    outputChapter.innerHTML = "<i class='fa-solid fa-location-dot'></i> " + chapter.value;
}

//Profile picture upload
let profilePic = document.getElementById("profile-pic");
let profilePic1 = document.getElementById("profile-pic-small");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    profilePic1.src = URL.createObjectURL(inputFile.files[0]);
}

document.querySelector("#edit-button").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-button").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup #button-cancel").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
});