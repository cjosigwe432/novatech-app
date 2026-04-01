// AUTH CHECK
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("userEmail").innerText = user.email;
    loadMessages();
  } else {
    window.location.href = "index.html";
  }
});

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// LOAD MESSAGES
function loadMessages() {
  const messagesDiv = document.getElementById("messages");

  db.collection("messages").orderBy("createdAt", "desc").get()
    .then(snapshot => {
      messagesDiv.innerHTML = "";

      snapshot.forEach(doc => {
        const data = doc.data();
        messagesDiv.innerHTML += `
          <p><b>${data.name}</b>: ${data.message}</p>
        `;
      });
    });
}