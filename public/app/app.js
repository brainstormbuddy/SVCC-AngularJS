(function () {
    'use strict';


    var app = angular.module('baseApp', [
        'ngMessages',
        'ngResource',
        'ui.router',
        'pusher-angular',
        'svccApp'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider',

        function ($stateProvider, $urlRouterProvider, $rootScope) {
            //$urlRouterProvider.otherwise('/');

            $stateProvider

                /*----------------svcc-----------*/
                .state('svcc', {
                    url: '',
                    templateUrl: 'app/svcc/miscpages/svcc.html',
                    controller: function ($scope) {
                    }
                })
                .state('svcc.about', {
                    url: '/about',
                    templateUrl: 'app/svcc/miscpages/about.html'
                })
                .state('svcc.home', {
                    templateUrl: 'app/svcc/miscpages/home.html'
                })
                .state('svcc.register', {
                    url: '/register',
                    templateUrl: 'app/svcc/account/registration.html',
                    controller: 'RegistrationController as vm'
                }).
                state('svcc.login', {
                    url: '/login',
                    templateUrl: 'app/svcc/account/login.html',
                    controller: 'LoginController as vm'
                }).
                state('svcc.logout', {
                    url: '/logout',
                    templateUrl: 'app/svcc/general/home.html',
                    controller: 'LogoutController as vm'
                }).

                // speakers
                state('svcc.speakers', {
                    url: '/speakers',
                    templateUrl: 'app/svcc/speakers/speakers.html',
                    controller: 'SpeakersController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speakers: ['speakerResourceService', function (speakerResourceService) {
                            return speakerResourceService.query().$promise;
                        }]
                    }
                }).

                state('svcc.speakerid', {
                    //parent: 'svcc.speakers',
                    url: '/speaker/:id',
                    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                    controller: 'SpeakerDetailController as vm',
                    resolve: {
                        speakerResourceService: 'speakerResourceService',
                        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                            return speakerResourceService.get({id: $stateParams.id}).$promise;
                        }]
                    }
                }).

                //state('svcc.speakerid', {
                //    parent: 'svcc.speaker',
                //    url: '/:id',
                //    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

                //state('speaker', {
                //    url: '/speaker/:id',
                //    templateUrl: 'app/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: function(speakerResourceService,$stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }
                //    }
                //}).


                //state('svcc.speakers', {
                //    abstract: true,
                //    url: '/speakers',
                //    templateUrl: 'app/svcc/speakers/speaker-detail.html',
                //    template: '<div ui-view></div>'
                //}).
                //state('svcc.speaker.id', {
                //    parent: 'speaker',
                //    url: '/:id',
                //    templateUrl: 'app/speakers/speaker-detail.html',
                //    controller: 'SpeakerDetailController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

                //state('speaker.idfeedback', {
                //    parent: 'speaker',
                //    url: '/:id/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html',
                //    controller: 'SpeakerDetailFeedbackController as vm',
                //    resolve: {
                //        speakerResourceService: 'speakerResourceService',
                //        speaker: ['speakerResourceService', '$stateParams', function (speakerResourceService, $stateParams) {
                //            return speakerResourceService.get({id: $stateParams.id}).$promise;
                //        }]
                //    }
                //}).

                //state('speaker.feedback', {
                //    parent: '/speaker',
                //    url: '/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html'
                //}).


                //state('speaker.feedback', {
                //    url: '/:id/feedback',
                //    templateUrl: 'app/speakers/speaker-detail-feedback.html'
                //}).


                //sessions
                state('sessiondetail', {
                    url: '/sessions/:id',
                    templateUrl: 'app/sessions/session-detail.html',
                    controller: 'SessionDetailController as vm',
                    resolve: {
                        sessionResourceService: 'sessionResourceService',
                        session: ['sessionResourceService', '$stateParams', function (sessionResourceService, $stateParams) {
                            return sessionResourceService.get({id: $stateParams.id}).$promise;
                        }]
                    }
                }).
                state('sessions', {
                    url: '/sessions',
                    templateUrl: 'app/sessions/sessions.html',
                    controller: 'SessionsController as vm',
                    resolve: {
                        sessionResourceService: 'sessionResourceService',
                        sessions: ['sessionResourceService', function (sessionResourceService) {
                            return sessionResourceService.query().$promise;
                        }],
                        sessionDayOfWeekResourceService: 'sessionDayOfWeekResourceService',
                        sessionDayOfWeeks: ['sessionDayOfWeekResourceService', function (sessionDayOfWeekResourceService) {
                            return sessionDayOfWeekResourceService.query().$promise;
                        }]
                    }
                }).


                /*----------------angu-----------*/

                state('angu', {
                    url: '',
                    templateUrl: 'app/angu/miscpages/angu.html',
                    controller: function ($scope) {
                    }
                }).
                state('angu.about', {
                    url: '/about',
                    templateUrl: 'app/angu/miscpages/about.html'
                }).
                state('angu.home', {
                    templateUrl: 'app/angu/miscpages/home.html'
                });

            //$locationProvider.html5Mode(true);

        }]);

    app.run(['$rootScope', function ($rootScope) {


        $rootScope.loginName = '';

        //var initInjector = angular.injector(['ng']);
        //var $http = initInjector.get('$http', '$rootScope');
        //
        ////console.log('fetchData called');
        //return $http.post('/rpc/Account/isLoggedIn').then(function (response) {
        //
        //    console.log('username: ' + response.data.attendeeResults.username);
        //
        //    //$rootScope.loginName = response.data.attendeeResults.sessionGuid;
        //    $rootScope.loginName = response.data.attendeeResults.username;
        //    $rootScope.sessionGuid = response.data.attendeeResults.sessionGuid;
        //    $rootScope.$apply();
        //
        //    //angular.module('svccApp').value('configData', angular.fromJson(response.data));
        //
        //
        //    //svccApp.value('configData', angular.fromJson(response.data));
        //
        //
        //}, function (errorResponse) {
        //    console.log('error from isLoggedIn Post ' + errorResponse);
        //
        //    // Handle error case
        //});


    }]);


}());