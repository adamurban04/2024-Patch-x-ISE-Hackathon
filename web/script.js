console.log("JS Connected...");

// JavaScript for loading content dynamically

document.addEventListener("DOMContentLoaded", function() {
    loadPage('about.html'); // Default to the About page
});
  
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.querySelector('main').innerHTML = data;
        });
}
  