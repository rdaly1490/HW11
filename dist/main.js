var list = [];
var myButton = document.getElementById("submit");
var messageInput = document.getElementById("message");
var messageList = document.getElementById("message-list");

myButton.addEventListener("click", onButtonClick);

function onButtonClick(eventObj) {
	console.log(messageInput.value);
}

