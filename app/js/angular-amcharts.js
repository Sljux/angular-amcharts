"use strict";

angular.module('sljuxAmCharts')
    .directive('amChart', ['$timeout', function ($timeout) {
        return {
            scope: {
                options: '=',
                data: '=',
                valueAxes: '='
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

                    scope.chart = configureChart(options);
                    configureCategoryAxis(options);

                    function configureChart(options) {
                        var chart = new AmCharts.AmSerialChart();

                        chart.categoryField = options.category;

                        setAnimation();
                        setColor();

                        return chart;

                        function setColor() {
                            if (options.background) {
                                chart.backgroundColor = options.background.color || '#FFFFFF';
                                chart.backgroundAlpha = options.background.alpha || 1;
                            }
                        }
                        function setAnimation() {
                            if (options.animation)
                            {
                                chart.startEffect =         options.animation.startEffect           || 'elastic';
                                chart.startDuration =       options.animation.startDuration         || 0;
                                chart.startAlpha =          options.animation.startAlpha            || 1;
                                chart.sequencedAnimation =  options.animation.sequencedAnimation   !== false;
                            }
                        }
                    }
                    function configureCategoryAxis(options) {
                        var categoryAxis = options.categoryAxis;

                        if (categoryAxis) {
                            if (categoryAxis.parseDates)
                                scope.chart.categoryAxis.parseDates = categoryAxis.parseDates;
                            if (categoryAxis.minPeriod)
                                scope.chart.categoryAxis.minPeriod = categoryAxis.minPeriod;
                            if (categoryAxis.position)
                                scope.chart.categoryAxis.position = categoryAxis.position;

                        }
                    }
                },
                post: function (scope, elem, attrs, ctrl) {

                    var options = scope.options || {};
                    var valueAxes = scope.valueAxes || {};

                    if (angular.isUndefined(options.id))
                        throw new Error('A unique ID is required for every chart');

                    configureTemplate(elem, options);
                    configureValueAxes(valueAxes, scope.chart);

                    scope.chart.dataProvider = scope.data;

                    $timeout(function () {
                        scope.chart.write(scope.options.id);
                    });

                    function configureValueAxes(valueAxes, chart) {
                        if (valueAxes) {
                            for (var i = 0; i < valueAxes.length; i++) {
                                var axis = valueAxes[i];
                                var valueAxis = new AmCharts.ValueAxis();

                                if (axis.id)
                                    valueAxis.id = axis.id;
                                if (axis.minimum)
                                    valueAxis.minimum = axis.minimum;
                                if (axis.maximum)
                                    valueAxis.maximum = axis.maximum;
                                if (axis.position)
                                    valueAxis.position = axis.position;

                                chart.addValueAxis(valueAxis);
                            }
                        }
                    }
                    function configureTemplate(elem, options) {
                        var template = angular.element(elem.children()[0]);
                        template.attr('id', options.id);
                        template.css(options.css);

                        return template;
                    }
                }
            }
        }
    }])
    .directive('amChartGraph', [function() {
        return {
            restrict: "E",
            require: "^amChart",
            //replace: true,
            scope: {
                options: '='
            },
            link: function(scope, element, attrs, amChartController) {
                var options = scope.options || {};

                var graph = configGraph();
                amChartController.addGraph(graph);

                function configGraph() {
                    var graph = new AmCharts.AmGraph();

                    graph.valueField = options.value;
                    graph.type = options.type || 'line';

                    if (options.valueAxis)
                        graph.valueAxis = options.valueAxis;
                    if (options.lineColor)
                        graph.lineColor = options.lineColor;
                    if (options.title)
                        graph.title = options.title;

                    return graph;
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
                var options = scope.options || {};

                var legend = configLegend();
                amChartController.setLegend(legend);

                function configLegend() {
                    var legend = new AmCharts.AmLegend();

                    configLabel();
                    configMargins();
                    configMarker();
                    configPosition();
                    configValueText();

                    function configLabel() {
                        if (options.labelText) {
                            legend.labelText = options.labelText;
                        }
                    }
                    function configMargins() {
                        if (options.margin && options.margin.autoMargins === false) {
                            legend.autoMargins = false;
                            legend.marginTop = options.margin.top || 0;
                            legend.marginRight = options.margin.right || 20;
                            legend.marginLeft = options.margin.left || 20;
                            legend.marginBottom = options.margin.bottom || 0;
                        }
                    }
                    function configMarker() {
                        if (options.marker) {
                            legend.markerType = options.marker.type || 'square';
                            legend.markerSize = options.marker.size || 16;
                        }
                    }
                    function configPosition() {
                        if (options.position) {

                            legend.position = options.position.type;
                            if (options.position.type === 'absolute') {
                                if (angular.isDefined(options.position.top)) {
                                    legend.top = options.position.top;
                                }
                                if (angular.isDefined(options.position.left)) {
                                    legend.left = options.position.left;
                                }
                                if (angular.isDefined(options.position.right)) {
                                    legend.right = options.position.right;
                                }
                                if (angular.isDefined(options.position.bottom)) {
                                    legend.bottom = options.position.bottom;
                                }
                            }
                        }
                    }
                    function configValueText() {
                        if (options.valueText) {
                            legend.valueText = options.valueText;
                        }
                    }

                    return legend;
                }
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

                configCursor();


                scope.$watch('options', function () {
                    configCursor();
                }, true);

                function configCursor() {
                    var options = scope.options || {};

                    cursor.chartPosition = options.position || 'middle';
                    cursor.valueLineEnabled = options.valueLineEnabled || false;
                    cursor.valueLineBalloonEnabled = options.valueLineBalloonEnabled || false;
                    cursor.valueLineAxis = options.valueLineAxis || false;
                    cursor.fullWidth = options.fullWidth || false;
                    cursor.cursorColor = options.color || '#000000';
                    cursor.cursorAlpha = options.alpha || 1;
                    cursor.bulletsEnabled = options.bulletsEnabled || false;
                    cursor.bulletSize = options.bulletSize || 8;

                    amChartController.setCursor(cursor);
                    amChartController.refreshAttrs();
                    amChartController.logChart();
                }
            }
        }
    }]);
