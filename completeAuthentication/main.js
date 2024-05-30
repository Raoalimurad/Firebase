import {SignUp} from './firebase/signup.js'
import {Login} from "./firebase/login.js"
import { AuthChange } from './firebase/AuthChange.js'
import { Logout } from './firebase/Logout.js'
import { SignWithGoogle } from './firebase/SignWithGoogle.js';
import { Password } from './firebase/PasswordReset.js';




document.addEventListener("DOMContentLoaded", () => {
 
  Logout();
  SignUp();
  Login();
  Password();
  AuthChange();

 
});
SignWithGoogle();