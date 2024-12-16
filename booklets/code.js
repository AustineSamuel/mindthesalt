// // Get the toggle button and side menu
// const menuToggle = document.getElementById("menuToggle");
// const sideMenu = document.getElementById("sideMenu");

// // Toggle menu open/close
// menuToggle.addEventListener("click", () => {
//   if (sideMenu.style.left === "0px") {
//     sideMenu.style.left = "-250px"; // Close the menu
//   } else {
//     sideMenu.style.left = "0px"; // Open the menu
//   }
// });


document.querySelectorAll('aside li').forEach((e)=>{
    e.onclick=()=>{
    if(window.innerWidth < 1000){
        sideMenu.classList.toggle('active');
    }
}

})