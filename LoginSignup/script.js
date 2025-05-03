
function changeTitle(newText) {
    const titleElement = document.getElementById('DisplayTitle');

    titleElement.classList.add('title-slide-out');

    setTimeout(() => {
        titleElement.innerText = newText;
        titleElement.classList.remove('title-slide-out');
        titleElement.classList.add('title-slide-in');
    }, 200)
}

function showSingup() {
    changeTitle("Signup");
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function showLogin() {
    changeTitle("Login");
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
}