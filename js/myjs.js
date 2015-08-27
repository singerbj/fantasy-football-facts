var app = angular.module('app', []);

app.controller('Controller', ["$scope", "$http", function($scope, $http) {
    var self = this;
    self.apiKey = '6i47yy482iua';
    self.cors = 'http://crossorigin.me/'
    self.rootUrl = 'http://www.fantasyfootballnerd.com/service';

    self.loading = true;
    self.view = 'injuries';

    self.getInjuries = function(){
        self.loading = true;
        $http.get(self.cors + self.rootUrl + '/injuries/json/' + self.apiKey + '/').success(function(data){
            self.data = data;
            self.loading = false;
        }).error(function(error){
            console.error(error);
        });
    };

    //QB, RB, WR, TE, K, DEF
    self.getPlayers = function(position){
        self.loading = true;
        $http.get(self.cors + self.rootUrl +  '/players/json/' + self.apiKey + '/' + position).success(function(data){
            self.data = data;
            self.loading = false;
        }).error(function(error){
            console.error(error);
        });
    };

    self.getByes = function(){
        self.loading = true;
        $http.get(self.cors + self.rootUrl +  '/byes/json/' + self.apiKey + '/').success(function(data){
            self.data = data;
            self.loading = false;
        }).error(function(error){
            console.error(error);
        });
    };

    self.changeView = function(view){
        self.view = view;
        if(view === 'injuries'){
            self.getInjuries();
        }else if(view === 'byes'){
            self.getByes();
        }else{
            self.getPlayers(view)
        }
    };

    self.changeView('injuries');

}]);
