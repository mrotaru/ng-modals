angular.module("app").factory("Modals", [function() {
  var modals = [];
  return {
    add: function(modal) {
      console.log("Modals.add", arguments);
      modals.push(modal);
    },
    show: function(modalName, object) {
      angular.forEach(modals, function(modal, i) {
        if (modal.name === modalName) {
          console.log('Modals.show: ', modal);
          modal.shown = true;
          modal.boundObject = object;
        }
      });
    },
    isShown: function() {
      var ret = false;
      angular.forEach(modals, function(modal, name) {
        if (modal.shown === true && !ret) {
          ret = true;
        }
      });
      return ret;
    },
    getShownName: function() {
      var ret = false;
      angular.forEach(modals, function(modal, i) {
        if (modal.shown === true && !ret) {
          ret = modal.name;
        }
      });
      console.log("shown: ", ret);
      return ret;
    },
    close: function() {
      angular.forEach(modals, function(modal, i) {
        if (modal.shown === true) {
          modal.shown = false;
        }
      });
    }
  };
}]);