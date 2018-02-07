app.controller('restfulCtrl', function ($scope, $http) {
    $scope.header = {};
    $scope.headerList = [];
    $scope.typeList = ["POST", "GET", "PATCH", "HEADER", "DELETE"];
    $scope.type = "GET";
    $scope.extendCopy = function (p) {
        var c = {};
        for (var i in p) {
            c[i] = p[i];
        }
        c.uber = p;
        return c;
    }
    $scope.addHeader = function () {
        var has = false;
        for (var i = $scope.headerList.length - 1; i >= 0; i--) {
            var headerInList = $scope.headerList[i];
            if (headerInList.key == header.key) {
                headerInList.value = header.value;
                has = true;
                break;
            }

        }
        if (!has) {
            $scope.headerList.push($scope.extendCopy($scope.header));

        }
    }
    $scope.removeHeader = function (key) {
        for (var i = $scope.headerList.length - 1; i >= 0; i--) {
            var headerInList = $scope.headerList[i];
            console.log("key=" + key + "  headerInList=" + JSON.stringify(headerInList));
            if (headerInList.key == key) {
                $scope.headerList.splice(i, 1);
                return;
            }

        }
    }
    $scope.send = function () {
        var headers = {};
        $scope.headerList.forEach(function (value, index, array) {
            headers[value.key] = value.value;
        });
        jQuery.ajax({
            type: "POST",
            url: "http://localhost:8080/Token",
            cache: false,
            data: postdata,
            dataType: "json",
            contentType: "json",  // <=== Added
            success: getSuccess,
            error: getFail
        });



        $http({
            method: $scope.type,
            url: $scope.url,
            headers: headers,
            data: $scope.inputText
        }).then(function successCallback(response) {
            $scope.outputText = response.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
            $scope.outputText = response.data;
        });
    }
});