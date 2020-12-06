function countWords(){

	words = document.getElementById("text1").value;

	let a = new Array()
	a = words.split(/[ ,.]+/)


 document.getElementById("result").innerHTML = a.length
}
