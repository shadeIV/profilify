// Generating Random Id
export function generateRandomId() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
};

// Getting Date
export function getDate() {
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    var formattedDateTime = `${day}/${month}/${year}`;

    return formattedDateTime;
};