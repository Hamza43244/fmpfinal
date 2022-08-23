
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
 import { getDatabase,ref, set,push } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB472b_rAv7P1Z0Y7jf1ZSa2u-bXV2il8A",
   authDomain: "unh-furniture-39517.firebaseapp.com",
   projectId: "unh-furniture-39517",
   storageBucket: "unh-furniture-39517.appspot.com",
   messagingSenderId: "106334778402",
   appId: "1:106334778402:web:55b2f2fd3170a61560467b",
   measurementId: "G-C6WJM25RJB"
 };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

//_______________________________________________________







window.sendData=function(){   

  var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var name = document.getElementById("name");
var email = document.getElementById("email");
var number = document.getElementById("number");
var message = document.getElementById("message");


    var refrence = ref(db, "Messages/");
    var newRef = push(refrence);
    set(newRef, {
      Name: name.value,
      Email: email.value,
      Contact: number.value,
      Message: message.value,
      Date: new Date().getDate() + " : " + (month[new Date().getMonth()])+ " : " + new Date().getFullYear(),
      Time: new Date().getHours() + " : " + new Date().getMinutes()+ " : " + new Date().getSeconds(),
    });
    name.value = "";
    email.value = "";
    message.value = "";
    number.value = "";
    
}




