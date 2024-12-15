const menuIcon = document.querySelector(".menu-icon");
const dropdown = document.getElementById("DropdownMenu");
let hideTimeout;


menuIcon.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout); 
    dropdown.style.display = "block";
});


dropdown.addEventListener("mouseover", () => {
    clearTimeout(hideTimeout);
    dropdown.style.display = "block";
});
menuIcon.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
        dropdown.style.display = "none";
    }, 300); 
});


dropdown.addEventListener("mouseout", () => {
    hideTimeout = setTimeout(() => {
        dropdown.style.display = "none";
    }, 300); 
});