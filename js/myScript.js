const cameraButton= document.getElementById("home-button1");
const fileInput = document.getElementById('file-input');


fileInput.addEventListener('change', function () {
    let photo = fileInput.files[0];

    let formData = new FormData();
    formData.append("photo", photo);        
    // formData.append("user", JSON.stringify(user));   // you can add also some json data to formData like e.g. user = {name:'john', age:34}

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://c863c70b.ngrok.io/upload/');
    xhr.send(formData);



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