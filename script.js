// Simple Function to provide user interaction
function showFeedback() {
    const statusBox = document.getElementById("statusMessage");
    
    // Logic to change text and style dynamically
    statusBox.innerHTML = "✅ Website requirements verified! Project ready for submission.";
    statusBox.style.marginTop = "15px";
    statusBox.style.color = "#27ae60";
    statusBox.style.fontWeight = "bold";
    
    // Log message for developer verification
    console.log("Activity verified by user.");
}