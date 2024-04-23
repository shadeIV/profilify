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

    // Checking If There Is A Empty Input
    if (profileName && profileBanner && profilePicture && profileBackground && profileNick && profileDescription) {

        // Checking If There Is A Profile With The Same Name
        let matchedProfile = false;
        getStorage();
        storage.forEach((profile) => {
            if (profile.profileName == profileName) {
                matchedProfile = true;
            }
        });

        if (!matchedProfile) {
            const newProfile = {
                profileName,
                profileBanner,
                profilePicture,
                profileBackground,
                profileNick,
                profileDescription
            };

            saveToStorage(newProfile);
        } else { alert("There Is A Profile With The Same Name!") }

    };
});