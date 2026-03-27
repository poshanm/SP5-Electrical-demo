const API_URL =
"https://script.google.com/macros/s/AKfycbzE6zjlrA2iTSYsG4upYnk7Gv0PQduWv74r4cRBU-EGPEUnQBrclQl8Pf--FX44xdeeEg/exec";

// Auto start

window.onload = function () {

navigate("dashboard");

};

// Navigation

function navigate(page) {

if (page === "dashboard")
dashboard();

if (page === "motors")
motors();

if (page === "maintenance")
maintenance();

if (page === "breakdown")
breakdown();

if (page === "repair")
repair();

if (page === "directory")
directory();

}

// Dashboard API

async function dashboard() {

setContent("Loading...");

try {

const res =
await fetch(
API_URL + "?action=getDashboard"
);

const data =
await res.json();

showDashboard(data.stats);

}
catch {

setContent("Dashboard error");

}

}

// Show dashboard

function showDashboard(s) {

setContent(`

<div class="stats-grid">

<div class="stat-card">

<div class="stat-label">

Total Motors

</div>

<div class="stat-value">

${s.totalMotors}

</div>

</div>

<div class="stat-card">

<div class="stat-label">

Running

</div>

<div class="stat-value">

${s.running}

</div>

</div>

<div class="stat-card">

<div class="stat-label">

Under Repair

</div>

<div class="stat-value">

${s.underRepair}

</div>

</div>

<div class="stat-card">

<div class="stat-label">

Spare

</div>

<div class="stat-value">

${s.spare}

</div>

</div>

</div>

`);

}

// helper

function setContent(html) {

document.getElementById(
"pageContent"
).innerHTML = html;

}
