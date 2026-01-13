const submitbtn = document.querySelector(".submit-btn");
const nameErr = document.querySelector(".nameErr");
const emailErr = document.querySelector(".emailErr")
const passwordErr = document.querySelector(".passwordErr");


submitbtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (validateName() && validateEmail() && validatePassword()) {
        alert("Form submited succesfully");
    }
});

function validateName() {
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameErr.innerHTML = "Name is required";
        nameErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameErr.innerHTML = "Write full Name";
        nameErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameErr.innerHTML = "";
    nameErr.previousElementSibling.classList.add('fa-check');
    return true;
}
function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailErr.innerHTML = "email is required";
        emailErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        emailErr.innerHTML = "write valid email";
        emailErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailErr.innerHTML = "";
    emailErr.previousElementSibling.classList.add('fa-check');
    return true;
}
function validatePassword() {
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passwordErr.innerHTML = "password is required";
        passwordErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        passwordErr.innerHTML = "password must be 1 uppercase, 1 lowercase, 1 digit & 1 alphabet";
        passwordErr.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordErr.innerHTML = "";
    passwordErr.previousElementSibling.classList.add('fa-check');
    return true;
}