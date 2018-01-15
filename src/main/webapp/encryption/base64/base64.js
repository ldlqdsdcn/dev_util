app.controller('base64Ctrl', function ($scope) {
    $scope.code = {};
    $scope.encode = function () {
        $scope.code.outputText = Base64.encode($scope.code.inputText);
    }
    $scope.decode = function () {
        $scope.code.outputText = Base64.decode($scope.code.inputText);
    }
});