angular.module('JekyllBlog', [])
  .controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/posts.json').success(function(data) {
      $scope.posts = data.posts;
    });
  }]);
