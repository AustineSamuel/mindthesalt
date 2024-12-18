// main.js - Basic Example Script
let menuToggle,sideMenu,overlay;
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
    
 menuToggle = document.getElementById('menuToggle');
 sideMenu = document.getElementById('sideMenu');
 overlay = document.getElementById('overlay');

// Open and close the side menu
menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close the side menu when clicking on the overlay
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});
// document.body.innerHTML=`<h1>This site is currently unavailable`
});

