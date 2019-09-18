import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
//import "../semantic/dist/semantic.min.css";
import App from "./App.jsx";
import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnk3HIO9xMYb4f80iv6ztZhdDzugAsqq0",
  authDomain: "predator-prey-model.firebaseapp.com",
  databaseURL: "https://predator-prey-model.firebaseio.com",
  projectId: "predator-prey-model",
  storageBucket: "predator-prey-model.appspot.com",
  messagingSenderId: "207789264198",
  appId: "1:207789264198:web:ccd95694d350410a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
