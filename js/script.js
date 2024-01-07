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

    var buttons = document.querySelectorAll('.switch-buttons button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Add the 'active' class to the clicked button
    event.target.classList.add('active');
}
window.onload = function () {
    showSection('teams', { preventDefault: function () { } }); // Use an empty event object to prevent errors
};

//change the team's logo after selecting option
function changeImage(team) {
    var teamSelect;
    var selectedTeam;
    if (team) {
        teamSelect = document.getElementById(`teamSelect${team.charAt(0).toUpperCase() + team.slice(1)}`);
    } else {
        teamSelect = document.getElementById("teamSelect");
        team = "";
    }
    var teamImage = document.getElementById(team || "teamImage");

    if (team == 'first') {
        teamImage1 = document.getElementById("teamSelect1").value;
        selectedTeam = teamImage1;
        team = "";
    } else if (team == 'second') {
        teamImage2 = document.getElementById("teamSelect2").value;
        console.log(teamImage2)
        selectedTeam = teamImage2;
        team = "";
    } else {
        selectedTeam = teamSelect.value;
    }
    // Get the selected option value

    switch (selectedTeam) {
        case "Manchester":
            teamImage.src = `imgs/manchester${team ? `_${team}` : ''}.png`;
            break;
        case "Galatasaray":
            teamImage.src = `imgs/galatasaray${team ? `_${team}` : ''}.png`;
            break;
        case "\u015E\u0131rnakspor": // Unicode escape sequence for "Şırnakspor"
            teamImage.src = `imgs/sirnakspor${team ? `_${team}` : ''}.png`;
            break;
        default:
            teamImage.src = `imgs/default${team ? `_${team}` : ''}.png`;
    }
}