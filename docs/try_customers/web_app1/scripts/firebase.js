const firebaseConfig = {
    apiKey: "AIzaSyBK8aB1PhRlX3ls_AAMqxElVLmK5hK9SoA",
    authDomain: "buildable-4e170.firebaseapp.com",
    databaseURL: "https://buildable-4e170-default-rtdb.firebaseio.com",
    projectId: "buildable-4e170",
    storageBucket: "buildable-4e170.appspot.com",
    messagingSenderId: "905693761163",
    appId: "1:905693761163:web:2b9cdad166817b548f8e8e",
    measurementId: "G-8D1HGCRG4B"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  
.then(function() {

 
  })
  .catch(function(error) {
  console.log(error);
  });