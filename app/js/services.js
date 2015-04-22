jXtnsion.factory('weather', ['$http', function($http){
  return $http.get('https://api.worldweatheronline.com/free/v2/weather.ashx?q=Lagos&format=json&key=443ee47454e64cf4cb47174359be2')
  .success(function(data){
    
    return data;

  })
  .error(function(err){

    return err;
  });
}]);

jXtnsion.factory('freckle', ['$http', function($http){

   if(localStorage.getItem('freckleKey')){
      var key = localStorage.getItem('freckleKey');
      //document.getElementById('freckleform').remove();
    }
  
  return $http.get('https://api.letsfreckle.com/v2/projects?freckle_token='+key)
  .success(function(freckleData){
    //console.log(freckleData)
    return freckleData;
  })
  .error(function(err){
    return err;
  });
}]);