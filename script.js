function startAdventure() {
    const playerName =
        document.getElementById("player-name").value;

    const playerEmail =
        document.getElementById("player-email").value;

    const destination =
        document.getElementById("destination").value;

    const adventureMessage =
        document.getElementById("adventure-message").value;

    const message =
        document.getElementById("message");

    if (playerName === "") {
        message.textContent = "Please enter your name!";
        return;
    }

    if (playerEmail === "") {
        message.textContent = "Please enter your email!";
        return;
    }

    if (destination === "") {
        message.textContent = "Please select a destination!";
        return;
    }

    if (adventureMessage === "") {
        message.textContent = "Please enter your adventure message!";
        return;
    }

    window.location.href =
        "multiverse.html#" + destination;
}