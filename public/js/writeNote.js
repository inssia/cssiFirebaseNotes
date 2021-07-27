console.log("wowie")
let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {  
        console.log("logged in as", user.displayName);
        googleUser = user;
    } else {
        window.location = "index.html";
    }
    
});
}

function handleNoteSubmit () {
    let title = document.querySelector("#noteTitle");
    let content = document.querySelector("#noteText");
    var d1 = new Date();
    const dateTime = d1.toUTCString();

    title = title.value.toString();
    content = content.value.toString();

    console.log(title, content);

// format data n write to db
firebase.database().ref(`users/${googleUser.uid}`).push( {
    title: title,
    content: content,
    timeStamp: dateTime
}) 

    document.querySelector("#noteTitle").value = "";
    document.querySelector("#noteText").value = "";

}

function displayNote() {

    console.log("we are logging")
    

}

