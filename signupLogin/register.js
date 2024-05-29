import { auth, createUserWithEmailAndPassword, sendEmailVerification  } from "./firebase.js"


export function CreateUser(){
    let register = document.getElementById("register_btn")
    register.addEventListener('click',()=>{
      let email = document.getElementById("email")
      let password = document.getElementById("pass")
      createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      sendEmailVerification(user)
        .then(() => {
          alert("Verification email sent.");
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
        });
      // ...
      console.log("user=>",user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("eror=>",errorMessage)
      // ..
    });
     
    })
}