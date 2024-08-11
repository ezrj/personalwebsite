
window.onload = function() {
    var buttons = document.querySelectorAll('.portfolioSquareButton');
    var replaceableLink = document.getElementById('replaceableLink');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var link = this.getAttribute('data-link');
            switch(link) {
                case 'link1':
                    replaceableLink.href = 'https://github.com/ohKodiak/ftpserver-scraper';
                    replaceableLink.textContent = 'FTP Server Scraper - Created a python script which uses selenium and a stack implentation of the depth first search algorithm to scrape ftp servers for netCDF files. Click to learn more.';
                    break;
                case 'link2':
                    replaceableLink.href = 'https://github.com/ohKodiak/CircuitGraph';
                    replaceableLink.textContent = 'Circuit Graph - Scripts that take in verilog benchmark file for either synchronous or asynchronus circuits, and produces a json file represented the circuit graph for that circuit. Total shared takes in a circuit graph and creates a csv file with the gates that are shared with the locked key. Click to learn more.'
                    break;
                case 'link3':
                    replaceableLink.href = 'https://github.com/ohKodiak/FileCabinetProject';
                    replaceableLink.textContent = 'File Cabinet - This project was a three week development sprint. We used the MERN stack to complete the file cabinet themed note taking web app. When you run the program, you press the open button on the home page to move to the folders, where you can add and delete folders. The folders store your categorized notes. Click to learn more.';
                    break;
                case 'link4':
                    replaceableLink.href = 'https://github.com/aggie-coding-club/Browser-Extensions';
                    replaceableLink.textContent = 'Lofi Canvas - Worked to create a Chrome browser extension that presented users with the ability to enhance the functionality and aesthetic of their Canvas home page. Click to learn more.';
                    break;
            }
        };
    }
};
