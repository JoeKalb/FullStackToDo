// create app

(function() {
    'use strict';
    angular
        .module('myApp', ['toastr'])
        .value('todoAPI', 'http://localhost:52167/api/ToDoListEntries/');
})();