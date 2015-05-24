(function () {
    'use strict';

    angular.module('eliteApp').controller('MyTeamsCtrl', ['$cordovaNetwork', '$cordovaVibration', '$cordovaDialogs', '$state', 'myTeamsService', 'eliteApi', myTeamsCtrl]);

    function myTeamsCtrl($cordovaNetwork, $cordovaVibration, $cordovaDialogs, $state, myTeamsService, eliteApi) {
        var vm = this;
        console.log('Load const Here!');
        vm.myTeams = myTeamsService.getFollowedTeams();

        vm.goToTeam = function(team){
            eliteApi.setLeagueId(team.leagueId);
            $state.go("app.team-detail", { id: team.id });
        };

        vm.testMe = function () {
            console.log('Here!');
        };

        vm.beep = function () {
            console.log('beep');
            $cordovaDialogs.beep(3);
        };

        vm.alert = function () {
            console.log('alert!','title', 'ok');
            $cordovaDialogs.alert('Alert here !');
        };

        vm.vibrate = function () {
            console.log('virate!', 'title', 'ok');
            $cordovaVibration.vibrate(3000);
        };

        vm.isOnline = $cordovaNetwork.isOnline();

        vm.isOffline = $cordovaNetwork.isOffline();
    };
})();