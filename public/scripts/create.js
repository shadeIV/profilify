// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

// Submit Button
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
    const profileName = document.querySelector(".profile-name-input").value;
    const profileBanner = document.querySelector(".profile-banner-input").value;
    const profilePicture = document.querySelector(".profile-picture-input").value;
    const profileBackground = document.querySelector(".profile-background-input").value;
    const profileNick = document.querySelector(".profile-nick-input").value;
    const profileDescription = document.querySelector(".profile-description-input").value;
    const profileColor = document.querySelector(".profile-color").value;
    const textColor = document.querySelector(".text-color").value;
    const borderColor = document.querySelector(".border-color").value;

    // Checking If There Is A Empty Input
    if (profileName && profileBanner && profilePicture && profileBackground && profileNick && profileDescription) {
        const newProfile = {
            profileName,
            profileBanner,
            profilePicture,
            profileBackground,
            profileNick,
            profileDescription,
            profileColor,
            textColor,
            borderColor
        };

        saveToStorage(newProfile);

    };
});

// Profile Name Input
document.querySelector(".profile-name-input").addEventListener("keyup", () => {
    const profileName = document.querySelector(".profile-name-input").value;

    let matchedProfile = false;
    getStorage();
    storage.forEach((profile) => {
        if (profile.profileName == profileName) {
            matchedProfile = true;
        }
    });

    if (matchedProfile){
        submitButton.disabled = true;
        document.querySelector(".error-p").innerText = `There is an existing profile with the name of "${profileName}"`;
    } else { 
        submitButton.disabled = false
        document.querySelector(".error-p").innerText = "";
    };
    
});