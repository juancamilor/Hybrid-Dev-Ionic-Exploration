angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $rootScope, $ionicUser, $ionicPush, $cordovaDialogs) {


    //$rootScope.$on('pushNotificationReceived', function (event, notification) {
    //    console.log('****pushNotificationReceived***:' + JSON.stringify([notification]));
    //    if (ionic.Platform.isAndroid()) {
    //        handleAndroid(notification);
    //    }
    //});


    //// Android Notification Received Handler
    //function handleAndroid(notification) {
    //    // ** NOTE: ** You could add code for when app is in foreground or not, or coming from coldstart here too
    //    //             via the console fields as shown.
    //    console.log("In foreground " + notification.foreground + " Coldstart " + notification.coldstart);
    //    if (notification.event == "registered") {
    //        console.log('notification.event = registered, Regid:' + notification.regid);
    //        $scope.regId = notification.regid;
    //        //storeDeviceToken("android");
    //    }
    //    else if (notification.event == "message") {
    //        console.log('notification.event = message');
    //        $cordovaDialogs.alert(notification.message, "Push Notification Received");
    //        $scope.$apply(function () {
    //            $scope.notifications.push(JSON.stringify(notification.message));
    //        });
    //    }
    //    else if (notification.event == "error")
    //        $cordovaDialogs.alert(notification.msg, "Push notification error event");
    //    else $cordovaDialogs.alert(notification.event, "Push notification handler - Unprocessed Event");
    //}



    // Handles incoming device tokens
    $rootScope.$on('$cordovaPush:tokenReceived', function (event, data) {
        alert("Successfully registered token " + data.token);
        console.log('Ionic Push: Got token ', data.token, data.platform);
        $scope.token = data.token;
    });

    // Identifies a user with the Ionic User service
    $scope.identifyUser = function () {
        console.log('Ionic User: Identifying with Ionic User service');

        var user = $ionicUser.get();
        if (!user.user_id) {
            // Set your user_id here, or generate a random one.
            user.user_id = $ionicUser.generateGUID()
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

    // Registers a device for push notifications 
    $scope.pushRegister = function () {
        console.log('Ionic Push: Registering user');

        // Register with the Ionic Push service.  All parameters are optional.
        $ionicPush.register({
            canShowAlert: true, //Can pushes show an alert on your screen?
            canSetBadge: true, //Can pushes update app icon badges?
            canPlaySound: true, //Can notifications play a sound?
            canRunActionsOnWake: true, //Can run actions outside the app,
            onNotification: function (notification) {
                // Handle new push notifications here
                if (notification.event == "message") {
                    $cordovaDialogs.alert(notification.event + ' -- ' + notification.message);
                    console.log('Got notification (register handler):' + notification.message);
                } else {
                    $cordovaDialogs.alert(notification.event);
                    console.log('Got notification type (register handler):' + notification.event);
                }
                return true;
            }
        });
    };
})

.controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});