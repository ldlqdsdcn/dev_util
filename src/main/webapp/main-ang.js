//requirejs.config({baseUrl: 'lib',});
requirejs.config({
    "baseUrl": "lib",
    "paths": {
        "md5": "md5.min",
        "base64":"base64"
    }
});
var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }]);
// 按模块化加载其他的脚本文件
app.constant('Modules_Config', [
    {
        name: 'treeControl',
        serie: true//,
        /*files: [
            "Scripts/angular-bootstrap/ui-bootstrap-tpls-0.14.3.min.js"
        ]*/
    }
]);
app.config(["$ocLazyLoadProvider", "Modules_Config", routeFn]);

function routeFn($ocLazyLoadProvider, Modules_Config) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: Modules_Config
    });
};
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/base64');
    $stateProvider
        .state('base64', {url: '/base64', templateUrl: 'encryption/base64/base64.html',resolve:{
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('encryption/base64/base64.js');
            }]
        }})
        .state('md5', {
            url: '/md5', templateUrl: 'encryption/md5/md5.html', resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('encryption/md5/md5.js');
                }]
            }
        }).state('ethereum',{url:'/ethereum',templateUrl:'blockchain/ethereum.html', resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(['blockchain/ethereum.js']);
        }]
    }}).state('passwd',{url:'/passwd',templateUrl:'encryption/passwd/passwd.html', resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(['encryption/passwd/passwd.js']);
        }]
    }}).state('binary',{url:'/binary',templateUrl:'encryption/hex/toHex.html', resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(['encryption/hex/toHex.js']);
        }]
    }});
}]);
