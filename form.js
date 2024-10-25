//The form submision function used for lab6
//Murilo Pereira
//501036567

function submitForm() {
    // creates a constant value for each form element 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const urgency = document.querySelector('input[name="urgency"]:checked')?.value; //returns the selected value
    const type = document.querySelector('select[name="requestType"]').value; //returns the selected value in the drop down
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(i => i.value); //creates an array of interests that are selected for the multiselect
    const message = document.getElementById('message').value;

    // Create an object to store constants from the form data
    const formData = {
        name,
        email,
        phone,
        urgency,
        type,
        interests,
        message
    };

    // Store form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData)); //Stores data as a JSON file

    //Writes to console the saved JSON file for feedback when testing
    console.log(localStorage.getItem("contactFormData")); 
    
    // Notify the user
    alert('Form submitted successfully! Data has been saved to local storage as a JSON File');
    
    // Clear form fields
    document.getElementById('contactForm').reset();
}