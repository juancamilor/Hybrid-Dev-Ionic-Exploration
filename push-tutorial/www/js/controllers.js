angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $rootscope, $ionicUser, $ionicPush) {
    // Identifies a user with the Ionic User service
    $scope.identifyUser = function () {
        console.log('Ionic User: Identifying with Ionic User service');

        var user = $ionicUser.get();
        if (!user.user_id) {
            // Set your user_id here, or generate a random one.
            user.user_id = $ionicUser.generateGUID();
        };

        // Add some metadata to your user object.
        angular.extend(user, {
            name: 'Ionitron',
            bio: 'I come from planet Ion'
        });

        // Identify your user with the Ionic User Service
        $ionicUser.identify(user).then(function () {
            $scope.identified = true;
            alert('Identified user ' + user.name + '\n ID ' + user.user_id);
        });
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
