angular.module('AgaveToGo').controller('JobsDirectoryController', function ($scope, $rootScope, $location, $state, $translate, $uibModal, JobsController, ActionsService, MessageService, NotificationsController) {    // $scope.$on('$viewContentLoaded', function () {    //     App.initAjax(); // initialize core components    //    //     // set default layout mode    //     $rootScope.settings.layout.pageContentWhite = true;    //     $rootScope.settings.layout.pageBodySolid = false;    //     $rootScope.settings.layout.pageSidebarClosed = false;    //    //     $scope.refresh();    //    // });    $scope._COLLECTION_NAME = 'jobs';    $scope._RESOURCE_NAME = 'job';    $scope[$scope._COLLECTION_NAME] = [];    $scope.sortType = 'startTime';    $scope.sortReverse = true;    $scope.query = 'appId.eq=' + $rootScope.settings.appId;    $scope.refresh = function () {        $scope.requesting = true;        JobsController.searchJobs(            $scope.query        )            .then(                function (response) {                    $scope.totalItems = response.result.length;                    $scope.pagesTotal = Math.ceil(response.result.length / $scope.limit);                    $scope[$scope._COLLECTION_NAME] = response.result;                    $scope.requesting = false;                },                function (response) {                    MessageService.handle(response, $translate.instant('error_jobs_list'));                    $scope.requesting = false;                }            );    };    $scope.searchTools = function (query) {        $scope.query = query;        $scope.refresh();    };    $scope.browse = function (id) {        JobsController.getJobDetails(id)            .then(                function (response) {                    $state.go('data-explorer', {                        'systemId': response.result.archiveSystem,                        path: response.result.archivePath                    });                },                function (response) {                    MessageService.handle(response, $translate.instant('error_jobs_list'));                    $scope.requesting = false;                }            );    };    $scope.resubmit = function(jobId) {        JobsController.createResubmitJob(jobId)            .then(                function(response) {                    // hard-wired for now                    var websocketNotification = {                        associatedUuid: response.result.id,                        event: '*',                        persistent: true,                        url: 'https://9d1e23fc.fanoutcdn.com/fpp'};                    var offlineNotification = {                        associatedUuid: response.result.id,                        event: '*',                        persistent: true,                        url: 'http://httpbin.org/status/418',                        policy: {                            retryStrategy: 'NONE',                            saveOnFailure: true                        }};                    NotificationsController.addNotification(websocketNotification)                        .then(                            function(response){                            },                            function(response){                                MessageService.handle(response, $translate.instant('error_notifications_add'));                            }                        );                    NotificationsController.addNotification(offlineNotification)                        .then(                            function(response){                            },                            function(response){                                MessageService.handle(response, $translate.instant('error_notifications_add'));                            }                        );                    $scope.job = response.result;                    $uibModal.open({                        templateUrl: "views/apps/resource/job-resubmission-success.html",                        scope: $scope,                        size: 'lg',                        controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance ) {                            $scope.cancel = function()                            {                                $uibModalInstance.dismiss('cancel');                            };                            $scope.close = function(){                                $uibModalInstance.close();                            }                        }]                    });                    $scope.resetForm();                    $scope.requesting = false;                },                function(response) {                    MessageService.handle(response, $translate.instant('error_jobs_create'));                });    };    $scope.runApp = function() {        $location.path('/apps');        $location.refresh();    };    $scope.confirmAction = function (resourceType, resource, resourceAction, resourceList, resourceIndex) {        ActionsService.confirmAction(resourceType, resource, resourceAction, resourceList, resourceIndex);    };    $scope.refresh();});