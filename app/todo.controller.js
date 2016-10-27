// create controller
(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['todoFactory', 'toastr'];
    
    /* @ngInject */
    function MainController(todoFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';
        vm.rank;
        vm.info;
        vm.property;
        var data;
        vm.todo = [];
        // sort by
        vm.sortBy = function(property) {
        	vm.property = property;
        }
        // build upon creating page
        activate();
        function activate() {
        	todoFactory.getList().then(
        		function(results) {
        			vm.todo.push({
        				results
        			});
        			toastr.success('ToDo List Recieved!');
        		},
        		function(error){
        			toastr.error('Controller Problem');
        		}
        	)
        }
        // add items to the server
        vm.addItem = function(info, rank) {
            data = {"info": info, "rank": parseInt(rank)};
            console.log(data);
            todoFactory.updateList(data);
            activate();
        }
        // remove an item
        vm.removeItem = function(todo, $index) {
            todoFactory.deleteToDo(todo).then(
                function() {
                    //vm.todo.splice($index, 1);
                },
                function() {
                    toastr.error('Sorry, there was an error deleting your todo!');
                }
            );

        };
    }
})();