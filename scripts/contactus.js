document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-details");
    const submitButton = document.getElementById("button");

    // Create confirmation and error message elements
    const confirmationMessage = document.createElement("p");
    const errorMessage = document.createElement("p");

    // Styling the messages
    confirmationMessage.style.display = "none";
    confirmationMessage.style.marginTop = "20px"; // Add spacing between the button and the message
    confirmationMessage.style.color = "green";
    confirmationMessage.style.fontSize = "14px";
    confirmationMessage.textContent = "The form has been successfully submitted!";

    errorMessage.style.display = "none";
    errorMessage.style.marginTop = "200px"; // Add spacing between the button and the message
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.textContent = "Please fill out all fields before submitting the form.";

    // Append the messages below the submit button
    submitButton.parentElement.appendChild(confirmationMessage);
    submitButton.parentElement.appendChild(errorMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let allFieldsFilled = true;
        const inputs = form.querySelectorAll("input");

        // Check if all inputs are filled
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            // If all fields are filled, display confirmation and hide error message
            confirmationMessage.style.display = "block";
            errorMessage.style.display = "none";
            
            // Optional: Gather and log form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log("Form data:", data); // Log the data
        } else {
            // If any field is empty, display error message and hide confirmation
            errorMessage.style.display = "block";
            confirmationMessage.style.display = "none";
        }
    });
});