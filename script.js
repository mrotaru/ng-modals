angular.module("app", []);

angular.module("app").controller("mainController", ["$scope", "Modals", function($scope, Modals){
  $scope.modals = Modals;
  $scope.askForConfirmation = function(){
    Modals.show("confirmSomething");
  }
  $scope.whenConfirmed = function(confirmMessage){
    console.log('Confirmed with message:', confirmMessage)
  }
  $scope.whenCancelled = function(){
    console.log('Cancelled');
  }
  
}]);