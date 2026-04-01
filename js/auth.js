// SIGNUP
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

// CONTACT FORM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      db.collection("messages").add({
        name: document.getElementById("name").value,
        email: document.getElementById("contactEmail").value,
        message: document.getElementById("message").value,
        createdAt: new Date()
      })
      .then(() => {
        alert("Message sent ✅");
        form.reset();
      })
      .catch(err => alert(err.message));
    });
  }
});