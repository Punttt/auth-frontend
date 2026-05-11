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
    if (!username || !email || !password) {
        showMessage("message", "Alla fält måste fyllas i", "error");
        return;
    }

    try {
        // Skickar POST anrop till backend.
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        }); 

        const data = await response.json();
        
        // Hanterar response från servern
        if(response.ok) {
            showMessage("message", "Konto skapat", "success");
        } else {
            showMessage("message", "Något gick fel, försök igen senare", "error");
        }
    } catch (error) {
        console.error(error);
        showMessage("message", "Kunde inte ansluta till servern", "error")
    }
})