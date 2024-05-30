import { provider,auth,signInWithPopup } from "./firebase.js";


export function SignWithGoogle(){
    let Google = document.getElementById("Google")
    Google.addEventListener("click",()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("userss",user)
          
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          
          const email = error.customData.email;
        
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    })

}