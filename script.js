const API_URL =
"https://script.google.com/macros/s/AKfycbzE6zjlrA2iTSYsG4upYnk7Gv0PQduWv74r4cRBU-EGPEUnQBrclQl8Pf--FX44xdeeEg/exec";

let currentUser=null;

// LOGIN

async function doLogin(){

const user=
document.getElementById(
"loginUser"
).value;

const pass=
document.getElementById(
"loginPass"
).value;

if(!user||!pass){

showLoginError(
"Enter username & password"
);

return;

}

try{

const res=
await fetch(
API_URL+
"?action=login"+
"&user="+user+
"&pass="+pass
);

const data=
await res.json();

if(data.success){

currentUser=data.user;

document.getElementById(
"loginScreen"
).style.display="none";

document.getElementById(
"app"
).style.display="block";

navigate("dashboard");

}

else{

showLoginError(
data.message
);

}

}

catch{

showLoginError(
"Connection error"
);

}

}

// NAVIGATION

function navigate(page){

if(page==="dashboard"){

loadDashboard();

}

}

// DASHBOARD

async function loadDashboard(){

document.getElementById(
"pageContent"
).innerHTML="Loading...";

try{

const res=
await fetch(
API_URL+
"?action=getDashboard"
);

const data=
await res.json();

const s=data.stats;

document.getElementById(
"pageContent"
).innerHTML=

`

<h2>Total Motors: ${s.totalMotors}</h2>

<h3>Running: ${s.running}</h3>

<h3>Repair: ${s.underRepair}</h3>

<h3>Spare: ${s.spare}</h3>

`;

}

catch{

document.getElementById(
"pageContent"
).innerHTML="Error";

}

}

// SIDEBAR

function toggleSidebar(){

document.getElementById(
"sidebar"
).classList.toggle(
"open"
);

}

// ERROR

function showLoginError(msg){

const el=
document.getElementById(
"loginError"
);

el.innerText=msg;

el.style.display="block";

}
