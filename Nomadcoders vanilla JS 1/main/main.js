const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function LoginBtnClick() {
    console.log(loginInput.value);

}

loginButton.addEventListener("click", LoginBtnClick);