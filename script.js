function tampilInput(){
	var input1 = document.createElement("input");
	input1.type = "text";
	input1.setAttribute("id", "nama");
	//textObject.size = 500;

	var input2 = document.createElement("textarea");
	//input2.type = "text";
	input2.setAttribute("id", "chat");

	//var longtext = document.createElement("textarea")

	var nama = document.getElementById("nama-input");
	nama.appendChild(input1).style.width = "100%";

	var chat = document.getElementById("isi-chat");
	chat.appendChild(input2).style.width = "100%";
	//setAttribute("id", "chat");

}

document.getElementById("submit").addEventList("click", submit, false);
//document.getElementById("clear-chat").addEventList("click", clear, false);

function chat(x, y){

	var x = document.getElementById("nama").value;
	var y = document.getElementById("chat").value;

	var tampil = document.getElementById("history-chat");
	tampil.innerHTML += "<u> "+ x + "</u>" + "<br />" + y + "<br /> <br />";
}

function deleteChat() {
	a = document.getElementById("history-chat");
	while (a.firstChild){
		a.removeChild(a.firstChild);
	}
}