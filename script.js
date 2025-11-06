// Beispielhafte Daten für Admin-Code und Benutzercodes
const adminCode = "admin123"; // admin Code
const userCodes = {
  ramona: "oberwasser",
  gianluca: "schlechtgamer",
  mary: "kochen",
  rolf: "gigu",
  angela: "kirche",
  giovanni: "geschenk",
};

// Feste Zuordnung der Wichtelpartner
const wichtelZuordnung = {
  ramona: "Giovanni",
  gianluca: "Mary",
  mary: "Rolf",
  rolf: "Angela",
  angela: "Ramona",
  giovanni: "Gianluca",
};

// Funktion, um den Wichtelpartner anzuzeigen
function checkUserCode() {
  const userName = document.getElementById("name").value.trim();
  const userCode = document.getElementById("userCode").value.trim();

  if (!userName || !userCode) {
    alert("Bitte alle Felder ausfüllen.");
    return;
  }

  if (!userCodes[userName] || userCodes[userName] !== userCode) {
    alert("Falscher Name oder Code!");
    return;
  }

  // Zuordnung des Wichtelpartners anzeigen
  const zuordnung = wichtelZuordnung[userName];
  document.getElementById("wichtelPartner").textContent = zuordnung;

  document.getElementById("userInput").style.display = "none";
  document.getElementById("output").style.display = "block";
}

// Admin Bereich
function checkAdminCode() {
  const enteredAdminCode = document.getElementById("adminCode").value.trim();
  if (enteredAdminCode !== adminCode) {
    alert("Falscher Admin Code!");
    return;
  }

  // Admin zeigt alle Zuordnungen
  let output = "";
  for (let user in wichtelZuordnung) {
    output += `${user} -> ${wichtelZuordnung[user]}\n`;
  }

  document.getElementById("adminList").textContent = output;
  document.getElementById("adminSection").style.display = "none";
  document.getElementById("adminOutput").style.display = "block";
}

// Funktion, um den Admin-Bereich ein- oder auszublenden
function toggleAdminSection() {
  const adminSection = document.getElementById("adminSection");
  if (
    adminSection.style.display === "none" ||
    adminSection.style.display === ""
  ) {
    adminSection.style.display = "block"; // Zeige den Admin-Bereich
  } else {
    adminSection.style.display = "none"; // Verstecke den Admin-Bereich
  }
}

// Timer für den Countdown

// Countdown starten
startTimer();
pi;

const snowContainer = document.getElementById("snowflakes");

// 60 Schneeflocken generieren
for (let i = 0; i < 60; i++) {
  const flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.style.left = Math.random() * 100 + "vw";
  flake.style.animationDuration = 10 + Math.random() * 10 + "s"; // Geschwindigkeit
  flake.style.animationDelay = Math.random() * 5 + "s";
  flake.style.width = flake.style.height = 4 + Math.random() * 6 + "px";
  snowContainer.appendChild(flake);
}
