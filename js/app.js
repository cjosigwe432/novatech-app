// Auth check
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("userEmail").innerText = user.email;
    loadMessages();
  } else {
    window.location.href = "index.html";
  }
});

// Logout
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// Load messages
function loadMessages() {
  const messagesDiv = document.getElementById("messages");
  const countDiv = document.getElementById("messageCount");

  db.collection("messages").orderBy("createdAt", "desc").get()
    .then(snapshot => {
      messagesDiv.innerHTML = "";
      countDiv.innerText = snapshot.size;

      snapshot.forEach(doc => {
        const data = doc.data();

        messagesDiv.innerHTML += `
          <p><strong>${data.name}</strong>: ${data.message}</p>
        `;
      });
    });
}