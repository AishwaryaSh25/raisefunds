

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeauu8hUfOkE1ZlxexUm-xzczmpIB2HtE",
  authDomain: "crowdfunding-15135.firebaseapp.com",
  projectId: "crowdfunding-15135",
  storageBucket: "crowdfunding-15135.appspot.com",
  messagingSenderId: "514576805551",
  appId: "1:514576805551:web:eb977239e419098cc2ae5a",
  measurementId: "G-1M2X72V953",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);



  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert("You are Signed Up");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};


const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      alert("You are successfully Signed In");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
function searchFunction() {
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase();
  ul = document.getElementById('resultsList');
  li = ul.getElementsByTagName('li');

  
  for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = '';
      } else {
          li[i].style.display = 'none';
      }
  }
}
