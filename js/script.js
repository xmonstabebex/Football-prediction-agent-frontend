// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
function showSection(sectionId, event) {
    event.preventDefault(); // Prevent the default behavior (e.g., page refresh)

    // Hide all sections
    document.getElementById('teams').style.display = 'none';
    document.getElementById('players').style.display = 'none';

    // Remove the 'active' class from all buttons
    var buttons = document.querySelectorAll('.switch-buttons button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Add the 'active' class to the clicked button
    event.target.classList.add('active');
}

// Show the 'teams' section and make the 'Team' button active on page load
window.onload = function () {
    showSection('teams', { preventDefault: function () { } }); // Use an empty event object to prevent errors
};
function changeImage(team) {
    var teamSelect;

    if (team) {
        teamSelect = document.getElementById(`teamSelect${team.charAt(0).toUpperCase() + team.slice(1)}`);
    } else {
        teamSelect = document.getElementById("teamSelect");
        team = ""; // Set an empty string for the default case
    }

    var teamImage = document.getElementById(team || "teamImage");

    // Get the selected option value
    var selectedTeam = teamSelect.value;

    // Set the image source based on the selected option
    switch (selectedTeam) {
        case "Manchester":
            teamImage.src = `imgs/manchester${team ? `_${team}` : ''}.png`;
            break;
        case "Galatasaray":
            teamImage.src = `imgs/galatasaray${team ? `_${team}` : ''}.png`;
            break;
        case "Şırnakspor":
            teamImage.src = `imgs/şırnakspor${team ? `_${team}` : ''}.png`;
            break;
        default:
            // Set a default image source if needed
            teamImage.src = `imgs/default${team ? `_${team}` : ''}.png`;
    }
}
