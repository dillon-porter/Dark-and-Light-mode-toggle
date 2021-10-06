const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navBarLinks = document.getElementsByClassName("navbar-links")[0]
const darkBtn = document.getElementById("dark-btn")

toggleBtn.addEventListener("click", function() {
    navBarLinks.classList.toggle('active')
})

darkBtn.addEventListener("click", function(changeText) {
    document.body.classList.toggle("dark-mode")

    if (changeText.target.textContent === "Dark Mode") {
        changeText.target.textContent = "Light Mode"
    } else {
        changeText.target.textContent = "Dark Mode"
    }

}) 
