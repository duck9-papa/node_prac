import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;



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

// 비울시 모든 요청에대해 허용
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello');
});

app.get('/sound/:name', function (req, res) {
  const { name } = req.params;
  const sound = { dog: '멍멍', cat: '야옹' };
  name in sound
    ? res.json({ sound: sound[name] })
    : res.json({ sound: '알수없음' });
});

app.listen(port, () => {
  console.log(`example port ${port}`);
});


console.log(API_KEY)