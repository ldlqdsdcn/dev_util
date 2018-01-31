app.controller("binaryCtrl", function ($scope) {
    require({'paths': {'utf8': 'utf8'}}, ['utf8'], function (utf8) {
        $scope.utf8 = utf8;
    });
    $scope.binary = '16';
    $scope.bin = 16;
    $scope.Str2Hex = {
        encode: function (str) {
            var hex = '';
            for (var i = 0; i < str.length; i++) {
                hex += '' + str.charCodeAt(i).toString($scope.bin);
            }
            return hex;
        },
        decode: function (hex) {
            var bit = 2;
            if ($scope.bin == 16) {
                bin = 2;
            }
            else if ($scope.bin == 8) {
                bin = 3;
            } else if ($scope.bin = 2) {
                bin = 8;
            }
            var str = '';
            for (var i = 0; i < hex.length; i += bin) {
                str += String.fromCharCode(parseInt(hex.substr(i, bin), $scope.bin));
            }
            return str;
        }
    };
    $scope.code = {};
    $scope.encode = function () {
        $scope.bin = parseInt($scope.binary);
        var utf8code = utf8.encode($scope.code.inputText);
        console.log('utf8code=' + utf8code);
        $scope.code.outputText = $scope.Str2Hex.encode(utf8code);

        //$scope.code.outputText = $scope.Str2Hex.encode($scope.code.inputText);
    }
    $scope.decode = function () {
        $scope.bin = parseInt($scope.binary);
        var binaryCode = $scope.Str2Hex.decode($scope.code.inputText);
        console.log('utf8code=' + binaryCode);
        $scope.code.outputText = utf8.decode(binaryCode);
        //$scope.code.outputText = utf8.decode($scope.code.inputText);
    }
});