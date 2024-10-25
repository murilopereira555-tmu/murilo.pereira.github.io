
function name_prompt() {
    var name = prompt("What is your name?"); //Prompt to get name
    const user_nameOutput = document.getElementById("user_name"); //Find element id

    user_nameOutput .textContent= "Welcome " + name + "!";

}

function enlarge() {

    var profile_pic = document.getElementById("profile_pic"); //gets the profile pic

    profile_pic.classList.toggle("enlarged"); //toggles the enlarged styling

}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    
    // Toggle between showing and hiding the dropdown
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function submitForm() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(i => i.value);
    const message = document.getElementById('message').value;

    // Create an object to store form data
    const formData = {
        name,
        email,
        phone,
        gender,
        interests,
        message
    };

    // Store form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    
    // Notify the user
    alert('Form submitted successfully! Data has been saved to local storage.');
    
    // Clear form fields
    document.getElementById('contactForm').reset();
}