function addPath() {

    var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
     		document.getElementById("path1").innerHTML = "hi im new";
   		}
	}
	
}