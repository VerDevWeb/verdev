var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; 
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();

    
    var messagesRef = database.ref('/datas/chats/general');

    messagesRef.on('child_added', function(snapshot) {
      var message = snapshot.val();
      getMessage(message);
    });

    const mail = getCookieValue('mail');

    function sendMessage() {
      var messageInput = document.getElementById("message-input1");
      var message = messageInput.value;

      if (message.trim() !== "") {
        // Invia il messaggio al database
        messagesRef.push({
          mail: mail,
          testo: message,
          date: ` ${day}/${month}/${year} ${hour}:${minute}`
        });
        
        messageInput.value = "";
      }
    }

    function getMessage(message) {
        var chatMessages = document.getElementById("chat-messages");
        var messageElement = document.createElement("div");
        messageElement.className = "message_element1";
        messageElement.style.display = "flex";
        messageElement.style.flexDirection = "column";

        var textParagraph = document.createElement("strong");
        textParagraph.className = "general_paragraph";
        textParagraph.innerText = message.mail;
        messageElement.appendChild(textParagraph);

        var textParagraph = document.createElement("p");
        textParagraph.style.paddingTop = "0.5rem";
        textParagraph.className = "general_paragraph";
        textParagraph.innerText = message.testo;
        messageElement.appendChild(textParagraph);

        var dateElement = document.createElement("p");
        dateElement.style.paddingTop = "0.2rem";
        dateElement.style.marginTop = "0.2rem";
        dateElement.className = "general_paragraph";
        dateElement.innerText = message.date;
        messageElement.appendChild(dateElement);
      
        chatMessages.appendChild(messageElement);
      }
      