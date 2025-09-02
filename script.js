// Open and close chat
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");
const chatbox = document.getElementById("chatbox");

openChat.addEventListener("click", () => {
  chatbox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatbox.style.display = "none";
});

// Send message
const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");
const chatBody = document.getElementById("chatBody");

sendMessage.addEventListener("click", () => {
  let msg = chatMessage.value.trim();
  if (msg !== "") {
    let userMsg = document.createElement("p");
    userMsg.innerHTML = `<b>You:</b> ${msg}`;
    chatBody.appendChild(userMsg);

    // Dummy AI reply
    let aiReply = document.createElement("p");
    aiReply.innerHTML = `<b>AI:</b> I'm still learning 🌱 but I'll help you soon!`;
    chatBody.appendChild(aiReply);

    chatMessage.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
