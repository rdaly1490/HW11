var list = [];
var myButton = document.getElementById("submit");
var messageInput = document.getElementById("message");
var messageList = document.getElementById("message-list");

myButton.addEventListener("click", onButtonClick);
myButton.addEventListener("click", render);

function onButtonClick(eventObj) {
	console.log(messageInput.value);
	list.push(messageInput.value);
	console.log(list);
	messageInput.value = "";
}

function render(eventObj) {
	messageList.value = "";
	messageList.innerHTML = "<div>" + list.join("</div><div>") + "</div>";
	console.log(messageList.innerHTML);
	// listToString = messageList.innerHTML;
}
