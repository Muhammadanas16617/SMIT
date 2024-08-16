import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from './firebas.js'

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
})

window.onload = () => {
    if (sessionStorage.name) {
        location.href = '/';
    }
}

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if (name == null) { 
    submitBtn.addEventListener('click', () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredential => {
            sessionStorage.name = userCredential.user.displayName;
            sessionStorage.email = userCredential.user.email;
            location.href = '/';
        })
        .catch(error => {
            alertBox(error.message);
        });
    })
} else { 
    submitBtn.addEventListener('click', () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredential => {
            const user = userCredential.user;
            user.updateProfile({ displayName: name.value })
            .then(() => {
                sessionStorage.name = name.value;
                sessionStorage.email = email.value;
                location.href = '/';
            });
        })
        .catch(error => {
            alertBox(error.message);
        });
    })
}

const alertBox = (message) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = message;

    alertContainer.style.top = '5%';
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}
