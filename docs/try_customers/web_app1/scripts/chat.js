  const messagesRef = database.ref('messages');
  const currentSongRef = database.ref('current_songs');
  

  function sendMessage(message, song_name) {
    if (message !== '') {
      const newMessageRef = messagesRef.push(); 
      const newMessageId = newMessageRef.key; 
      
      newMessageRef.set({
        id: newMessageId, 
        text: message,
        song_name: song_name,
      });
    }
  }
  
  
  messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    displayMessage(message);
  });
  
  currentSongRef.on('child_added', snapshot => {
    const message = snapshot.val();
    document.getElementById('current_song_display').href = message.song_name;
    document.getElementById('current_song_display').innerHTML = message.song_name;
    document.getElementById('current_song_display').target = '_blank';
    document.getElementById('current_song_display').style.color = 'white';
    document.getElementById('current_song_display').style.textDecoration = 'none';
  });
  

  function displayMessage(message) {
    const messageList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    const newButton = document.createElement('button');
    const messageLink = document.createElement('a');

    messageLink.href = message.text;
    messageLink.textContent = message.text;
    messageLink.className = 'a1';
    messageLink.addEventListener('click', function(event) {
      const newMessageRef = currentSongRef.push();
      const newMessageId = newMessageRef.key; 
      
      newMessageRef.set({
        id: newMessageId,
        song_name : message.text,
      });
    });
  
    newButton.innerText = 'delete';
    newButton.className = 'material-symbols-outlined notranslate button1';
    newButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      const listItem = event.target.closest('li');
      if (listItem) {
        const messageId = message.id; 
        if (messageId) {
          messagesRef.child(messageId).remove()
            .then(() => {
              listItem.remove();
            })
            .catch((error) => {
              alert("Errore durante la rimozione dal database:", error);
            });
        } else {
          alert("ID del messaggio non disponibile.");
        }
      }
    });
    
    

    newMessage.className = 'card1';
    newMessage.appendChild(messageLink);
    newMessage.appendChild(newButton); // Append the button to the list item
    messageList.appendChild(newMessage);
  }
  
  