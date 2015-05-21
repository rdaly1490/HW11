var list = [];
var myButton = document.getElementById("submit");
var messageInput = document.getElementById("message");
var messageList = document.getElementById("message-list");

myButton.addEventListener("click", onButtonClick);


function onButtonClick(eventObj) {
	console.log(messageInput.value);
	list.push(messageInput.value);
	console.log(list);
	messageInput.value = "";
}

function render(eventObj) {
	messageList.value = "";
	var listToString = "<div>" + list[i].join("</div><div>") + "</div>";
	console.log(listToString);
	messageList.value = listToString;
}
