let list = document.getElementById("list");
let remove = document.getElementsByClassName("remove");
let key = document.getElementsByClassName("key");
let login = document.getElementById("login");
let logout = document.getElementById("logout");
let addItem = document.getElementById("confirm_item");
let loginContainer = document.getElementById("login-container");
let logoutContainer = document.getElementById("logout-container");
let usernameContainer = document.getElementById("username-container");
let modal = document.getElementById("register-container");
let signUp = document.getElementById("signup");
let span = document.getElementsByClassName("close")[0];
let register = document.getElementById("register");
let emailRegister = document.getElementById("email-register");
let passwordRegister = document.getElementById("password-register");
let passwordCheck = document.getElementById("password-check");
let checkedOrNot;
let uid;
let color = "black";
let date = new Date();
let currentdate = date;
let formatedDate =
  currentdate.getDate() +
  "." +
  Number(currentdate.getMonth() + 1) +
  "." +
  currentdate.getFullYear();
signUp.addEventListener("click", function(){
    modal.style.display = "block";
})
span.addEventListener("click", function(){
    modal.style.display = "none";
})
window.addEventListener("click", function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
})
register.addEventListener("click", function(){
    if (passwordCheck.value === passwordRegister.value){
        firebase.auth().createUserWithEmailAndPassword(emailRegister.value, passwordRegister.value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error: " + errorMessage);
            // ...
          });
        modal.style.display = "none";
    }else{
        alert("Your entered passwords must match!");
    }
      
})
function getItems(){
    console.log("getItems");
    list.innerHTML = "";
    fetch("https://to-do-5b78c.firebaseio.com/list/" + uid + ".json")
            .then(response => {return response.json()})
            .then(data => {
                console.log(data);
                for(const identifier in data){
                    if (data[identifier].checked==true){
                        checkedOrNot = "checked";
                        color = "green";
                    }else {
                        checkedOrNot = " ";
                        color = "black";
                    }
                    list.innerHTML += `<li style = "color:${color}"></>
                    <span class="email-field">${data[identifier].username}</span>
                    <span class="text-field">${data[identifier].item}</span>
                    <span class="date-field">${data[identifier].date}</span>
                    <span class="key">${identifier}</span>
                    <input type="checkbox" class="remove" ${checkedOrNot} input>
                    </li>`
                }
            })
}
function postToDoItem(username){
    console.log(username);
    let item = document.getElementById("todo_item").value;
    let checked = false;
    console.log("clicked");
    list.innerHTML = "";
    fetch("https://to-do-5b78c.firebaseio.com/list/" + uid + ".json",{
    method: "POST",
    body: JSON.stringify({
        username: username,
        item: item,
        date: formatedDate,
        checked: checked
        })
    })
    getItems();
    checkedColor();
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
            location.reload();
            list.innerText = "";
            username = null;
        }).catch(function(error) {
            alert("Error: " +error);
        });
})

firebase.auth().onAuthStateChanged(function(user) {
    console.log("signed in: ", user);
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        //var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        uid = user.uid;
        var providerData = user.providerData;
        let username = user.email;
        logoutContainer.style.display = "block";
        loginContainer.style.display = "none";
        usernameContainer.innerText = username;
        addItem.disabled = false;
        list.innerHTML = "";
        console.log("uid: ", uid);
        getItems();
        checkedColor();
        addItem.addEventListener("click", function(){
            postToDoItem(username)
        });
        list.addEventListener("click", (event) => {
            console.log(event.target);
            if(event.target.classList.contains("remove")){
                let target = event.target.previousElementSibling;
                console.log(target);
                function writeUserData(target) {
                    if (event.target.checked){
                        firebase.database().ref('list/' + uid + "/" + target.innerText).update({
                        checked: true
                    });
                    event.target.parentElement.style.color = "green";
                    }else {
                        firebase.database().ref('list/' + uid + "/" + target.innerText).update({
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
        //firebase.auth().signOut().then(function() {
        //  // Sign-out successful.
        //    list.innerText = "";
        //    username = null;
        //    logoutContainer.style.display = "none";
        //    loginContainer.style.display = "block";
        //    list.innerText = "";
        //    addItem.disabled = true;
        //}).catch(function(error) {
        //    alert("Error: " +error);
        //});
        
        console.log("signed out: ", user);
        logoutContainer.style.display = "none";
        loginContainer.style.display = "block";
        list.innerText = "";
        addItem.disabled = true;
        username = null;
        console.log(username);
    }
  });
function checkedColor(){
    let checkedBox = document.getElementsByClassName("remove");
    console.log(checkedBox.length);
    if (checkedBox.checked){
        checkedBox.parentElement.stye.color = "green";
        
    }
}


