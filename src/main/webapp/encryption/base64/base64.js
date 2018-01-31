app.controller('base64Ctrl', function ($scope) {

    require(
        { 'paths': { 'base64': 'base64'}
        }, ['base64'],
        function(base64) {
            $scope.base64 = base64;
        }
    );
    require(
        { 'paths': { 'utf8': 'utf8'}
        }, ['utf8'],
        function(utf8) {
            $scope.utf8 = utf8;
        }
    );
   /* require(["base64"], function (base64) {
        $scope.base64 = base64;
    });*/
    $scope.code = {};
    $scope.encode = function () {
        var hexValue=$scope.utf8.encode($scope.code.inputText);
        $scope.code.outputText = $scope.base64.encode(hexValue);
    }
    $scope.decode = function () {


     var hexValue  = $scope.base64.decode($scope.code.inputText);
        $scope.code.outputText=$scope.utf8.decode(hexValue);
    }
});