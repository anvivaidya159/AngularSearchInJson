/**
 * 
 */

var app = angular.module('myApp', []);


app.service('request', function($http) {
this.getData=function(){
	return $http.get("MOCK.JSON").then(function(response){
		
		var trips=response.data;
		console.log(trips+" in service");
		return trips;
	});
	}

 
});
app.controller("main",function($scope,request){
	request.getData().then(function(trips){
		$scope.data=trips;	
		console.log($scope.data+" in controller");
	})
		
		
		
	
});