// Importing Storage Functions
import { storage, getStorage, saveToStorage } from "./storage.js";


// <----- Rendering ----->


// Rendering Profiles
function renderProfiles() {
    let htmlCode = "";

    getStorage();
    storage.forEach((profile) => {
        htmlCode += `
    <div class="profile-div scroll-animation">
        <a class="view-link" href="/view/${profile.profileId}">
            <img class="profile-image" src="${profile.profilePicture}">
            <p class="profile-name">${profile.profileName}</p>
        </a> 
        <div class="profile-buttons-div">
            <a class="edit-profile" href="/edit/${profile.profileId}">Edit Profile</a>
            <button data-profile-id="${profile.profileId}" class="delete-profile-button">Delete Profile</button> 
        </div>
    </div>
    `;
    });

    // Checking If There Is No Profile
    if (htmlCode) {
        document.querySelector(".profiles").innerHTML = htmlCode;
    } else if (htmlCode == "") { document.querySelector(".profiles").innerHTML = '<p class="no-profile-p">No Profiles Created...</p>' }
}

// Rendering Buttons
function renderButtons() {
    const deleteButtons = document.querySelectorAll(".delete-profile-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const profileId = button.dataset.profileId;

            getStorage();
            storage.forEach((profile, profileIndex) => {
                if (profile.profileId === profileId) {
                    storage.splice(profileIndex, 1);
                    localStorage.setItem("storage", JSON.stringify(storage));
                    window.location.reload();
                }
            });
        });
    });
}

// Adding Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else { entry.target.classList.remove("show"); };
    })
});

// Startup Code

renderProfiles();
renderButtons();

const hiddenElements = document.querySelectorAll(".scroll-animation");
hiddenElements.forEach((el) => observer.observe(el));