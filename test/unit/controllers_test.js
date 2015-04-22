/*
describe('when  testing karma', function  (){
    it('should  report  a successful  test',  function  (){
        expect(true).toBeTruthy();
    });
});
*/
describe('jXtnsionCtrl',function(){
  
  var $httpBackend = null;
  var weatherService = null;

  beforeEach(function(){
    inject(function(_$httpBackend_, _weatherService_){
    $httpBackend = _$httpBackend_;
    weatherService = _weatherService_;
  })
  });

  it('', function(){
    $httpBackend.when('GET', 'https://api.worldweatheronline.com/free/v2/weather.ashx?q=Lagos&format=json&key=443ee47454e64cf4cb47174359be2').respond(200, '');
    $httpBackend.expectGET('https://api.worldweatheronline.com/free/v2/weather.ashx?q=Lagos&format=json&key=443ee47454e64cf4cb47174359be2');
  });

  var $controller;
  
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  describe('$scope.weatherToday', function(){
    it('Check if the scope variable called weatherToday has a value',function(){
      var $scope = {};
      var controller = $controller('JXtnsionCtrl', { $scope: $scope });
      expect($scope.weatherToday).toBeDefined();
    });
  });
  
});