app.controller("binaryCtrl", function($scope ) {
    require({ 'paths': {'md5': 'md5.min'}},['md5'],function (md5d) {md5=md5d;});
    $scope.code = {};
    $scope.encode = function () {
        $scope.code.outputText = md5($scope.code.inputText);
    }
});