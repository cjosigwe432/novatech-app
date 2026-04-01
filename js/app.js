// CHECK LOGIN
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("userEmail").innerText = user.email;
    loadMessages();
  }
});

// LOAD MESSAGES
function loadMessages() {
  db.collection("messages").get().then(snapshot => {
    let html = "";

    snapshot.forEach(doc => {
      const data = doc.data();

      html += `
        <div>
          <h4>${data.name}</h4>
          <p>${data.email}</p>
          <p>${data.message}</p>
          <hr>
        </div>
      `;
    });

    document.getElementById("messages").innerHTML = html;
  });
}

// LOGOUT
function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  });
}
