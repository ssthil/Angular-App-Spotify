var app = angular.module('myApp',['ngRoute']);

app.controller('MainCtrl', function($scope, $http) {
	//$scope.name="Senthil";
	//select option
	$scope.dropdownvalue = [
		{id:1, name:"playlist"},
		{id:2, name:"artist"}
	];


	$scope.mydata = [];
	$scope.getData = function(){
		//console.log(this.selected_value.name);
		var selectedval = this.selected_value.name;
		//console.log(selectedval);
		$http.get('https://api.spotify.com/v1/search?q=ar&type='+selectedval)
			.success(function(response){
				if(selectedval == 'playlist') {
					//console.log(response);
					angular.forEach(response, function(key, value){
						//console.log(key.name);
						console.log(key.items);
						$scope.mydata = key.items;
						
					})
				}else if(selectedval == 'artist') {
					//console.log(response);
					angular.forEach(response, function(key, value){
						//console.log(key.items);
						$scope.mydata = key.items;
						
					})
				} else {
					//
				}
				
				
			});

			//
			

	}
	
});
