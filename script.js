const username = document.querySelector('.username');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const button = document.querySelector('.btn');

// Username
username.addEventListener('click', () => {
    username.style.backgroundColor = 'lime';
});
username.addEventListener('blur', () => {
    username.style.backgroundColor = 'white';
});

// Email
email.addEventListener('click', () => {
    email.style.backgroundColor = 'lime';
});
email.addEventListener('blur', () => {
    email.style.backgroundColor = 'white';
});

// Message
message.addEventListener('click', () => {
    message.style.backgroundColor = 'lime';
});
message.addEventListener('blur', () => {
    message.style.backgroundColor = 'white';
});

button.addEventListener('click', (event) => {
    let errorMsg = "";

    if (username.value.trim() === "") errorMsg += "Username is required.\n";
    if (email.value.trim() === "") errorMsg += "Email is required.\n";
    if (message.value.trim() === "") errorMsg += "Message is required.\n";

    if (errorMsg !== "") {
        alert(errorMsg);
        event.preventDefault();
    }
});
