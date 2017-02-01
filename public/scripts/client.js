var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http){
  console.log('GiphyController loaded');

  var API = 'http://api.giphy.com/v1/gifs'

  var ctrl = this;

  ctrl.themGifs = [];

  $http.get(API + '/random?api_key=dc6zaTOxFJmzC').then(function(response){
    console.log('Got a response from the API', response);
    // ctrl.pokemonList = response.data.results;
  }).catch(function(err){
    console.log('Error getting info from API', err);
  });

  ctrl.grabGif = function(gif){
    console.log('Chose', gif);
    $http.get(API + '/random?api_key=dc6zaTOxFJmzC').then(function(response){
      console.log('GIF info', response.data);
      ctrl.imageUrl = response.data.data.image_url;
    }).catch(function(err){
      console.log('Error getting info from API', err);
    });
  }

  ctrl.searchGif = function(gif){
    // console.log('Chose', gif);
    var searched = gif;
    var replaced = searched.split(' ').join('+');
    console.log('They searched for: ',replaced);
    $http.get(API + '/search?q=' +  + '&api_key=dc6zaTOxFJmzC').then(function(response){
      console.log('GIF info', response.data);
      ctrl.imageUrl = response.data.data.image_url;
    }).catch(function(err){
      console.log('Error getting info from API', err);
    });
  }

});
