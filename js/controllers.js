angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.$on('$ionicView.loaded', function(event) {
        


        cameraButton= document.getElementById("home-button1");
        fileInput = document.getElementById('file-input');
        getBase64= " ";
        
        
        fileInput.addEventListener('change', function () {
                getBase64= function (file) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                    //console.log(reader.result);
                    //console.log(reader);
                        return reader;
                    };
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    };
             }

            alert("SENDING");
            let photo = fileInput.files[0];

            //b64String= getBase64(photo);

            var reader = new FileReader();
            reader.readAsDataURL(photo);
            reader.onload = function () {
                //console.log(reader.result);
                //console.log(reader);

                let formData = new FormData();
                formData.append("bString", reader.result);        
                // formData.append("user", JSON.stringify(user));   // you can add also some json data to formData like e.g. user = {name:'john', age:34}

                let xhr = new XMLHttpRequest();
                pathURL= 'https://cf7856b0.ngrok.io/upload/';
                xhr.open("POST", pathURL);
                xhr.send(JSON.stringify(reader.result));
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
            
            /*
            let formData = new FormData();
            formData.append("b64String", b64String);        
            // formData.append("user", JSON.stringify(user));   // you can add also some json data to formData like e.g. user = {name:'john', age:34}

            let xhr = new XMLHttpRequest();
            pathURL= 'https://cf7856b0.ngrok.io/upload/';
            xhr.open("POST", pathURL);
            xhr.send(JSON.stringify(b64String.result));
            */
        });
    });

}])
   
.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    