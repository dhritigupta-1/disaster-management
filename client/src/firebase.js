// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB91LryCjrjQOISCazRpX5TOkIn578BJtM",
  authDomain: "disaster-management.firebaseapp.com",
  projectId: "disaster-management",
  storageBucket: "disaster-management.appspot.com",
  messagingSenderId: "1:23509449058:web:c120a7581e6672e424d43b",
  appId: "G-4SYX8SB36X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup Recaptcha
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "recaptcha-container",
  {
    size: "normal",
    callback: function () {
      console.log("Recaptcha verified");
    }
  }
);

// Send OTP
function sendOTP() {

  const phoneNumber = document.getElementById("phone").value;

  const appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {

      window.confirmationResult = confirmationResult;

      alert("OTP Sent Successfully");

    })
    .catch((error) => {

      console.error(error);
      alert("Failed to send OTP");

    });
}

// Verify OTP
function verifyOTP() {

  const code = document.getElementById("otp").value;

  confirmationResult.confirm(code)
    .then((result) => {

      const user = result.user;

      alert("Phone Verified Successfully");

    })
    .catch((error) => {

      alert("Invalid OTP");

    });

}
