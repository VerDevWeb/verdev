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


      
      function sendMail1() {
        const recipient = document.getElementById('mail_recipient1').value;
        const object = document.getElementById('mail_object1').value;
        const cc = document.getElementById('mail_cc1').value;
        const bcc = document.getElementById('mail_bcc1').value;
        const mailInput1 = document.getElementById('mail_body1').value;

        const mailBody = (mailInput1);

        const mailtoLink = `mailto:${recipient}?cc=${cc}&bcc=${bcc}&subject=${encodeURIComponent(object)}&body=${encodeURIComponent(mailBody)}`;
      
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.target = '_blank';
        tempLink.click();
      }

      
      function initAccountingMail1(data, taskName){
        document.getElementById("send_mail1").style.display = "flex";
        document.getElementById("mail_object1").value = `Contabilizzazione "${data.title}" | Task "${taskName}"`;
        document.getElementById("mail_body1").value = `Salve sono     , le scrivo per porre alla sua attenzione che la contabilizzazione ${data.title} appartenente al task ${taskName}, contabilizzata in data ${data.start}, con owner ${data.owner}, ha portato al completamento della task ${taskName} con un tempo dedicato a questa contabilizzazione pari a ${data.dedicated_time} ore.
Cordiali saluti _______`;
      }

      function initTaskMail1(data){
        document.getElementById("send_mail1").style.display = "flex";
        document.getElementById("mail_object1").value = `Task "${data.name}"`;
        document.getElementById("mail_body1").value = `Salve sono     , le scrivo per porre alla sua attenzione che il task ${data.name}, con rispettivamente data di inizio e fine ${data.start}, ${data.end}, con owner ${data.owner}, dedicata all'azienda "${data.company}", in possesso del marchio/brand "${data.brand}" è stata completata con successo.
Cordiali saluti _______`;
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