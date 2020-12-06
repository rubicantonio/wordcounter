function brojiRiječi(){

	words = document.getElementById("text1").value;

	let a = new Array()
	a = words.split(/[ ,.]+/)


 document.getElementById("rezultat").innerHTML = a.length
}
