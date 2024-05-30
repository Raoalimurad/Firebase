import { auth, onAuthStateChanged } from "./firebase.js"

export function AuthChange() {
    let logOut = document.getElementById("logOut")
    let signInElement = document.getElementById("singIn");
    let loginElement = document.getElementById("Login");
    let showUserEmail = document.getElementById("showUserEmail")
    let emailVerification = document.getElementById("emailVerification")
    onAuthStateChanged(auth, (user) => {
        if (user) {
            signInElement.style.display = "none";
            loginElement.style.display = "none";

            logOut.style.display = "flex"
           
            showUserEmail.textContent = user.email
            if(emailVerification){
                emailVerification.textContent=user.emailVerified  ? "Email Verified" 
                : "Email Not Verified";
            }
        } else {

            signInElement.style.display = "flex";
            loginElement.style.display = "flex";

            logOut.style.display = "none"
        }
    });
}
AuthChange();