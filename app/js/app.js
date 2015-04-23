var app = angular.module('ToDo',[]);

app.controller('ToDoCtrl', ['$scope', 
  function($scope) {

    $scope.priorities =[
    {name: "Not Important"},
    {name: "Important"},
    {name: "Very Important"}
    ];

   
 /*$scope.change = function()
               {
                   alert($scope.opt.name);
          };*/

    //$scope.myPriority = $scope.priorities[1].priority;
    
    
    $scope.today = Date.now();

    $scope.newTaskDate = '';

    if(localStorage.getItem("todoList") === null)
        {
          $scope.todoList = [
          {text:'Watch Furious',done: false,  date:$scope.newTaskDate, },
          {text:'Build a Todo App', done:false,  }
        ];
        localStorage.setItem("todoList", angular.toJson($scope.todoList));
        }
    else
        {
          
          $scope.todoList = angular.fromJson(localStorage.getItem("todoList"));
        }
     
    $scope.addTask = function(){

        
        var today = new Date(Date.now()).setHours(0,0,0);
        var newDate = new Date($scope.newTaskDate);
        
        
    if($scope.newTask !== "")
      {
       
     
        if($scope.newTaskDate == false )
          {
             alert("input due date!");
          }
        else if( newDate < today )
          {
             alert("invalid date");
          }
        else
         {
            
            $scope.todoList.push({text:$scope.newTask , date:$scope.newTaskDate, done: false, priority:"Important" , priority: $scope.opt.name});
            
                  $scope.newTask = "";
                  
         }
       }
        
    else
        {
            alert("input new task!")
        }
            localStorage.setItem("todoList", angular.toJson($scope.todoList));
       };   


     $scope.delete= function(index){
      
       var completedTask = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(completedTask, function (todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
            localStorage.setItem("todoList", angular.toJson($scope.todoList));
        });
        
      
  };

   
  }]);
