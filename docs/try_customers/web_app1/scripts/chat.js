  const messagesRef = database.ref('messages');
  
  // Funzione per inviare un messaggio
  function sendMessage(message) {
    if (message !== '') {
      messagesRef.push({
        text: message
      });
    }
  }
  
  // Aggiungi event listener per nuovi messaggi
  messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    displayMessage(message.text);
  });
  

  function displayMessage(message) {
    const messageList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    const messageLink = document.createElement('a');
    messageLink.href = message;
    messageLink.textContent = message;
    messageLink.className = 'a1'
    newMessage.appendChild(messageLink); 
    messageList.appendChild(newMessage);
  }
  