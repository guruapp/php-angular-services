/**
 * Created by vadimka on 18.11.2016.
 */
var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when("/home",
            {
                templateUrl:"templates/home.html",
                controller:"homeController"
            })
        .when("/courses",
            {
                templateUrl:"templates/courses.html",
                controller:"coursesController"
            })
        .when("/students",
            {
                templateUrl:"templates/students.html",
                controller:"studentsController"
            })
        .otherwise({
            redirectTo: "/home"
        }
        )
        $locationProvider.html5Mode(true);


})
app.controller("homeController", function ($scope) {
    $scope.message = "Home page";
})
app.controller("coursesController", function ($scope) {
    $scope.courses = ["C#","PGP","Php","Sql"];
})
app.controller("studentsController", function ($scope, $http) {

    $http.get("students.php")
        .then(function(response)
    {
        $scope.students = response.data;
    })
})


app.controller("myCtl", function($scope){
    $scope.msg = "vadim";
})