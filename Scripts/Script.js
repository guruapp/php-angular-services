app = angular.module("myApp",[])
    .controller("myCtrl", function ($scope, $http, $log) {
         
      var successCallBack = function (response){
        	//console.log(response.data);
        	$scope.employees = response.data;
        	$log.info(response);
        }
      var errorCallBack = function (reason){
        	$scope.error = reason.data;
        	$log.info(reason);
        }  

         $http({
         	method:'GET',
         	url:'index.php'

     })		
        .then(successCallBack, errorCallBack)
        
        $scope.employeeView = "employeeTable.html";

    })