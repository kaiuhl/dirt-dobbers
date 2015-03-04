var app = angular.module('app', ['ngSanitize']);
app.controller('home', function($scope, $http) {

  $http.get('https://www.googleapis.com/calendar/v3/calendars/shiddymoto@gmail.com/events', {
    params: {
      key: 'AIzaSyALijoHvQCnSbsV2n4nUetzksv-j7fJisU',
      singleEvents: true,
      orderBy: 'startTime',
      timeMin: new Date()
    }
  }).success(function(data, status, headers, config) {
    $scope.events = data.items;
  });

});