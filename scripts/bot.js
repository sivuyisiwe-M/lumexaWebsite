
function toggleChatbot() {
  document.getElementById('chatbotWindow').classList.toggle('open');
}

function closeChatbot() {
  document.getElementById('chatbotWindow').classList.remove('open');
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (message) {
    addMessage(message, 'user');
    input.value = '';

    setTimeout(() => {
      const responses = [
        "Thanks for your message! How can we assist you?",
        "We build AI solutions, mobile apps, and chatbots 🚀",
        "Would you like to book a free consultation?",
        "Our team will get back to you shortly."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, 'bot');
    }, 800);
  }
}

function addMessage(message, sender) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.innerText = message;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

