function updateClock() {
    let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[now.getDay()];
    let date = now.getDate().toString().padStart(2, '0');
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

    document.getElementById("date").innerHTML = `${dayName} ${date} ${month} ${year}`;
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize immediately