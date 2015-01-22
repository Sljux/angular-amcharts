"use strict";

angular.module('sljuxAmCharts')
    .controller('MainCtrl', function ($scope) {
        $scope.chartOptions = {
            id: 'chart1',
            categoryField: 'time',
            startEffect: 'elastic',
            startDuration: 0.5,
            startAlpha: 0.5,
            sequencedAnimation: true
        };

        $scope.chartCSS = {
            width: '100%',
            height: '300px'
        };

        $scope.categoryAxis = {
            parseDates: true,
            minPeriod: 'hh',
            position: 'top'
        };


        $scope.legendOptions = {
            labelText: '[[title]] graph',
            marginTop: 10,
            marginBottom: 20,
            marginLeft: 400,
            marginRight: 100,
            markerType: 'circle',
            markerSize: 20,
            position: 'top',
            valueText: '[[value]]'
        };

        $scope.chartAxes = [
            {
                id: 'v1',
                position: 'left',
                minimum: -10,
                maximum: 40
            },
            {
                id: 'v2',
                position: 'right',
                minimum: 0,
                maximum: 100
            }
        ];

        $scope.temperatureGraph = {
            valueField: 'temperature',
            valueAxis: 'v1',
            lineColor: '#FF0000',
            type: 'column',
            title: 'Temperature'
        };
        $scope.humidityGraph = {
            valueField: 'humidity',
            valueAxis: 'v2',
            type: 'smoothedLine',
            title: 'Humidity'
        };

        $scope.lineGraphEvents = {
            'clickGraph': log,
            'clickGraphItem': log,
            'rightClickGraphItem': log
        };

        $scope.pieChartEvents = {
            'clickSlice': log
        };

        function log(event) {
            console.log(event);
        }

        $scope.cursorOptions = {
            position: 'mouse',
            valueLineEnabled: true,
            valueLineBalloonEnabled: true,
            valueLineAxis: 'v2',
            fullWidth: true,
            color: '#0000FF',
            alpha: 0.1,
            bulletsEnabled: true,
            bulletSize: 15
        };

        $scope.pieOptions = {
            id: 'pie',
            titleField: "content",
            valueField: "value"
        };

        $scope.pieData = [
            {
                content: 'aaa',
                value: 7
            },
            {
                content: 'bbb',
                value: 2
            },
            {
                content: 'ccc',
                value: 1
            }
        ];


        var data = [{
            "time": 1415948400,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 8.74,
            "apparentTemperature": 8.32,
            "dewPoint": 8.58,
            "humidity": 0.99,
            "windSpeed": 1.41,
            "windBearing": 53,
            "visibility": 2.99,
            "cloudCover": 0.75,
            "pressure": 1014.82,
            "ozone": 286.05
        }, {
            "time": 1415952000,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.41,
            "apparentTemperature": 8.99,
            "dewPoint": 9.19,
            "humidity": 0.99,
            "windSpeed": 1.48,
            "windBearing": 62,
            "visibility": 2.99,
            "cloudCover": 0.76,
            "pressure": 1014.83,
            "ozone": 284.44
        }, {
            "time": 1415955600,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 10.21,
            "apparentTemperature": 10.21,
            "dewPoint": 9.83,
            "humidity": 0.97,
            "windSpeed": 1.58,
            "windBearing": 70,
            "visibility": 2.99,
            "cloudCover": 0.77,
            "pressure": 1014.76,
            "ozone": 282.84
        }, {
            "time": 1415959200,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.06,
            "apparentTemperature": 11.06,
            "dewPoint": 10.3,
            "humidity": 0.95,
            "windSpeed": 1.66,
            "windBearing": 75,
            "visibility": 2.99,
            "cloudCover": 0.78,
            "pressure": 1014.58,
            "ozone": 281.28
        }, {
            "time": 1415962800,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.8,
            "apparentTemperature": 11.8,
            "dewPoint": 10.41,
            "humidity": 0.91,
            "windSpeed": 1.67,
            "windBearing": 80,
            "visibility": 2.99,
            "cloudCover": 0.79,
            "pressure": 1014.36,
            "ozone": 279.71
        }, {
            "time": 1415966400,
            "summary": "Foggy",
            "icon": "fog",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 12.19,
            "apparentTemperature": 12.19,
            "dewPoint": 10.18,
            "humidity": 0.87,
            "windSpeed": 1.65,
            "windBearing": 83,
            "visibility": 2.99,
            "cloudCover": 0.8,
            "pressure": 1014.26,
            "ozone": 278.31
        }, {
            "time": 1415970000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 12.2,
            "apparentTemperature": 12.2,
            "dewPoint": 9.56,
            "humidity": 0.84,
            "windSpeed": 1.6,
            "windBearing": 85,
            "cloudCover": 0.82,
            "pressure": 1014.31,
            "ozone": 277.21
        }, {
            "time": 1415973600,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.95,
            "apparentTemperature": 11.95,
            "dewPoint": 9.68,
            "humidity": 0.86,
            "windSpeed": 1.53,
            "windBearing": 86,
            "cloudCover": 0.82,
            "pressure": 1014.45,
            "ozone": 276.27
        }, {
            "time": 1415977200,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.53,
            "apparentTemperature": 11.53,
            "dewPoint": 9.64,
            "humidity": 0.88,
            "windSpeed": 1.43,
            "windBearing": 87,
            "cloudCover": 0.8,
            "pressure": 1014.64,
            "ozone": 275.2
        }, {
            "time": 1415980800,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 10.99,
            "apparentTemperature": 10.99,
            "dewPoint": 9.43,
            "humidity": 0.9,
            "windSpeed": 1.31,
            "windBearing": 91,
            "cloudCover": 0.79,
            "pressure": 1014.86,
            "ozone": 273.79
        }, {
            "time": 1415984400,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 10.39,
            "apparentTemperature": 10.39,
            "dewPoint": 9.12,
            "humidity": 0.92,
            "windSpeed": 1.19,
            "windBearing": 97,
            "cloudCover": 0.77,
            "pressure": 1015.1,
            "ozone": 272.25
        }, {
            "time": 1415988000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.83,
            "apparentTemperature": 9.83,
            "dewPoint": 8.76,
            "humidity": 0.93,
            "windSpeed": 1.07,
            "windBearing": 104,
            "cloudCover": 0.69,
            "pressure": 1015.29,
            "ozone": 270.92
        }, {
            "time": 1415991600,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.27,
            "apparentTemperature": 9.27,
            "dewPoint": 8.31,
            "humidity": 0.94,
            "windSpeed": 0.95,
            "windBearing": 116,
            "cloudCover": 0.49,
            "pressure": 1015.43,
            "ozone": 269.73
        }, {
            "time": 1415995200,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 8.66,
            "apparentTemperature": 8.66,
            "dewPoint": 7.76,
            "humidity": 0.94,
            "windSpeed": 0.89,
            "windBearing": 132,
            "cloudCover": 0.24,
            "pressure": 1015.54,
            "ozone": 268.75
        }, {
            "time": 1415998800,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 8.07,
            "apparentTemperature": 8.07,
            "dewPoint": 7.19,
            "humidity": 0.94,
            "windSpeed": 0.94,
            "windBearing": 147,
            "cloudCover": 0.05,
            "pressure": 1015.64,
            "ozone": 268.5
        }, {
            "time": 1416002400,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 7.54,
            "apparentTemperature": 7.54,
            "dewPoint": 6.68,
            "humidity": 0.94,
            "windSpeed": 1.04,
            "windBearing": 158,
            "cloudCover": 0,
            "pressure": 1015.74,
            "ozone": 269.81
        }, {
            "time": 1416006000,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 7.08,
            "apparentTemperature": 7.08,
            "dewPoint": 6.2,
            "humidity": 0.94,
            "windSpeed": 1.15,
            "windBearing": 165,
            "cloudCover": 0.01,
            "pressure": 1015.83,
            "ozone": 271.85
        }, {
            "time": 1416009600,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 6.66,
            "apparentTemperature": 6.66,
            "dewPoint": 5.77,
            "humidity": 0.94,
            "windSpeed": 1.25,
            "windBearing": 170,
            "cloudCover": 0.03,
            "pressure": 1015.88,
            "ozone": 272.57
        }, {
            "time": 1416013200,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 6.14,
            "apparentTemperature": 6.14,
            "dewPoint": 5.31,
            "humidity": 0.94,
            "windSpeed": 1.33,
            "windBearing": 175,
            "cloudCover": 0.02,
            "pressure": 1015.84,
            "ozone": 270.51
        }, {
            "time": 1416016800,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 5.53,
            "apparentTemperature": 4.68,
            "dewPoint": 4.78,
            "humidity": 0.95,
            "windSpeed": 1.4,
            "windBearing": 179,
            "cloudCover": 0.01,
            "pressure": 1015.77,
            "ozone": 267.13
        }, {
            "time": 1416020400,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 4.99,
            "apparentTemperature": 3.98,
            "dewPoint": 4.31,
            "humidity": 0.95,
            "windSpeed": 1.47,
            "windBearing": 183,
            "cloudCover": 0,
            "pressure": 1015.75,
            "ozone": 264.78
        }, {
            "time": 1416024000,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 4.58,
            "apparentTemperature": 3.43,
            "dewPoint": 3.98,
            "humidity": 0.96,
            "windSpeed": 1.53,
            "windBearing": 186,
            "cloudCover": 0,
            "pressure": 1015.85,
            "ozone": 264.63
        }, {
            "time": 1416027600,
            "summary": "Clear",
            "icon": "clear-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 4.41,
            "apparentTemperature": 3.14,
            "dewPoint": 3.87,
            "humidity": 0.96,
            "windSpeed": 1.6,
            "windBearing": 189,
            "cloudCover": 0,
            "pressure": 1015.98,
            "ozone": 265.51
        }, {
            "time": 1416031200,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 4.77,
            "apparentTemperature": 3.42,
            "dewPoint": 4.08,
            "humidity": 0.95,
            "windSpeed": 1.71,
            "windBearing": 191,
            "cloudCover": 0.01,
            "pressure": 1016,
            "ozone": 266.26
        }, {
            "time": 1416034800,
            "summary": "Clear",
            "icon": "clear-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 5.98,
            "apparentTemperature": 4.66,
            "dewPoint": 4.77,
            "humidity": 0.92,
            "windSpeed": 1.86,
            "windBearing": 194,
            "cloudCover": 0.2,
            "pressure": 1015.82,
            "ozone": 266.41
        }, {
            "time": 1416038400,
            "summary": "Partly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 7.83,
            "apparentTemperature": 6.64,
            "dewPoint": 5.83,
            "humidity": 0.87,
            "windSpeed": 2.03,
            "windBearing": 196,
            "cloudCover": 0.46,
            "pressure": 1015.49,
            "ozone": 266.43
        }, {
            "time": 1416042000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.73,
            "apparentTemperature": 8.73,
            "dewPoint": 6.92,
            "humidity": 0.83,
            "windSpeed": 2.2,
            "windBearing": 198,
            "cloudCover": 0.66,
            "pressure": 1015.07,
            "ozone": 266.55
        }, {
            "time": 1416045600,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.62,
            "apparentTemperature": 11.62,
            "dewPoint": 7.99,
            "humidity": 0.78,
            "windSpeed": 2.33,
            "windBearing": 201,
            "cloudCover": 0.75,
            "pressure": 1014.54,
            "ozone": 266.95
        }, {
            "time": 1416049200,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 13.26,
            "apparentTemperature": 13.26,
            "dewPoint": 8.92,
            "humidity": 0.75,
            "windSpeed": 2.4,
            "windBearing": 203,
            "cloudCover": 0.77,
            "pressure": 1014.01,
            "ozone": 267.45
        }, {
            "time": 1416052800,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 14.24,
            "apparentTemperature": 14.24,
            "dewPoint": 9.62,
            "humidity": 0.74,
            "windSpeed": 2.41,
            "windBearing": 204,
            "cloudCover": 0.79,
            "pressure": 1013.64,
            "ozone": 267.75
        }, {
            "time": 1416056400,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 14.31,
            "apparentTemperature": 14.31,
            "dewPoint": 10.12,
            "humidity": 0.76,
            "windSpeed": 2.36,
            "windBearing": 203,
            "cloudCover": 0.84,
            "pressure": 1013.46,
            "ozone": 267.64
        }, {
            "time": 1416060000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 13.71,
            "apparentTemperature": 13.71,
            "dewPoint": 10.39,
            "humidity": 0.8,
            "windSpeed": 2.29,
            "windBearing": 200,
            "cloudCover": 0.89,
            "pressure": 1013.38,
            "ozone": 267.33
        }, {
            "time": 1416063600,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-day",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 12.81,
            "apparentTemperature": 12.81,
            "dewPoint": 10.32,
            "humidity": 0.85,
            "windSpeed": 2.23,
            "windBearing": 196,
            "cloudCover": 0.92,
            "pressure": 1013.38,
            "ozone": 267.18
        }, {
            "time": 1416067200,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 11.85,
            "apparentTemperature": 11.85,
            "dewPoint": 10.01,
            "humidity": 0.88,
            "windSpeed": 2.21,
            "windBearing": 192,
            "cloudCover": 0.9,
            "pressure": 1013.45,
            "ozone": 267.49
        }, {
            "time": 1416070800,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 10.99,
            "apparentTemperature": 10.99,
            "dewPoint": 9.68,
            "humidity": 0.92,
            "windSpeed": 2.22,
            "windBearing": 188,
            "cloudCover": 0.85,
            "pressure": 1013.56,
            "ozone": 267.96
        }, {
            "time": 1416074400,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 10.35,
            "apparentTemperature": 10.35,
            "dewPoint": 9.39,
            "humidity": 0.94,
            "windSpeed": 2.28,
            "windBearing": 186,
            "cloudCover": 0.81,
            "pressure": 1013.6,
            "ozone": 267.99
        }, {
            "time": 1416078000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.99,
            "apparentTemperature": 8.86,
            "dewPoint": 9.14,
            "humidity": 0.94,
            "windSpeed": 2.45,
            "windBearing": 186,
            "cloudCover": 0.81,
            "pressure": 1013.57,
            "ozone": 267.24
        }, {
            "time": 1416081600,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.71,
            "apparentTemperature": 8.39,
            "dewPoint": 8.82,
            "humidity": 0.94,
            "windSpeed": 2.62,
            "windBearing": 185,
            "cloudCover": 0.81,
            "pressure": 1013.5,
            "ozone": 266.04
        }, {
            "time": 1416085200,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.46,
            "apparentTemperature": 7.99,
            "dewPoint": 8.51,
            "humidity": 0.94,
            "windSpeed": 2.79,
            "windBearing": 185,
            "cloudCover": 0.82,
            "pressure": 1013.35,
            "ozone": 264.84
        }, {
            "time": 1416088800,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.23,
            "apparentTemperature": 7.63,
            "dewPoint": 8.23,
            "humidity": 0.93,
            "windSpeed": 2.93,
            "windBearing": 184,
            "cloudCover": 0.84,
            "pressure": 1013.12,
            "ozone": 263.65
        }, {
            "time": 1416092400,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 9.02,
            "apparentTemperature": 7.3,
            "dewPoint": 7.95,
            "humidity": 0.93,
            "windSpeed": 3.05,
            "windBearing": 184,
            "cloudCover": 0.85,
            "pressure": 1012.82,
            "ozone": 262.45
        }, {
            "time": 1416096000,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0,
            "precipProbability": 0,
            "temperature": 8.82,
            "apparentTemperature": 7,
            "dewPoint": 7.74,
            "humidity": 0.93,
            "windSpeed": 3.16,
            "windBearing": 183,
            "cloudCover": 0.88,
            "pressure": 1012.51,
            "ozone": 261.59
        }, {
            "time": 1416099600,
            "summary": "Mostly Cloudy",
            "icon": "partly-cloudy-night",
            "precipIntensity": 0.0559,
            "precipProbability": 0.03,
            "precipType": "rain",
            "temperature": 8.78,
            "apparentTemperature": 7.02,
            "dewPoint": 7.77,
            "humidity": 0.93,
            "windSpeed": 3.05,
            "windBearing": 182,
            "cloudCover": 0.92,
            "pressure": 1012.17,
            "ozone": 261.19
        }, {
            "time": 1416103200,
            "summary": "Overcast",
            "icon": "cloudy",
            "precipIntensity": 0.1194,
            "precipProbability": 0.17,
            "precipType": "rain",
            "temperature": 8.73,
            "apparentTemperature": 7.02,
            "dewPoint": 7.83,
            "humidity": 0.94,
            "windSpeed": 2.95,
            "windBearing": 181,
            "cloudCover": 0.96,
            "pressure": 1011.81,
            "ozone": 261.12
        }, {
            "time": 1416106800,
            "summary": "Drizzle",
            "icon": "rain",
            "precipIntensity": 0.188,
            "precipProbability": 0.44,
            "precipType": "rain",
            "temperature": 8.67,
            "apparentTemperature": 6.99,
            "dewPoint": 7.87,
            "humidity": 0.95,
            "windSpeed": 2.88,
            "windBearing": 179,
            "cloudCover": 0.99,
            "pressure": 1011.48,
            "ozone": 261.42
        }, {
            "time": 1416110400,
            "summary": "Drizzle",
            "icon": "rain",
            "precipIntensity": 0.2311,
            "precipProbability": 0.65,
            "precipType": "rain",
            "temperature": 8.54,
            "apparentTemperature": 6.84,
            "dewPoint": 7.83,
            "humidity": 0.95,
            "windSpeed": 2.87,
            "windBearing": 177,
            "cloudCover": 0.98,
            "pressure": 1011.23,
            "ozone": 262.45
        }, {
            "time": 1416114000,
            "summary": "Light Rain",
            "icon": "rain",
            "precipIntensity": 0.2616,
            "precipProbability": 0.68,
            "precipType": "rain",
            "temperature": 8.33,
            "apparentTemperature": 6.7,
            "dewPoint": 7.7,
            "humidity": 0.96,
            "windSpeed": 2.7,
            "windBearing": 175,
            "cloudCover": 0.96,
            "pressure": 1011.05,
            "ozone": 263.86
        }, {
            "time": 1416117600,
            "summary": "Light Rain",
            "icon": "rain",
            "precipIntensity": 0.2718,
            "precipProbability": 0.67,
            "precipType": "rain",
            "temperature": 8.48,
            "apparentTemperature": 6.87,
            "dewPoint": 7.84,
            "humidity": 0.96,
            "windSpeed": 2.71,
            "windBearing": 175,
            "cloudCover": 0.94,
            "pressure": 1010.94,
            "ozone": 264.6
        }, {
            "time": 1416121200,
            "summary": "Light Rain",
            "icon": "rain",
            "precipIntensity": 0.2921,
            "precipProbability": 0.66,
            "precipType": "rain",
            "temperature": 9.05,
            "apparentTemperature": 7.59,
            "dewPoint": 8.31,
            "humidity": 0.95,
            "windSpeed": 2.65,
            "windBearing": 177,
            "cloudCover": 0.92,
            "pressure": 1010.9,
            "ozone": 264.01
        }];

        $scope.chartData = parseData(data);

        function parseData(data) {
            var result = [];

            for (var i = 0; i < data.length; i++) {
                var d = data[i];

                var item = {};

                item.temperature = d.temperature;
                item.humidity = d.humidity * 100;
                item.time = moment.unix(d.time).format("YYYY-MM-DD HH:mm:SS");

                result.push(item);
            }

            return result;
        }
    });