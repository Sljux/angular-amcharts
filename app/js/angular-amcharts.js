"use strict";

angular.module('sljuxAmCharts')
    .directive('amChart', ['$timeout', function ($timeout) {
        return {
            scope: {
                options: '=',
                css: '=',
                categoryAxis: '=',
                data: '=',
                valueAxes: '=',
                events: '='
            },
            restrict: 'E',
            replace: false,
            transclude: true,
            controller: function ($scope) {
                this.addGraph = function(graph) {
                    $scope.chart.addGraph(graph);
                };

                this.setCursor = function(cursor) {
                    $scope.chart.addChartCursor(cursor);
                };

                this.setLegend = function(legend) {
                    $scope.chart.legend = legend;
                };

                this.refreshData = function() {
                    $scope.chart.validateData();
                    $scope.chart.animateAgain();
                };

                this.refreshAttrs = function() {
                    $scope.chart.validateNow();
                };

                this.logChart = function() {
                    console.log($scope.chart);
                }
            },
            template: '<div class="sljux-amchart" ng-transclude></div>',
            link: {
                pre: function (scope, elem, attrs, ctrl) {
                    var options = scope.options || {};
                    var categoryAxis = scope.categoryAxis || {};

                    var chart = new AmCharts.AmSerialChart();
                    angular.extend(chart, options);
                    angular.extend(chart.categoryAxis, categoryAxis);

                    scope.chart = chart;
                },
                post: function (scope, elem, attrs, ctrl) {
                    var options = scope.options || {};
                    var valueAxes = scope.valueAxes || {};

                    if (angular.isUndefined(options.id))
                        throw new Error('A unique ID is required for every chart');

                    configureTemplate();
                    configureValueAxes();
                    configureDataProvider();
                    configureEvents();
                    writeChart();

                    function configureValueAxes() {
                        if (valueAxes) {
                            for (var i = 0; i < valueAxes.length; i++) {
                                var axis = valueAxes[i];
                                var valueAxis = new AmCharts.ValueAxis();

                                angular.extend(valueAxis, axis);

                                scope.chart.addValueAxis(valueAxis);
                            }
                        }
                    }
                    function configureTemplate() {
                        var template = angular.element(elem.children()[0]);

                        if (!template)
                            throw new Error('Template error');

                        template.attr('id', options.id);

                        if (scope.css)
                            template.css(scope.css);

                        return template;
                    }
                    function configureDataProvider() {
                        scope.chart.dataProvider = scope.data;
                        scope.$watch('data', function () {
                            scope.chart.dataProvider = scope.data;
                            ctrl.refreshData();
                        }, true);
                    }
                    function configureEvents() {
                        angular.forEach(scope.events, function (handler, eventName) {
                            scope.chart.addListener(eventName, handler);
                        })
                    }
                    function writeChart() {
                        $timeout(function () {
                            scope.chart.write(scope.options.id);
                        });
                    }
                }
            }
        }
    }])
    .directive('amChartGraph', [function() {
        return {
            restrict: "E",
            require: "^amChart",
            scope: {
                options: '=',
                events: '='
            },
            link: function(scope, element, attrs, amChartController) {
                var graph = new AmCharts.AmGraph();
                amChartController.addGraph(graph);

                configureEvents();

                scope.$watch('options', function () {
                    var options = scope.options || {};
                    angular.extend(graph, options);
                    amChartController.refreshAttrs();
                }, true);

                function configureEvents() {
                    angular.forEach(scope.events, function (handler, eventName) {
                        graph.addListener(eventName, handler);
                    })
                }
            }
        }
    }])
    .directive('amChartLegend', [function() {
        return {
            restrict: "E",
            require: "^amChart",
            scope: {
                options: '='
            },
            link: function(scope, element, attrs, amChartController) {
                var legend = new AmCharts.AmLegend();
                amChartController.setLegend(legend);

                scope.$watch('options', function () {
                    var options = scope.options || {};
                    angular.extend(legend, options);
                    amChartController.refreshAttrs();
                }, true);
            }
        }
    }])
    .directive('amChartCursor', [function() {
        return {
            restrict: "E",
            require: "^amChart",
            replace: true,
            scope: {
                options: '='
            },
            link: function(scope, element, attrs, amChartController) {
                var cursor = new AmCharts.ChartCursor();
                amChartController.setCursor(cursor);

                scope.$watch('options', function () {
                    var options = scope.options || {};
                    angular.extend(cursor, options);
                    amChartController.refreshAttrs();
                }, true);
            }
        }
    }])
    .directive('amPieChart', ['$timeout', function ($timeout) {
        return {
            scope: {
                options: '=',
                data: '=',
                css: '=',
                events: '='
            },
            restrict: 'E',
            replace: false,
            transclude: true,
            controller: function ($scope) {
                this.refreshData = function() {
                    $scope.chart.validateData();
                };

                this.refreshAttrs = function() {
                    $scope.chart.validateNow();
                };

                this.logChart = function() {
                    console.log($scope.chart);
                }
            },
            template: '<div class="sljux-amchart" ng-transclude></div>',
            link: function (scope, elem, attrs, ctrl) {
                var options = scope.options || {};

                if (angular.isUndefined(options.id))
                    throw new Error('A unique ID is required for every chart');

                var chart = new AmCharts.AmPieChart();
                angular.extend(chart, options);
                chart.dataProvider = scope.data;

                scope.chart = chart;
                scope.$watch('data', function () {
                    scope.chart.dataProvider = scope.data;
                    ctrl.refreshData();
                }, true);

                configureTemplate();
                configureEvents();
                writeChart();

                function configureTemplate() {
                    var template = angular.element(elem.children()[0]);

                    if (!template)
                        throw new Error('Template error');

                    template.attr('id', options.id);

                    if (scope.css)
                        template.css(scope.css);

                    return template;
                }
                function configureEvents() {
                    angular.forEach(scope.events, function (handler, eventName) {
                        scope.chart.addListener(eventName, handler);
                    })
                }
                function writeChart() {
                    $timeout(function () {
                        scope.chart.write(scope.options.id);
                    });
                }
            }
        }
    }]);
