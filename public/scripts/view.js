// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";

// Getting The Profile Name From The URL
const url = window.location.href;
const res = url.split("/");
const position = res.indexOf("view");
const profileName = res[position + 1];

// <----- Rendering Profile -----> 

// Getting Profile
getStorage();
let matchingProfile;
storage.forEach((profile) => {
    if (profile.profileName === profileName){
        matchingProfile = profile;
    }
});

// Rendering Part
if (matchingProfile){

    document.querySelector(".banner-image").src = `${matchingProfile.profileBanner}`;
    document.querySelector(".profile-picture-image").src = `${matchingProfile.profilePicture}`;
    document.querySelector("body").style.backgroundImage = `url("${matchingProfile.profileBackground}")`;

    document.querySelector(".nick-p").innerText = `${matchingProfile.profileNick}`;
    document.querySelector(".description-p").innerText = `${matchingProfile.profileDescription}`;

    document.querySelector(".profile-div").style.backgroundColor = `${matchingProfile.profileColor}`;
    document.querySelector("p").style.color = `${matchingProfile.textColor}`;
    document.querySelector(".profile-div").style.borderColor = `${matchingProfile.borderColor}`;
    
}