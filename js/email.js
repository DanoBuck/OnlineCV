// Script to send emails through JavaScript

function sendEmail(){
	var to = "DaniielBuckleyTY3@gmail.com";
	var sendersName = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
	var sendersEmail = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var message = document.getElementById("message").value;
	
	console.log(sendersName + "\n" + sendersEmail + " \n" + phoneNumber + "\n" + message);
}

document.getElementById("sendEmail").addEventListener("click", sendEmail);	