import React, { useState } from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import OtpInput from 'otp-input-react';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from './Firebase.config.js';
import toast, { Toaster } from 'react-hot-toast';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { RiH3 } from 'react-icons/ri';

function App() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [user, setUser] = useState(null);

  const sendOtp = async () => {
    try {
      setLoading(true);
      const formatNumber = "+" + phone;
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    
      const confirmation = await signInWithPhoneNumber(auth, formatNumber, recaptcha);
      setShowOtp(true)
      setUser(confirmation);
      toast.success("OTP sent successfully");
     ; // Check if this is being set correctly
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  
  const verifyOtp = async () => {
    try {
  
      setLoading(true); // Set loading state to true before the asynchronous operation
      await user.confirm(otp);
      toast.success("user sent successfully");
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false); // Ensure the loading state is reset after the operation completes or fails
    }
  };
  

  return (
    <div className='main'>
      <Toaster />
        <div>
          <h2>Welcome to Rao App</h2>
          {showOtp ?
            <>
              <div className="security">
                <MdOutlineSecurity className='icon' />
              </div>
              <div className="otp">
                <p>Enter your OTP</p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  autoFocus
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  className="otp-input"
                />
              </div>
              <div className="btn" onClick={verifyOtp}>
                <button >
                  {loading && <CgSpinner className="spinner-icon" />}
                  <span>Verify OTP</span>
                </button>
              </div>
            </>
            :
            <>
              <div className="security">
                <BsFillTelephoneFill className='icon' />
              </div>
              <div className="otp">
                <p>Verify your Phone Number</p>
                <PhoneInput
                  country={'pk'}
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              <div className="btn">
                <button onClick={sendOtp} >
                  {loading && <CgSpinner className="spinner-icon" />}
                  <span>Send code via SMS</span>
                </button>
              </div>
              <div id='recaptcha'></div>
            </>
          }
        </div>
     
    </div>
  );
}

export default App;
