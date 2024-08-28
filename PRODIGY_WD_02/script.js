let startTime, updatedTime, difference, tInterval;
let running = false;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateDisplay, 10); // Update every 10 milliseconds
        running = true;
    }
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10); // Calculate milliseconds

    // Format the time
    const formattedHours = (hours < 10 ? "0" + hours : hours);
    const formattedMinutes = (minutes < 10 ? "0" + minutes : minutes);
    const formattedSeconds = (seconds < 10 ? "0" + seconds : seconds);
    const formattedMilliseconds = (milliseconds < 10 ? "0" + milliseconds : milliseconds); // Ensure two digits

    // Update display
    document.getElementById("hours").innerHTML = formattedHours;
    document.getElementById("minutes").innerHTML = formattedMinutes;
    document.getElementById("seconds").innerHTML = formattedSeconds;
    document.getElementById("milliseconds").innerHTML = formattedMilliseconds;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    difference = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00"; // Reset milliseconds
    running = false;
}

function lapTimer() {
    const lapTime = `${document.getElementById("hours").innerHTML}:${document.getElementById("minutes").innerHTML}:${document.getElementById("seconds").innerHTML}:${document.getElementById("milliseconds").innerHTML}`;
    const lap = document.createElement("div");
    lap.innerHTML = `Lap: ${lapTime}`;
    laps.appendChild(lap);
}

document.getElementById("start").onclick = startTimer;
document.getElementById("pause").onclick = pauseTimer;
document.getElementById("reset").onclick = resetTimer;
document.getElementById("lap").onclick = lapTimer;
