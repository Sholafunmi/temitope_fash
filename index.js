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




// biography read more

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }