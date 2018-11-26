
let list = document.getElementById("list");
let remove = document.getElementsByClassName("remove");
let key = document.getElementsByClassName("key");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let addItem = document.getElementById("confirm_item");
let loginContainer = document.getElementById("login-container");
let logoutContainer = document.getElementById("logout-container");
let usernameContainer = document.getElementById("username-container");
let checkedOrNot;
let color = "black";
let date = new Date();
let currentdate = date;
let formatedDate =
  currentdate.getDate() +
  "." +
  Number(currentdate.getMonth() + 1) +
  "." +
  currentdate.getFullYear();
function getItems(){
    list.innerHTML = "";
    fetch("https://to-do-5b78c.firebaseio.com/list.json")
            .then(response => {return response.json()})
            .then(data => {
                for(const key in data){
                    if (data[key].checked==true){
                        checkedOrNot = "checked";
                        color = "green";
                    }else {
                        checkedOrNot = " ";
                        color = "black";
                    }
                    list.innerHTML += `<li style = "color:${color}"></>
                    <span class="email-field">${data[key].username}</span>
                    <span class="text-field">${data[key].item}</span>
                    <span class="date-field">${data[key].date}</span>
                    <span class="key">${key}</span>
                    <input type="checkbox" class="remove" ${checkedOrNot} input>
                    </li>`
                }
            })
}
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
logout.addEventListener("click", function(){
    firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
            alert("Error: " +error);
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
        logoutContainer.style.display = "block";
        loginContainer.style.display = "none";
        usernameContainer.innerText = user.email;
        addItem.disabled = false;
        getItems();
        checkedColor();
        addItem.addEventListener("click", postToDoItem);
        function postToDoItem(){
            let username = user.email;
            let item = document.getElementById("todo_item").value;
            let checked = false;
            console.log("clicked");
            list.innerHTML = "";
            fetch("https://to-do-5b78c.firebaseio.com/list.json",{
            method: "POST",
            body: JSON.stringify({
                username: username,
                item: item,
                date: formatedDate,
                checked: checked
                })
            })
            getItems();
            //list.innerHTML += `<li>
            //        <span class="email-field">${username}</span>
            //        <span class="text-field">${item}</span>
            //        <span class="date-field">${formatedDate}</span>
            //        <span class="key">${key}</span>
            //        <input type="checkbox" class="remove" ${checkedOrNot}></input>
            //        </li>`;
            checkedColor();
            
        }
        
        list.addEventListener("click", (event) => {
            console.log(event.target);
            if(event.target.classList.contains("remove")){
                let target = event.target.previousElementSibling;
                console.log(target);
                function writeUserData(target) {
                    if (event.target.checked){
                        firebase.database().ref('list/' + target.innerText).update({
                        checked: true
                    });
                    event.target.parentElement.style.color = "green";
                    }else {
                        firebase.database().ref('list/' + target.innerText).update({
                            checked: false
                        });
                        event.target.parentElement.style.color = "black";
                    }
                }
                writeUserData(target);
            }
        })
          // ...
    } else {
      // User is signed out.
      // ...
        logoutContainer.style.display = "none";
        loginContainer.style.display = "block";
        list.innerText = "";
        addItem.disabled = true;
    }
  });
function checkedColor(){
    let checkedBox = document.getElementsByClassName("remove");
    console.log(checkedBox.length);
    if (checkedBox.checked){
        checkedBox.parentElement.stye.color = "green";
        
    }
}


