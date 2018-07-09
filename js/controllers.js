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

        fileInput.addEventListener('change', function () {
        let photo = fileInput.files[0];

        let formData = new FormData();
        formData.append("photo", photo);        
        // formData.append("user", JSON.stringify(user));   // you can add also some json data to formData like e.g. user = {name:'john', age:34}

        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://25bdd36a.ngrok.io/upload/');
        xhr.send(formData);
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
    