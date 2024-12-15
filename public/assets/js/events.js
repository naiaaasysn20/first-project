// Input fields
const eventName = document.getElementById("event-name");
const eventDescription = document.getElementById("event-description");
const eventDate = document.getElementById("event-date");
const eventTime = document.getElementById("event-time");
const eventLocation = document.getElementById("event-location");
const eventImage = document.getElementById("event-image");
const createEvent = document.getElementById("create-event");

// Container where all event cards will be appended
const eventsContainer = document.querySelector("#events-container");

// Function to validate input fields and create the event card
function checkAndDisplayDetails() {
    if (
        !eventName.value ||
        !eventDescription.value ||
        !eventDate.value ||
        !eventTime.value ||
        !eventLocation.value ||
        !eventImage.files.length
    ) {
        alert("Please fill out all fields");
    } else if (eventDescription.value.length > 250) {
        alert("Description must be less than 250 characters long");
    } else {
        createEventCard();
    }
}

// Function to dynamically create and append a new event card
function createEventCard() {
    // Create a new card container
    const newCard = document.createElement("div");
    newCard.className = "card mb-3";
    newCard.style.maxWidth = "100%";

    // Populate the card with event details
    newCard.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${URL.createObjectURL(eventImage.files[0])}" class="img-fluid rounded-start" alt="Event Image" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                        ${eventName.value}
                        <span class="badge text-bg-secondary">${eventLocation.value}</span>
                    </h5>
                    <p class="card-text">${eventDescription.value}</p>
                    <p class="card-text"><small>${eventDate.value} @${eventTime.value}</small></p>
                    <button type="button" class="btn btn-primary">Join Event</button>
                    <a href="#" class="card-link delete-event">Delete Event</a>
                </div>
            </div>
        </div>
    `;

    // Append the new card to the events container
    eventsContainer.appendChild(newCard);

    // Clear input fields after the card is added
    clearFields();

    // Add delete functionality to the new card
    const deleteButton = newCard.querySelector(".delete-event");
    deleteButton.addEventListener("click", () => {
        newCard.remove();
    });

    // Adjust the footer to stay at the bottom
    adjustFooter();
}

// Add event listener to "Create Event" button
createEvent.addEventListener("click", checkAndDisplayDetails);

// Function to clear input fields after creating an event
function clearFields() {
    eventName.value = "";
    eventDescription.value = "";
    eventDate.value = "";
    eventTime.value = "";
    eventLocation.value = "";
    eventImage.value = "";
}

// Allow "Enter" key to trigger event creation
document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkAndDisplayDetails();
    }
});

// Function to ensure the footer stays at the bottom
function adjustFooter() {
    const footer = document.querySelector("footer");
    if (footer) {
        footer.style.marginTop = "20px"; // Adjust spacing if needed
        footer.style.position = "relative"; // Ensure it doesn’t float
        footer.style.bottom = "0";
        footer.style.width = "100%";
    }
}
