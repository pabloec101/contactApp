// Adicionamos a contactApp, contactService, para invocarlo desde los controller en donde lo necesitemos.
contactApp.factory('contactService', contactService); 

contactService.$inject = ['$http'];

function contactService($http) {

    var service = {
        add: addContact,
        getAll: getAll
    };

    return service;

    function addContact(contact) {
      return $http({
            method: 'POST',
            url: 'https://baas.kinvey.com/appdata/kid_SkLk4Cvbe/contacs',
            // pass in data as strings
            headers: {'Authorization': 'Basic a2lkX1NrTGs0Q3ZiZTpiNjJjNzVmNzVhOGI0NTg1OTlhMGQwMDkyZDM3YzgxZg==', 'X-Kinvey-API-Version': '3'},  // set the headers so angular passing info as form data (not request payload)
            data: contact
        }).then(completeSuccess).catch(completeFail);
        
        function completeSuccess(response){
            return response.data;
        }

        function completeFail(error){
            return error;
        }
    };
    
    function getAll() {
      return $http({
            method: 'GET',
            url: 'https://baas.kinvey.com/appdata/kid_SkLk4Cvbe/contacs',
            // pass in data as strings
            headers: {'Authorization': 'Basic a2lkX1NrTGs0Q3ZiZTpiNjJjNzVmNzVhOGI0NTg1OTlhMGQwMDkyZDM3YzgxZg==', 'X-Kinvey-API-Version': '3'}  // set the headers so angular passing info as form data (not request payload)
        }).then(completeSuccess).catch(completeFail);

        function completeSuccess(response){
            return response.data;
        }

        function completeFail(error){
            return error;
        }
    };


}