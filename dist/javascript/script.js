
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("teamForm").addEventListener("submit", function(event) {
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
        output = "Status: " + status + "<br>Date: " + date + "<br>Players: No players selected!";
    }
    else {
        console.log("Players: " + players.join(", "));
        output = "Status: " + status + "<br>Date: " + date + "<br>Players: " + players.join(", ");
    }

    if (document.querySelector('p[name="results"]') === null) {
        const results = document.createElement("p");
        results.setAttribute("name", "results");
        results.innerHTML = output;
        document.body.appendChild(results);
    }
    else {
        const results = document.querySelector('p[name="results"]');
        results.innerHTML = output;
    }
}

