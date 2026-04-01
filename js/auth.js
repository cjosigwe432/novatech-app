document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("contactEmail").value;
      const message = document.getElementById("message").value;

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }

      // Save to Firestore (example)
      db.collection("messages").add({
        name: name,
        email: email,
        message: message,
        createdAt: new Date()
      })
      .then(() => {
        alert("Message sent successfully ✅");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message ❌");
      });

    });
  }

});