function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("status").innerText = "Account created!";
    })
    .catch(err => {
      document.getElementById("status").innerText = err.message;
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => {
      document.getElementById("status").innerText = err.message;
    });
}

// CONTACT FORM SAVE
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await db.collection("messages").add({
      name: document.getElementById("name").value,
      email: document.getElementById("contactEmail").value,
      message: document.getElementById("message").value,
      createdAt: new Date()
    });

    alert("Message sent 🚀");
    form.reset();
  });
}
