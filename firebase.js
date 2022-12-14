import { initializeApp } from 'firebase/app';

var firebase = require('firebase');

// firebase 앱 초기화

firebase.initializeApp(firebaseConfig);

// firebase database 참조 가져오기

let database = firebase.database();

// firebase 구성

const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKEY = process.env.STORAGE_BUCKEY;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKEY,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

console.log(API_KEY)