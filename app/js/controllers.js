var jXtnsion = angular.module('jXtnsion', []);
//api key for world weather online 443ee47454e64cf4cb47174359be2
//freckle api key kacgnpf0og0hfi1it32o9xtc2ls2328-gmeb1nwcp1ko8o0f0ygi4ml9cc9fxar

jXtnsion.controller('JXtnsionCtrl',['$scope','$interval', '$http','weather', 'freckle', function($scope, $interval, $http, weather, freckle){

  //check local storage to see if a freckle api key is present

   if(localStorage.getItem('freckleKey')){
    $scope.frecklekey = localStorage.getItem('freckleKey');
    $scope.freckleDisplay = false;
   }
   else{
    $scope.freckleDisplay = true;
   }
   
  //check local storage to see if there are things to do
  if(localStorage.getItem('todoSaved')){
    $scope.todoArray = localStorage.getItem('todoSaved').split(",");
  }
  else{
   $scope.todoArray = [];
  }

  //pass weather api data to a scope variable
  weather.success(function(data){
    $scope.weatherToday = data;
  });
  
  //assign date to a scope variable and repeat at intervals
  $interval(function(){
    $scope.dateToday = Date.parse(new Date());
  }, 1000);

  //assign data from freckle to a scope variable 
  freckle.success(function(freckledata){
    $scope.freckleInfo = freckledata;
  });

  //scope function called from index.html that saves freckle key
  $scope.saveFreckleKey = function(freckleKey){
    if(freckleKey){
    localStorage.setItem('freckleKey', freckleKey);
    location.reload();
    }
  }
    //scope function called from index.html to change the background
    $scope.getImage = function(){
      var backgrounds = ["url(app/img/squirrel.jpg)", "url(app/img/cube.jpg)", "url(app/img/lambo.jpg)", "url(app/img/ram.jpg)", "url(app/img/fly.jpg)", "url(app/img/dog.jpg)"];

          var randomNumber = Math.floor(Math.random()*backgrounds.length);
          var randomImage = backgrounds[randomNumber];
          return randomImage;
    }

    $scope.bg = $scope.getImage();

  $scope.startTimer = function(projectId){
    $http({
      url: 'https://api.letsfreckle.com/v2/projects/'+projectId+'/timer/start?freckle_token='+$scope.freckleKey,
      method: 'PUT',
      data: '',
      headers: {
        'Content-Type': undefined
      }
    })

    .success(function(data){
      window.open("https://andela.letsfreckle.com/timer", "Freckle Timer", "height=250,width=500");
      })
    .error(function(err){
      //console.log(2)
      return err;
    });
  }

  $scope.pauseTimer = function(projectId){
    $http({
      url: 'https://api.letsfreckle.com/v2/projects/'+projectId+'/timer/pause?freckle_token='+$scope.freckleKey,
      method: 'PUT',
      data: '',
      headers: {
        'Content-Type': undefined
      }
    })
    .success(function(data){
      $interval.cancel();
      })
    .error(function(err){
      //console.log(2)
      return err;
    });
  }

   $scope.logTimer = function(projectId){
    $http({
      url: 'https://api.letsfreckle.com/v2/projects/'+projectId+'/timer/log?freckle_token='+$scope.freckleKey,
      method: 'PUT',
      data: '',
      headers: {
        'Content-Type': undefined
      }
    })
    .success(function(data){
      })
    .error(function(err){
      //console.log(2)
      return err;
    });
  }

 
  $scope.saveTodo = function(todoInput){
    if(todoInput){
      $scope.todoArray.push(todoInput);
      $scope.todoData = $scope.todoArray.join();
      localStorage.setItem('todoSaved', $scope.todoData);
      $scope.todoInput = '';
      }
  }

  
  $scope.clearTodo = function(){
    $scope.todoArray = [];
    localStorage.removeItem('todoSaved');
  }
}]);
