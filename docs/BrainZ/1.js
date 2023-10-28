src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"
src="https://www.gstatic.com/firebasejs/8.6.1/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyBK8aB1PhRlX3ls_AAMqxElVLmK5hK9SoA",
  authDomain: "buildable-4e170.firebaseapp.com",
  projectId: "buildable-4e170",
  storageBucket: "buildable-4e170.appspot.com",
  messagingSenderId: "905693761163",
  appId: "1:905693761163:web:2b9cdad166817b548f8e8e",
};

  // Inizializza Firebase
  firebase.initializeApp(firebaseConfig);

  // Riferimento al database
  var database = firebase.database();

  // Lettura dei dati
  var dataRef = database.ref('key/key');

  dataRef.on('value', function(snapshot) {
    var data = snapshot.val();
    console.log(data);
  });

