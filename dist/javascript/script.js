
//Prevents submit button from resetting page and the event handler for the submit button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("team-form").addEventListener("submit", function(event) {
    event.preventDefault();
    });

    let submit = document.getElementById("submit");
    submit.addEventListener("click", myLineUp);
});

//Function to extract data, create string of that data and show it to the end-user
function myLineUp() {
    console.clear();
    const status = document.querySelector('input[name="status"]:checked').value;
    const date = document.querySelector('select[name="gameDate"]').value;
    const players = Array.from(document.querySelectorAll('input[name="player"]:checked')).map(indPlayer => indPlayer.value);

    console.log("Status: " + status);
    console.log("Date: " + date);

    if(players.length < 1) {
        console.log("Players: No players selected!");
        output = "<b>Status:</b> " + status + "<br><b>Date:</b> " + date + "<br><b>Players:</b> No players selected!";
    }
    else {
        console.log("Players: " + players.join(", "));
        output = "<b>Status:</b> " + status + "<br><b>Date:</b> " + date + "<br><b>Players:</b> " + players.join(", ");
    }

    if (document.querySelector('p[name="results"]') === null) {
        const results = document.createElement("p");
        const resultContainer = document.getElementById("result-paper");
        results.setAttribute("name", "results");
        results.innerHTML = output;
        resultContainer.appendChild(results);
    }
    else {
        const results = document.querySelector('p[name="results"]');
        results.innerHTML = output;
    }
}

