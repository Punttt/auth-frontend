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

    } catch (error) {
        console.error(error);
    }
}