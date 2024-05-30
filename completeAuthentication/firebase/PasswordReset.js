import { auth, sendPasswordResetEmail } from "./firebase.js"


export function Password() {
    let ResendPassword = document.getElementById("ResendPassword")
    let email = document.getElementById("loginemail");
    if (ResendPassword) {
        ResendPassword.addEventListener("click", () => {
            sendPasswordResetEmail(auth, email.value)
                .then(() => {
               
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
        })
    }

}