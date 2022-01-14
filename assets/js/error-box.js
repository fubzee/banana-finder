const closeErrorButton = document.getElementById("error-close-button")
const overlay = document.getElementById("overlay")
const errorContainer = document.getElementById("error-container")

// Function if lyrics are not found 
/* if (lyrics are not found) {
    overlay.classList.add("active")
    errorContainer.classList.add("active")
} 
*/

// Close Error Box Button 
function closeContainer() {
   console.log("button pressed")
   overlay.classList.remove("active") 
   errorContainer.classList.remove("active")
}
closeErrorButton.addEventListener("click", closeContainer);