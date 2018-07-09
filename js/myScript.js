const cameraButton= document.getElementById("home-button1");
const fileInput = document.getElementById('file-input');


fileInput.addEventListener('change', function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
             document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "filename", true);
    xhttp.send();
});