// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

function loadThePage() {
    // Getting The Profile Name From The URL
    const url = window.location.href;
    const res = url.split("/");
    const position = res.indexOf("edit");
    const profileId = res[position + 1];

    // Getting Profile
    getStorage();
    let matchingProfile;
    storage.forEach((profile) => {
        if (profile.profileId === profileId) {
            matchingProfile = profile;
        };
    });

    if (matchingProfile) {

        document.querySelector(".profile-name-input").value = `${matchingProfile.profileName}`;
        document.querySelector(".profile-banner-input").value = `${matchingProfile.profileBanner}`;
        document.querySelector(".profile-picture-input").value = `${matchingProfile.profilePicture}`;
        document.querySelector(".profile-background-input").value = `${matchingProfile.profileBackground};`
        document.querySelector(".profile-nick-input").value = `${matchingProfile.profileNick}`;
        document.querySelector(".profile-realname-input").value = `${matchingProfile.profileRealName}`;
        document.querySelector(".profile-description-input").value = `${matchingProfile.profileDescription}`;
        document.querySelector(".profile-color").value = `${matchingProfile.profileColor}`;
        document.querySelector(".text-color").value = `${matchingProfile.textColor}`;
        document.querySelector(".border-color").value = `${matchingProfile.borderColor}`;

    };

}

document.querySelector(".submit-button").addEventListener("click", () => {

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


    // Getting The Profile Name From The URL
    const url = window.location.href;
    const res = url.split("/");
    const position = res.indexOf("edit");
    const profileId = res[position + 1];

    // Getting Profile
    getStorage();
    storage.forEach((profile, profileIndex) => {
        if (profile.profileId === profileId) {
            const savedProfile = {
                profileName: profileName,
                profileBanner: profileBanner,
                profilePicture: profilePicture,
                profileBackground: profileBackground,
                profileNick: profileNick,
                profileRealName: profileRealName,
                profileDescription: profileDescription,
                profileColor: profileColor,
                textColor: textColor,
                borderColor: borderColor,
                profileId: profile.profileId,
                profileDate: profile.profileDate
            };

            storage[profileIndex] = savedProfile;
            localStorage.setItem("storage", JSON.stringify(storage));
        };
    });

    window.location = res[0] + "/view/" + profileId;
});

// Startup Code
loadThePage();