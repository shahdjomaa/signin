var email = document.querySelector("#email");
var passwordd = document.querySelector("#passwordd");
var login = document.querySelector("#login");
var successMsg = document.querySelector("#successMsg");
var errorMsg = document.querySelector("#errorMsg");
var showIcon = document.getElementById("showPasswordIcon");
var hideIcon = document.getElementById("hidePasswordIcon");
var eyeCheckbox = document.getElementById("eye");

let usersArray = [];

if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
    console.log(usersArray);
}

var loginUser = () => {
    errorMsg.classList.replace("d-block", "d-none");
    successMsg.classList.replace("d-block", "d-none");

    if (email.value.trim() === "" || passwordd.value.trim() === "") {
        errorMsg.innerText = "All inputs are required";
        errorMsg.classList.replace("d-none", "d-block");
        return;
    }

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === email.value && usersArray[i].password === passwordd.value) {
            successMsg.classList.replace("d-none", "d-block");
            localStorage.setItem("UserName", usersArray[i].name);
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000);
            return;
        }
    }

    errorMsg.innerText = "Invalid email or password";
    errorMsg.classList.replace("d-none", "d-block");
};

login.addEventListener('click', loginUser);

eyeCheckbox.addEventListener("change", function () {
    if (eyeCheckbox.checked) {
        passwordd.type = "text";
    } else {
        passwordd.type = "password";
    }
});
