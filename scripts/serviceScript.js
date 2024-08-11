window.onload = function() {
    var buttons = document.querySelectorAll('.portfolioSquareButton');
    var dynamicContentContainer = document.getElementById('dynamicLink');

    buttons[0].onclick = function() {
        dynamicContentContainer.innerHTML = '<a href="https://aggiecodingclub.com/" id="replaceableLink">During my time at Texas A&M, I have served as an officer for the Aggie Coding Club on campus. ACC works to empower students from all walks of life to code by fostering a diverse and welcoming environment for them to learn and interact. I work to plan workshops for students to learn computer science concepts that will serve them well in industry. Such workshops include topics like generative AI, web scraping, and APIs. I also work to plan social events to foster community among the members in hopes that they are able to foster life long relationships and feel more welcome here within the computer science department as Texas A&M. Finally, officers organize projects for students to practice being project managers and software developers, as students work for a semester towards the goal of creating a viable product to present at the end of the semester. Under officer guidance, students learn about working on a team, writing productive code, and building professional products. Click to learn more about the organization.</a>';
    };

    buttons[1].onclick = function() {
        dynamicContentContainer.innerHTML = '<a href="https://camppeniel.org/" id="replaceableLink">During each summer of high school, I served as a camp counselor, where for a week I would supervise a cabin of campers for 24 hours a day, staying with them for all of their activities. Ages of my campers ranged from 5 years old to 14 years old. I taught them outdoor activties such as fishing, archery, canoeing, and camping. I learned much about conflict resolution and running on low amounts of sleep. During weeks where I did not have a cabin, I served as a dish washer or a barn hand. As a barn hand, I tended to 10 horses by brushing them, cleaning their stalls, feeding them, and making sure they had clean water. As a dish washer, I was tasked with collecting, scraping, washing, and drying hundreds of plates, cups, and silverware after each meal. All of this volunteer work taught me much about patience and organization, as well as being productive in overwhelming enviroments. Click to learn more about the organization.</a>';
    };

    
};
