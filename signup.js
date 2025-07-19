var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword5") || document.querySelector("#inputPassword5");
var registerBtn = document.querySelector("#registerBtn");
var successMsg = document.querySelector("#successMsg");
var errorMsg = document.querySelector("#errorMsg");
var form = document.querySelector("form");
var eyeCheckbox = document.getElementById("eye");
var inputPassword5 = document.getElementById("inputPassword5");

let usersArray = [];
if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
}

var registerUser = () => {
    errorMsg.classList.add("d-none");
    successMsg.classList.add("d-none");

    if (userName.value.trim() === "" || userEmail.value.trim() === "" || userPassword.value.trim() === "") {
        errorMsg.innerText = "All fields are required!";
        errorMsg.classList.remove("d-none");
        return;
    }

    var matchedUser = usersArray.find((user) => user.email === userEmail.value);
    if (matchedUser) {
        errorMsg.innerText = "Email already exists";
        errorMsg.classList.remove("d-none");
        return;
    }

    var user = {
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        password: userPassword.value.trim()
    };

    usersArray.push(user);
    localStorage.setItem("Users", JSON.stringify(usersArray));

    successMsg.innerText = "Success";
    successMsg.classList.remove("d-none");

    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
};

registerBtn.addEventListener('click', registerUser);
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

eyeCheckbox.addEventListener("change", function () {
    if (eyeCheckbox.checked) {
        inputPassword5.type = "text";
    } else {
        inputPassword5.type = "password";
    }
});
