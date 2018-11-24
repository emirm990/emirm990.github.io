
let list = document.getElementById("list");
let remove = document.getElementsByClassName("remove");
let key = document.getElementsByClassName("key");
let login = document.getElementById("login");
let addItem = document.getElementById("confirm_item");

login.addEventListener("click", function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
        // ...
    });
})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("signed in");
        // User is signed in.
        var displayName = user.displayName;
        //var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        fetch("https://to-do-5b78c.firebaseio.com/list.json")
            .then(response => {return response.json()})
            .then(data => {
                for(const key in data){
                    list.innerHTML += `<li>
                    <span>${data[key].username}</span>
                    <span>${data[key].item}</span>
                    <span>${data[key].date}</span>
                    <span class="key">${key}</span>
                    <button class="remove">-</button>
                    </li>`
                }
            })
        addItem.addEventListener("click", postToDoItem);
        function postToDoItem(){
            let username = user.email;
            let item = document.getElementById("todo_item").value;
            let date = "24.11.2018";
            let checked = false;
            console.log("clicked");
            fetch("https://to-do-5b78c.firebaseio.com/list.json",{
            method: "POST",
            body: JSON.stringify({
                username: username,
                item: item,
                date: date,
                checked: checked
            })
        })
        list.innerHTML += `<li>
                    <span>${username}</span>
                    <span>${item}</span>
                    <span>${date}</span>
                    <span class="key">${key}</span>
                    <button class="remove">-</button>
                    </li>`;
        }
        
        list.addEventListener("click", (event) => {
            if(event.target.classList.contains("remove")){
                event.target.parentNode.remove();
                fetch("https://to-do-5b78c.firebaseio.com/list/" 
                + event.target.previousElementSibling.innerText 
                + ".json",{
                    method: "delete"
                })
            }
        })
          // ...
    } else {
      // User is signed out.
      // ...
      alert("Logged Out");
    }
  });



