// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey:  "AIzaSyDLvK-Q4v1hZ2B-mtxZzNXs5m1tCS6LdGw",
  authDomain: "-3ebbe.firebaseapp.com",
  projectId: "-app-3ebbe",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});
