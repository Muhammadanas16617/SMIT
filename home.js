const greeting = document.querySelector('.greeting');

window.onload = () => {
    if (!sessionStorage.name) {
        location.href = './login.html';
    } else {
        greeting.innerHTML = `Hello ${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.href = './login.html';
}
