var app = angular
		.module("Example",['ngRoute', 'LocalStorageModule'])
			.config(function($routeProvider){
        		$routeProvider
                .when("/newAdmin",{
                    templateUrl: "newAdmin.html",
                    controller: "createAdminСontroller"
                })
                 .when("/DeleteUser", {
                    templateUrl : "Delete.html",
                    controller : "createUserController"
                })
	            .when("/newUser", {
	                templateUrl : "newGroup.html",
	                controller : "createUserController"
	            })
                 .when("/ChangeUser",{
                    templateUrl: "changeUser.html",
                    controller: "createUserController"
                })
                  .when("/ListOfUserTrans",{
                	templateUrl:"Listofustrans.html",
                	controller: "userController"
                })
                 .when("/AddTransactions",{
                	templateUrl:"newSubject.html",
                	controller: "CreateTransactionsController"
                })
             
    		})
    		.config(function (localStorageServiceProvider) {
    			localStorageServiceProvider
    				.setPrefix('Test')
    				.setStorageType('sessionStorage')
    				.setNotify(true, true)
    		})