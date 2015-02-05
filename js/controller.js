var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {

$scope.quotes = mainService.getData();

$scope.newQuote = function() {

	mainService.addData($scope.addNewQuote, $scope.addNewAuthor); //the scope.addNewQuote and scope.addNewAuthor are arguments being passed to addData
	$scope.addNewQuote ='';
	$scope.addNewAuthor = '';// this removes the quotes
}

 $scope.deleteQuote = function() {
  	mainService.removeData($scope.addNewQuote);
  	$scope.addNewQuote = '';
  }



});
