var labTutorApp = angular.module('labTutorApp', []);

labTutorApp.controller('StartCtrl', [ '$scope', '$http', function ($scope, $http) {

  parseParams = function() {
    var params = {}, queryString = location.hash.substring(1), regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  };

  params = parseParams();

  $scope.name = "Name will be inflated here";
  if (params.access_token) {
    $http({
      method: 'GET',
      url: 'https://graph.facebook.com/v2.5/me?fields=id,name&access_token=' + params.access_token
    }).then(function (response) {
      $scope.name = response.data.name;
    }, function (err) {
      $scope.name = err;
    });
  }

  $scope.login = function() {
    window.location.href = "https://www.facebook.com/dialog/oauth?client_id=1772117579765567&response_type=token&redirect_uri=http://localhost:3000/"
  };

}]);
