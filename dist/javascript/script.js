
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("team-form").addEventListener("submit", function(event) {
    event.preventDefault();
    });
    let submit = document.getElementById("submit");

    submit.addEventListener("click", myLineUp);
});



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
        const resultContainer = document.getElementById("result-container");
        results.setAttribute("name", "results");
        results.innerHTML = output;
        resultContainer.style.height = "300px";
        resultContainer.style.width = "50vw";
        resultContainer.style.border = "5px solid #9d9d9d";
        setTimeout(() => {resultContainer.appendChild(results);}, 1000);
    }
    else {
        const results = document.querySelector('p[name="results"]');
        results.innerHTML = output;
    }
}

