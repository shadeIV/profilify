// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

// Importing Extra Functions
import { generateRandomId } from "./extra.js";

// Submit Button
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {

    const profileName = document.querySelector(".profile-name-input").value;
    const profileBanner = document.querySelector(".profile-banner-input").value;
    const profilePicture = document.querySelector(".profile-picture-input").value;
    const profileBackground = document.querySelector(".profile-background-input").value;
    const profileNick = document.querySelector(".profile-nick-input").value;
    const profileRealName = document.querySelector(".profile-realname-input").value;
    const profileDescription = document.querySelector(".profile-description-input").value;
    const profileColor = document.querySelector(".profile-color").value;
    const textColor = document.querySelector(".text-color").value;
    const borderColor = document.querySelector(".border-color").value;

    // Checking If There Is A Empty Input
    if (profileName && profileBanner && profilePicture && profileBackground && profileNick && profileRealName && profileDescription) {
        const newId = generateRandomId();
        const newProfile = {
            profileName,
            profileBanner,
            profilePicture,
            profileBackground,
            profileNick,
            profileRealName,
            profileDescription,
            profileColor,
            textColor,
            borderColor,
            profileId: newId
        };

        saveToStorage(newProfile);

        const currentURL = window.location.href;
        const splitedURL = currentURL.split("/");
        const newURL = `${splitedURL[0]}/view/${newId}`;
        window.location.href = newURL;

        document.querySelector(".error-p").innerText = "";
        
    } else { document.querySelector(".error-p").innerText = "Please Fill in All Blanks"; };
});