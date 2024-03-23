
const firebaseConfig = {
      apiKey: "AIzaSyAzyzyNI8uF85GIFqfKfDz8t3hSUFE2q3k",
      authDomain: "letschatapp-d8edb.firebaseapp.com",
      projectId: "letschatapp-d8edb",
      storageBucket: "letschatapp-d8edb.appspot.com",
      messagingSenderId: "196489038833",
      appId: "1:196489038833:web:d519a3c6df71b1fb971250"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div>"
       document.getElementById("output").innerHTML += row;
      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
