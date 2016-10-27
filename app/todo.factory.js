(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('todoFactory', todoFactory);
    todoFactory.$inject = ['$http', '$q', 'todoAPI'];
    /* @ngInject */
    function todoFactory($http, $q, todoAPI) {
        var service = {
            getList: getList,
            updateList: updateList,
            deleteToDo: deleteToDo
        };
        return service;
        // getting the entire ToDo list
        function getList() {
        	var defer = $q.defer();
        	$http({
        		method: 'GET',
        		url: todoAPI
        	}).then(function(result) {
        		if (typeof result.data === 'object') {
        			defer.resolve(result.data);
        		} else {
        			defer.reject('factory error')
        		}
        	},
        	function(error){
        		defer.reject(error);
        	});
        	return defer.promise;
        }
        // adding a new item to the list
        function updateList(item) {
            $http({
                method: 'POST',
                url: todoAPI,
                data: item,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) { // makes the object into an array of strings
                    var str = [];
                    for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    console.log(str);
                    return str.join("&");
                }
            }).then(function(response){
                console.log("Success: " + response);
            },
            function(response){
                console.log("Failure: " + response);
            });
        }
        // delete an item
        function deleteToDo(todo) {
            var defer = $q.defer();

            //communicating with the api
            $http({
                method: "DELETE",
                url: todoAPI + todo.toDoEntryID
            }).then(function(result) {
                if (typeof result.data === 'object') {
                    defer.resolve(result.data);
                } else {
                    defer.reject('factory error')
                }
            },
            function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
})();