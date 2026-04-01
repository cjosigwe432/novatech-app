const firebaseConfig = {
  apiKey: "AIzaSyDLvK-Q4v1hZ2B-mtxZzNXs5m1tCS6LdGw",
  authDomain: "neobank-app-3ebbe.firebaseapp.com",
  projectId: "neobank-app-3ebbe",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
