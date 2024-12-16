// main.js - Basic Example Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
});


const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

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
