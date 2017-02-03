var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http){
  console.log('GiphyController loaded');

  var ctrl = this;
  var API = 'http://api.giphy.com/v1';

  ctrl.imageUrl = ' ';
  ctrl.searchQuery = ' ';
  ctrl.searchGifs = [];

  ctrl.grabGif = function() {
    $http({
      method: 'GET',
      url: API + '/gifs/random',
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: null
      }
    }).then(function(response) {
      console.log((response.data.data.image_url));
      ctrl.imageUrl = response.data.data.image_url;
    }).catch(function(err) {
      console.log('Error getting data', err);
    });
  }


  //
  // $http.get(API + '/random?api_key=dc6zaTOxFJmzC').then(function(response){
  //   console.log('Got a response from the API', response);
  // }).catch(function(err){
  //   console.log('Error getting info from API', err);
  // });


  ctrl.searchGif = function() {
    console.log('In search fxn now');
    $http({
      method: 'GET',
      url: API + '/gifs/search',
      params: {
        api_key: 'dc6zaTOxFJmzC',
        q: ctrl.searchQuery
      }
    }).then(function(response) {
      console.log('Responded with', response);
    }, function errorCallback(response) {
      console.log('Error', response);
    });
    // }).then(function(response) {
    //   console.log(('The search returned ', response.data.data));
    //   ctrl.searchGifs = response.data.data;
    // }).catch(function(err) {
    //   console.log('Error getting data', err);
    // });
  }
});
