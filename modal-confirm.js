angular.module("app").directive("modalConfirm", function() {
  return {
    restrict: "E",
    scope: {
      onConfirm: "&",
      onCancel: "&",
      message: "@",
      name: "@"
    },
    templateUrl: "modal-confirm.html",
    controller: ["$scope", "Modals", function(scope, Modals) {
      console.log("modalConfirm.controller: adding modal: ", scope);
      
      scope.currentModal = Modals.getShownName;
      
      scope.confirm = function(){
        if(scope.onConfirm) {
          scope.onConfirm({confirmMessage:'OK'});
        }
        Modals.close();
      }
      scope.cancel = function(){
        if(scope.onCancel) {
          scope.onCancel();
        }
        Modals.close();
      }
      Modals.add(scope);
    }]
  }
});