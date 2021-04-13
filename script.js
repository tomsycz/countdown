const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("coutdownForm");
const dateEl = document.getElementById("date-picker");

// Set DAte imput Min with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
