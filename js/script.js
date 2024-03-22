const MyHeading = document.querySelector("h1"); 
const imgElement = document.querySelector("img"); 
const img1 = "alatoo-logo (1).png"; 
const img2 = "https://raw.githubusercontent.com/aidar2512/websedign/53be780706b3fbc6ba516a3fedf73eb4fe6dec5d/myWeb/img/mrclogo.svg"; 
function changePhoto(event){ 
    let current = imgElement.getAttribute("src"); 
    if(current == img1){ 
        imgElement.setAttribute("src",img2); 
    } else { 
        imgElement.setAttribute("src", img1) 
    } 
} 
imgElement.onclick = changePhoto; 
 
function askForName() {
    var userName = prompt("Please enter your name:");

    if (userName) {
        document.getElementById("welcomeHeader").textContent = "Welcome"+", "+ userName+"♡";
    }
}