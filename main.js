

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

