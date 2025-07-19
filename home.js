var welcomeMessage = document.querySelector("#welcomeMessage");
var logOutBtn = document.querySelector("#logOutBtn");

let userName = '';

var logUserOut = () => {
    localStorage.removeItem("UserName");
    welcomeMessage.innerHTML = 'Logging Out!';
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

if (localStorage.getItem("UserName") !== null) {
    userName = localStorage.getItem("UserName");
    console.log(userName);
    welcomeMessage.innerHTML = `Welcome ${userName}`;
}
else {
    console.log("Not Authrized")
    welcomeMessage.innerHTML = "You're not logged in, Redirecting to login page!";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

logOutBtn.addEventListener("click", logUserOut);
