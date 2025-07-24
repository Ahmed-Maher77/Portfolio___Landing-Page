var navButton = document.querySelector("[title='Navigation Bar']");
var mobile = document.querySelector(".mobile");
navButton.onclick = function () {
	this.style.cssText = `color: var(--SecondaryColor)`;
	this.style.rotate = `90deg`;
	mobile.style.height = "281.09px"
};


document.addEventListener("click", function (event) {
    // Check if the clicked element is not the navButton or mobile
    if (event.target !== navButton && event.target !== mobile) {
        // Reset styles when clicking anywhere else on the page
        navButton.style.cssText = "";
        mobile.style.height = ""; // Reset to default height or remove this line if there is no default height
    }
});