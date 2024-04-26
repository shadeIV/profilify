// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";


// <----- Rendering Profile -----> 


// Getting The Profile Name From The URL
const url = window.location.href;
const res = url.split("/");
const position = res.indexOf("view");
const profileId = res[position + 1];

// Getting Profile
getStorage();
let matchingProfile;
storage.forEach((profile) => {
    if (profile.profileId === profileId) {
        matchingProfile = profile;
    }
});

// Rendering Part
if (matchingProfile) {

    document.querySelector(".banner-image").src = `${matchingProfile.profileBanner}`;
    document.querySelector(".profile-picture-image").src = `${matchingProfile.profilePicture}`;
    document.querySelector("body").style.backgroundColor = `${matchingProfile.profileBackground}`;

    document.querySelector(".nick-p").innerText = `${matchingProfile.profileNick}`;
    document.querySelector(".realName-p").innerText = `/ ${matchingProfile.profileRealName}`;
    document.querySelector(".description-p").innerText = `${matchingProfile.profileDescription}`;
    document.querySelector(".date-p").innerText = `Creation Time : ${matchingProfile.profileDate}`;

    document.querySelector(".profile-div").style.backgroundColor = `${matchingProfile.profileColor}`;
    document.querySelector("p").style.color = `${matchingProfile.textColor}`;
    document.querySelector(".profile-div").style.borderColor = `${matchingProfile.borderColor}`;

}