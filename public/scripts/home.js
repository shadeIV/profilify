// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

// Rendering Html
let htmlCode = "";

getStorage();
storage.forEach((profile) => {
    htmlCode += `
    <a href="/view/${profile.profileId}">
        <div class="profile-div">
            <img class="profile-image" src="${profile.profilePicture}">
            <p class="profile-name">${profile.profileName}</p>
        </div>
    </a> 
    `;
});

if (htmlCode) {
    document.querySelector(".profiles").innerHTML = htmlCode;
} else if (htmlCode == "") { document.querySelector(".profiles").innerHTML = '<p class="no-profile-p">No Profiles Created...</p>' }