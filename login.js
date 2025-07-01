// this script login a user and allows them to sign up if they don't have an account
function showSignup() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signupBox').style.display = 'block';
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').textContent = '';
}

//this script signs up a user and allows them to log in if they already have an account
function showLogin() {
    document.getElementById('signupBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
    document.getElementById('signupForm').reset();
    document.getElementById('signupError').textContent = '';
    document.getElementById('signupSuccess').textContent = '';
}

// user database default admin user
let users = [
    {name:'Admin', username: 'admin', password: 'password', number:'0123456789', email: 'admin@example.com'}
];

// Login form submit
document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault();
    const user = document.getElementById('loginUsername').value.trim();
    const pass = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('loginError');

    const found = users.find(u => u.username === user && u.password === pass);
    if (found) {
        errorMsg.textContent = '';
        localStorage.setItem("loggedInUser", JSON.stringify(found));
        console.log("User logged in:", found);
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = 'Invalid username or password.';
    }
};

// Signup form submit
document.getElementById('signupForm').onsubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const phone = document.getElementById('signupphoneNumber').value.trim();
    const email = document.getElementById('signupEmail').value;
    const errorMsg = document.getElementById('signupError');
    const successMsg = document.getElementById('signupSuccess');

    const exists = users.find(u => u.username === username);

    if (exists) {
        errorMsg.textContent = 'Username already exists.';
        successMsg.textContent = '';
    } else {
        const newUser = { name, username,password, phone, email};
        users.push(newUser);
        errorMsg.textContent = '';
        successMsg.textContent = 'Signup successful! Please login.';

        localStorage.setItem("lastSignedUpUser", JSON.stringify(newUser));
        console.log("User signed up:", newUser);
        document.getElementById('signupForm').reset();
    }
};
