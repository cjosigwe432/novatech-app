// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
apikey: "AIzaSyDLvK-Q4v1hZ2B-mtxZzNXs5m1tCS6LdGw",
  authDomain: "neobank-app-3ebbe.firebaseapp.com",
  projectId: "neobank-app-3ebbe",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// REMOVE LOADER AFTER PAGE LOAD
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});
