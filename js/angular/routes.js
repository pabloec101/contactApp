contactApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/initial.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html"
    })
});