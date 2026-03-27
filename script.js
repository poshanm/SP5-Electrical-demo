const API_URL =
"https://script.google.com/macros/s/AKfycbzE6zjlrA2iTSYsG4upYnk7Gv0PQduWv74r4cRBU-EGPEUnQBrclQl8Pf--FX44xdeeEg/exec";

// Dashboard Load

async function loadDashboard() {

try {

const res = await fetch(
API_URL + "?action=getDashboard"
);

const data = await res.json();

if (data.success) {

showDashboard(data.stats);

}
else {

document.getElementById("dashboard")
.innerHTML =
"Error loading dashboard";

}

}
catch(error) {

console.error(error);

document.getElementById("dashboard")
.innerHTML =
"API connection error";

}

}

// Show Data

function showDashboard(stats) {

document.getElementById("dashboard")
.innerHTML = `

<p>Total Motors: ${stats.totalMotors}</p>

<p>Running: ${stats.running}</p>

<p>Under Repair: ${stats.underRepair}</p>

<p>Spare Motors: ${stats.spare}</p>

<p>HT Motors: ${stats.htMotors}</p>

<p>LT Motors: ${stats.ltMotors}</p>

`;

}
