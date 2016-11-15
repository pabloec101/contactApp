contactApp.controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope', 'contactService'];

  function ContactCtrl($scope, contactService) {
	
  	init();

  	function init() {

 		contactService.getAll().then(function(data){
	   		$scope.contacts=data;
    	}).catch(function(error){
	   		console.log(error);
    	});



  		//$scope.contacts = contactService.getAll();
  	}

    /*$scope.contacts = [
    	{"id": 1, "username": "juanp"},  {"id": 2, "username": "pipe"},
    	{"id": 3, "username": "juanda"}, {"id": 4, "username": "chech"}, 
    	{"id": 5, "username": "joha"}, {"id": 6, "username": "moni"}
    ];
    */

    $scope.addContact = function() {
    	$scope.contact.id = 7;
    	contactService.add($scope.contact).then(function(data){
	   		$scope.contact = {};
	   		init();
	   		//alert(JSON.stringify(data));
    	}).catch(function(error){
	   		console.log(error);
    	});

    }

    
  }
