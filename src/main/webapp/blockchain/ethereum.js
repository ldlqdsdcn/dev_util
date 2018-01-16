/*require(['bignumber','web3'],function (BigNumber,web3) {
});*/
    app.controller('ethereumCtrl', function ($scope,$ocLazyLoad) {
/*        $ocLazyLoad.load('../lib/bignumber.min.js','../lib/web3.js').then(function (BigNumber,web3) {
            console.log('加载成功');
            if (typeof $scope.web3 !== 'undefined') {
                $scope.web3 = new Web3($scope.web3.currentProvider);
            } else {
                // set the provider you want from Web3.providers
                $scope.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
            $scope.clientVersion=$scope.web3.version.api;
        });*/
     /*  */
/*        if (typeof web3 == 'undefined') {
            require(['bignumber.min', 'web3'], function (BigNumber, web3) {
                BigNumber = BigNumber;
                if (typeof web3 !== 'undefined') {
                    web3 = new Web3(web3.currentProvider);
                } else {
                    // set the provider you want from Web3.providers
                    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
                }
                $scope.clientVersion = web3.version.api;
                $scope.web3=web3;
            });
        }
        else
        {
            $scope.web3=web3;
        }

        $scope.encode=function () {

            $scope.clientVersion=$scope.web3.version.api;
            alert($scope.clientVersion);
        }*/
    });






