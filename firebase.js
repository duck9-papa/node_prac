
import { initializeApp } from "firebase/app";

var firebase = require('firebase')

firebase.initializeApp(firebaseConfig)

const API_KEY = process.env.API_KEY
console.log(API_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyCXeYJ5M6IH71Xvwd3mjCtD1wZ6D7og2oE",
  authDomain: "nodeprac-5f8a4.firebaseapp.com",
  projectId: "nodeprac-5f8a4",
  storageBucket: "nodeprac-5f8a4.appspot.com",
  messagingSenderId: "173954019434",
  appId: "1:173954019434:web:f0d26571e0564fbb701a13"
};

let database = firebase.database()