/**
 * @TODO get a reference to the Firebase Database object
 */
 const database = firebase.database().ref();

 /**
  * @TODO get const references to the following elements:
  *      - div with id #all-messages
  *      - input with id #username
  *      - input with id #message
  *      - button with id #send-btn and the updateDB
  *        function as an onclick event handler
  */
 const allMsgDiv = document.getElementById("all-messages");
 const userNameInput = document.getElementById("username");
 const messageInput = document.getElementById("message");
 const sendBtn = document.getElementById("send-btn");
 sendBtn.onclick = updateDB;
 
 /**
  * @TODO create a function called updateDB which takes
  * one parameter, the event, that:
  *      - gets the values of the input elements and stores
  *        the data in a temporary object with the keys USERNAME
  *        and MESSAGE
  *      - console.logs the object above
  *      - writes this object to the database
  *      - resets the value of #message input element
  */
 function updateDB(event) {
     //prevent form refresh
     event.preventDefault();
 
     //store the input values in a temp object
     const data = {
         USERNAME: userNameInput.value,
         MESSAGE: messageInput.value
     }
 
     //push to database
     database.push(data);
 
     messageInput.value = "";
 }
 
 /**
  * @TODO add the addMessageToBoard function as an event
  * handler for the "child_added" event on the database
  * object
  */
 database.on("child_added", addMessageToBoard);
 
 /**
  * @TODO create a function called addMessageToBoard that
  * takes one parameter rowData which:
  *      - console.logs the data within rowData
  *      - creates a new HTML element for a single message
  *        containing the appropriate data
  *      - appends this HTML to the div with id
  *        #all-messages (we should have a reference already!)
  * 
  */
 function addMessageToBoard(rowData){
     //get the "object form" of data from firebase
     const data = rowData.val();
     console.log(data);
 
     let singleMessage = makeSingleMessageHTML(data.USERNAME,data.MESSAGE);
     allMsgDiv.append(singleMessage);
 }
 
 /** 
  * @TODO create a function called makeSingleMessageHTML which takes
  * two parameters, usernameTxt and messageTxt, that:
  *      - creates a parent div with the class .single-message
  * 
  *      - creates a p tag with the class .single-message-username
  *      - update the innerHTML of this p to be the username 
  *        provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - creates a p tag
  *      - updates the innerHTML of this p to be the message
  *        text provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - returns the parent div
  */
 
 function makeSingleMessageHTML(usernameTxt,messageTxt){
     //make parent div
     let parentDiv = document.createElement('div');
     //adds single-message class
     parentDiv.classList.add("single-message");
     //create first p tag for username
     let usernameP = document.createElement('p');
     usernameP.classList.add("single-message-username");
 
     usernameP.innerHTML = usernameTxt + ":";
     parentDiv.append(usernameP);
 
     let messageP = document.createElement('p');
     messageP.innerHTML = messageTxt;
     parentDiv.append(messageP);
 
     return parentDiv;
 }
 
 /**
  * @BONUS add an onkeyup event handler to the form HTML
  * element so the user can also submit the form with the
  * Enter key
  * 
  * @BONUS use an arrow function
  */