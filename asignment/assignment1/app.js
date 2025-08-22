var app = angular.module("helloApp", []);
// Define controller
app.controller("HelloController", function($scope) {
    $scope.message = "Hello, AngularJS!";
});