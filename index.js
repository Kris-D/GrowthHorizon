// Set current time in UTC
function updateTime() {
    // Get the current time in UTC
    const now = new Date();
    const utcTime = now.toUTCString();
    const localTime = now.toLocaleTimeString();

    // Display only the time part
    document.getElementById('current-time-utc').textContent = utcTime.split(' ')[4];

    // Set current day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getUTCDay()];
    document.getElementById('current-day').textContent = currentDay;
}

// Update the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);