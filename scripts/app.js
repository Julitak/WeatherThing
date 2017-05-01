var app = angular.module('weatherApp', []);



	var cityVal = '';

	$('#submitBtn').click(function(){
		cityVal = $('#cityName').val();

		if(cityVal){

			$('.wrapper').addClass('show');

		}else {
			console.log("enter the darn city");
		}
	});


	//=====CONVERT TIME

app.controller('PostsCtrl', ['$scope', '$http', function($scope, $http){

	$scope.clickButton = function() {

		$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ cityVal +'&units=metric&cnt=9&appid=941c2692028a19fffe508c95a79db89a&lang=lt').then(function (response) {

	    var data = response.data;
	    var status = response.status;
	    var statusText = response.statusText;
	    var headers = response.headers;
	    var config = response.config;

	    $scope.stats = data;

	    $scope.stats.list = data.list;

	    $scope.mySplit = function(string, nb) {
		    var array = string.split(' ');
		    return array[nb];
		}


	    console.log(data);
		});

	}

}]);

