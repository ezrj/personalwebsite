//function to toggle the stylesheet and ensure theme persistence
function toggleStyleSheet() {
    //get the style element by its ID
    let element = document.getElementById("themeStylesheet"); 

    //determine the current and new stylesheet
    let currentHref = element.getAttribute("href");
    let newHref = currentHref.includes("app1.css") ? "app2.css" : "app1.css";

    //update the stylesheet link
    element.setAttribute("href", newHref);

    //save the new theme to localStorage
    localStorage.setItem('theme', newHref);
}

//apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme') || "app1.css";
    var element = document.getElementById("themeStylesheet");
    element.setAttribute("href", savedTheme);
});

//attach event listener to the theme switch button
document.querySelector('.portfolioThemeBtn').addEventListener('click', toggleStyleSheet);
