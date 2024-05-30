import { auth,signOut  } from "./firebase.js";



export function Logout(){
    let logOut = document.getElementById("logOut")
    if(logOut){
        logOut.addEventListener("click",()=>{
            signOut(auth).then(() => {
              AuthChange()
              }).catch((error) => {
                // An error happened.
              });
        })
    }
   
}

