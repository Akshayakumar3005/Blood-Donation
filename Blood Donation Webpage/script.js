function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        window.location.href = "idonate.html"; // Redirect to the desired HTML page
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    }
}
