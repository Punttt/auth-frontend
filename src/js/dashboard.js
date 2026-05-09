import { API_URL, showMessage } from "./api.js";

// Hämtar JWT token från session storage
const token = sessionStorage.getItem("token");

// Om inget token finns, skicka tillbaka till login sidan
if(!token) {
    window.location.href = "/login";
}

// Hämtar profildata från skyddad route när sidan laddas
async function loadProfile(){
    try {
        const response = await fetch(`${API_URL}/profile`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();

        if(response.ok) {
            // Fylla i profildata
            document.getElementById("profile-username").textContent = data.user.username;
            document.getElementById("profile-user").textContent = data.user.username;
            document.getElementById("profile-email").textContent = data.user.email;

            // Created date
            const created = new Date(data.user.account_created);
            document.getElementById("profile-created").textContent = created.toLocaleDateString("sv-SE");
        }

    } catch (error) {
        console.error(error);
    }
}

// Eventlyssnare på logga ut knappen för att radera session token.
// När token raderat redirect till login-sidan
document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
});

// Ladda profilsidan.
loadProfile();