app.controller('base64Ctrl', function ($scope) {

    require(
        {
            'paths': {'base64': 'base64', 'utf8': 'utf8'}
        }, ['base64', 'utf8'],
        function (base64, utf8) {
            $scope.base64 = base64;
        }
    );
    $scope.code = {};
    $scope.encode = function () {
        var hexValue = utf8.encode($scope.code.inputText);
        $scope.code.outputText = $scope.base64.encode(hexValue);
    }
    $scope.decode = function () {
        var hexValue = $scope.base64.decode($scope.code.inputText);
        $scope.code.outputText = utf8.decode(hexValue);
    }
});