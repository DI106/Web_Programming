const destination = document.getElementById("destination");
const startButton = document.getElementById("start-adventure");

startButton.addEventListener("click", function () {

    const selectedLocation = destination.value;

    if (selectedLocation === "") {
        alert("Please select a destination!");
        return;
    }

    window.location.href = "multiverse.html#" + selectedLocation;

});