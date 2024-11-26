const { default: firebase } = require("firebase/compat/app");

const firebaseConfig = {
    apiKey: "AIzaSyCYq7emwuBE5umqLsPOVuSAuFVof8AKtsY",
    authDomain: "kuber-capitals-670d4.firebaseapp.com",
    databaseURL: "https://kuber-capitals-670d4-default-rtdb.firebaseio.com",
    projectId: "kuber-capitals-670d4",
    storageBucket: "kuber-capitals-670d4.firebasestorage.app",
    messagingSenderId: "1047880352488",
    appId: "1:1047880352488:web:4b8ab2ed1ed5cac6a2bf5d",
    measurementId: "G-H6N1MTGHHP"
  };

  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefaulta();

    var name = getElementVal("first_name");
    var email = getElementVal("email");
    var mobile = getElementVal("number");
    var dob = getElementVal("dob");
    var aadhar = getElementVal("aadhar");
    var pan = getElementVal("pan");
    var city = getElementVal("city");
    var password = getElementVal("pass");
    var c_password = getElementVal("c_pass");
    var address = getElementVal("address");

    savemessages(name, email, mobile, dob, aadhar, pan, city, password, c_password, address);

  }

  const savemessages = (name, email, mobile, dob, aadhar, pan, city, password, c_password, address) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: first_name,
        email: email,
        mobile: number,
        dob: dob,
        aadhar: aadhar,
        pan: pan,
        city: city,
        password: pass,
        c_password: c_pass,
        address: address

    })
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };