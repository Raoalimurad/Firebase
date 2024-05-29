import { auth,  signInWithEmailAndPassword } from "./firebase.js"

export function Login(){
    let login = document.getElementById("login_btn")
login.addEventListener("click",()=>{
    let loginEmail = document.getElementById("Login_email")
    let loginPass = document.getElementById("login_pass")
    signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user=>",user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("eror=>",errorMessage)
  });
})
}