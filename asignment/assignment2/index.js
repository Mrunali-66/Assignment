// Define AngularJS app
var app = angular.module("studentApp", []);

// Define controller
app.controller("StudentController", function($scope) {
    $scope.student = {
        name: "Mrunali Hajare",
        roll: 4002,
        course: "Computer Science"
      };
    });