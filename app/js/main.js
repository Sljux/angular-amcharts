angular.module('sljuxAmCharts')
    .controller('MainCtrl', function($scope) {
        $scope.chartOptions = {
            id: 'chart1',
            category: 'country',
            css: {
                width: '100%',
                height: '300px'
            },
            animation: {
                startEffect: 'elastic',
                startDuration: 0.5,
                startAlpha: 0.5,
                sequencedAnimation: false
            }
        };

        $scope.chartAxes = [
            {
                id: 'v1',
                position: 'left'
            },
            {

            }
        ];

        $scope.graphOptions = {
            value: 'visits'
        };
        $scope.graphOptions1 = {
            value: 'bla',
            type: 'column'
        };

        $scope.chartData = [{
            "country": "USA",
            "visits": 4252,
            "bla": 123
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }, {
            "country": "Germany",
            "visits": 1322
        }, {
            "country": "UK",
            "visits": 1122
        }, {
            "country": "France",
            "visits": 1114
        }, {
            "country": "India",
            "visits": 984
        }, {
            "country": "Spain",
            "visits": 711
        }, {
            "country": "Netherlands",
            "visits": 665
        }, {
            "country": "Russia",
            "visits": 580
        }, {
            "country": "South Korea",
            "visits": 443
        }, {
            "country": "Canada",
            "visits": 441
        }, {
            "country": "Brazil",
            "visits": 395
        }, {
            "country": "Italy",
            "visits": 386
        }, {
            "country": "Australia",
            "visits": 384
        }, {
            "country": "Taiwan",
            "visits": 338
        }, {
            "country": "Poland",
            "visits": 328
        }];

    });