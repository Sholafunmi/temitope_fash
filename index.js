const showSidebar = document.querySelector(".hamburger");
const sideMenuBar = document.querySelector(".side-menu-bar");
const closeSideBar = document.querySelector(".close-menu-bar");
const sideMenuItems = document.querySelector(".side-menu");
let bar = [];


showSidebar.addEventListener("click", function(){
sideMenuBar.style.transform = "translate(0%)"
}) 


// close side bar 
closeSideBar.addEventListener("click", function(){
    sideMenuBar.style.transform = "translate(100%)"
})

sideMenuItems.addEventListener("click", function(){
    sideMenuBar.style.transform = "translate(100%)"
})