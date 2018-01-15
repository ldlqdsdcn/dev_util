app.controller('base64Ctrl', function ($scope) {

    require(
        { 'paths': { 'base64': 'base64'}
        }, ['base64'],
        function(base64) {
            $scope.base64 = base64;
        }
    );
   /* require(["base64"], function (base64) {
        $scope.base64 = base64;
    });*/
    $scope.code = {};
    $scope.encode = function () {
        $scope.code.outputText = $scope.base64.encode($scope.code.inputText);
    }
    $scope.decode = function () {
        $scope.code.outputText = $scope.base64.decode($scope.code.inputText);
    }
});