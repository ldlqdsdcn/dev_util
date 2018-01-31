app.controller('md5Ctrl', function ($scope) {
    require(["md5"], function (md5) {
        $scope.md5 = md5;
    });
    $scope.code = {};
    $scope.encode = function () {
        $scope.code.outputText = $scope.md5($scope.code.inputText);
        $scope.code.upperText = $scope.code.outputText.toLocaleUpperCase();
    }
});