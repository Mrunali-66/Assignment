// Define AngularJS app
var app = angular.module("bindingApp", []);
    
// Controller
app.controller("BindingController", function($scope) {
    $scope.studentName = "Mrunali"; // default value
});