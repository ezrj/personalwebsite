window.onload = function() {
    var buttons = document.querySelectorAll('.portfolioSquareButton');
    var dynamicContentContainer = document.getElementById('dynamicLink');

    buttons[0].onclick = function() {
        dynamicContentContainer.innerHTML = '<p id="replaceableLink">Skills - Languages: Python, JavaScript, Assembly, C++ ||| Tools: MatPlotLib, React, Node, Express.js, MongoDB, Mongoose, Pipedream, Playwright, JSX, Electron, Selenium ||| Miscellaneous: LaTeX, Blender, Yosys, ABC, Git, Github, Linux, LTSpice, SLURM, Postgresql ||| Soft Skills: Problem Solving, Teamwork, Communication <img src="pictures/IMG_2224.jpg" alt="Image description" style="height:200px; margin-top:20px; border-radius:10px;"/></p>';
    };

    buttons[1].onclick = function() {
        dynamicContentContainer.innerHTML = '<a href="https://docs.google.com/document/d/1sGSlxGX9mVve7tX1sesGkt9JjJSwxh2bu6Uw1CoMcOw/edit?usp=sharing" id="replaceableLink"><img src="pictures/resume.png" alt="Resume" height="400"/></a>';
    };

    buttons[2].onclick = function() {
        dynamicContentContainer.innerHTML = '<p id="replaceableLink">Areas of Interest - 1. Hardware Security: I have been a part of the Secure and Trustworthy Hardware lab here and have enjoyed my work. 2. Firmware: I am working for a student startup where I am tasked with writing and reviewing firmware code for our prototype. <img src="pictures/DJI_0174.jpg" alt="Image description" style="height:200px; margin-top:20px; border-radius:10px;"/></p>';
    };
};
