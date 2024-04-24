// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

// Rendering Html
let htmlCode = "";

getStorage();
storage.forEach((profile) => {
    htmlCode += `
    <a href="/view/${profile.profileName}">
        <div class="profile-div">
            <img class="profile-image" src="${profile.profilePicture}">
            <p class="profile-name">${profile.profileName}</p>
        </div>
    </a> 
    `;
});

document.querySelector(".profiles").innerHTML = htmlCode;