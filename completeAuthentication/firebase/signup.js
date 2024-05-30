import { AuthChange } from "./AuthChange.js";
import {auth,createUserWithEmailAndPassword, sendEmailVerification} from "./firebase.js"

export function SignUp() {
    let signup = document.getElementById("signup");
    if (signup) {
        signup.addEventListener("click", () => {
            let email = document.getElementById("email");
            let password = document.getElementById("password");
            if (email && password) {
                createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                 
                  const user = userCredential.user;
                  
                  sendEmailVerification(user)
                  .then(() => {
                    alert("Verification email sent.");
                  })
                  .catch((error) => {
                    console.error("Error sending verification email:", error);
                  });
                  window.location.href = "index.html";
                  AuthChange()
                  
                })
                .catch((error) => {
                    let erorrShow = document.getElementById("erorrShow")
                  const errorMessage = error.message;
                  erorrShow.innerHTML = errorMessage
                });

            } else {
                console.error("Email or password element not found");
            }
        });
    }
}
