
import { auth, onAuthStateChanged ,sendEmailVerification } from "./firebase.js"
import { Login } from "./login.js"
import { CreateUser } from "./register.js";
 import { Logout } from "./Logout.js";
  
//////to check user is login


 onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("userId=>",uid)
  } 
  
  
});


  document.addEventListener("DOMContentLoaded", () => {
    Login();
  });
  document.addEventListener("DOMContentLoaded", () => {
    CreateUser();
  });
  document.addEventListener("DOMContentLoaded", () => {
    Logout();
  });







