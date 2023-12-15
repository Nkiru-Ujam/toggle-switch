let switchButton = document.querySelector(".slider");

function callback() {
    
    document.body.classList.toggle("darkmode")
}

console.log(switchButton)

switchButton.addEventListener("click", callback)