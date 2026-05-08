// Importerar API:et
import { API_URL, showMessage } from "./api.js";

// Hämtar form från index.html
const form = document.querySelector("form");

// Eventlyssnare för form.
form.addEventListener("submit", async (e) => {
    // Förhindrar sidomladdning
    e.preventDefault();

    // Hämtar värdena 
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Klientvalidering
    if (!username | !email | !passord) {
    }
})