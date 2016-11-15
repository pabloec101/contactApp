contactApp.controller('MasterCtrl', MasterCtrl);

  MasterCtrl.$inject = ['$scope', '$state'];

  function MasterCtrl($scope, $state) {
    
    $scope.goto = function(url) {
      $state.go(url);
    }

  }
