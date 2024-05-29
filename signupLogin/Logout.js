import { auth,  signOut  } from "./firebase.js"

export function Logout(){
    let logout = document.getElementById("logout_btn")
   logout.addEventListener("click",()=>{
    
    signOut(auth).then(() => {
        alert("sign out successfully")
      }).catch((error) => {
         console.log('error=>',error)
      });
      });
   }
  

