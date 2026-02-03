function showMessage() {
    alert("JavaScript is working correctly!");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Form submitted successfully.");
    return true;
}
