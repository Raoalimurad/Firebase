import {auth,signInWithEmailAndPassword} from "./firebase.js"

export function Login(){
    let login = document.getElementById("login")
    login.addEventListener("click",()=>{
        let email = document.getElementById("loginemail");
        let password = document.getElementById("Loginpassword");
        if (email && password){
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => { 
              const user = userCredential.user;  
              window.location.href = "index.html";
            })
            .catch((error) => {
             let loginError = document.getElementById("loginError")
              const errorMessage = error.message;
              loginError.innerHTML = errorMessage
            });





        }

    })
}