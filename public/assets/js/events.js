//field to input the details
const eventName = document.getElementById("event-name");
const eventDescription = document.getElementById("event-description");
const eventDate = document.getElementById("event-date");
const eventTime = document.getElementById("event-time");
const eventLocation = document.getElementById("event-location");
const eventImage = document.getElementById("event-image");
const createEvent = document.getElementById("create-event");

//field to output the details
const outputImage = document.getElementById("image-origin");
const outputName = document.getElementById("name-origin");
const outputDescription = document.getElementById("description-origin");
const outputDate = document.getElementById("date-origin");
const outputTime = document.getElementById("time-origin");
const outputLocation = document.getElementById("location-origin");
const joinButton = document.getElementById("join-event");

//condition to check if the input is empty
function checkAndDisplayDetails() {
    if (eventName.value === "" || eventDescription.value === "" || eventDate.value === "" || eventTime.value === "" || eventLocation.value === "" || eventImage.value === "") {
        alert("Please fill out all fields");
        } else if (eventDescription.value.length > 250) {
            alert("Description must be less than 250 characters long"); 
        } else {
    //Inputs the details to profile section
            displayDetails();

    }
}

//Event listener for the confirm button
createEvent.addEventListener("click", checkAndDisplayDetails);


// Event listener for the Enter key press
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkAndDisplayDetails(event);
    }
});

//Function to display the details
function displayDetails() {

    outputImage.src = URL.createObjectURL(eventImage.files[0]);
    outputName.innerHTML = eventName.value;
    outputDescription.innerHTML = eventDescription.value;
    outputDate.innerHTML =  eventDate.value;
    outputTime.innerHTML = "@" + eventTime.value;
    outputLocation.innerHTML = eventLocation.value;
}