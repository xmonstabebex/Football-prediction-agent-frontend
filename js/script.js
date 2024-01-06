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
