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

                this.refreshData = function() {
                    $scope.chart.validateData();
                };

                this.refreshAttrs = function () {
                    $scope.chart.validateNow();
                };
            },
            template: '<div class="sljux-amchart" ng-transclude></div>',
            link: {
                pre: function (scope, elem, attrs, ctrl) {
                    var options = scope.options || {};

                    scope.chart = configureChart(options);

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
                },
                post: function (scope, elem, attrs, ctrl) {

                    var options = scope.options || {};
                    var valueAxes = scope.valueAxes || {};

                    if (angular.isUndefined(options.id))
                        throw new Error('A unique ID is required');

                    configureTemplate(elem, options);
                    configureValueAxes(valueAxes, scope.chart);

                    scope.chart.dataProvider = scope.data;

                    /*
                     var graph = new AmCharts.AmGraph();
                     graph.valueField = "";
                     graph.type = "column";
                     graph.valueAxis = 'v1';
                     chart.addGraph(graph);
                     */

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
            replace: true,
            scope: {
                options: '='
            },
            link: function(scope, element, attrs, amChartController) {
                console.log(amChartController);

                var options = scope.options || {};

                var graph = configGraph();
                amChartController.addGraph(graph);

                function configGraph() {
                    var graph = new AmCharts.AmGraph();

                    graph.valueField = options.value;
                    graph.type = options.type || 'line';

                    if (options)
                        graph.valueAxis = options.id;

                    return graph;
                }
            }
        }
    }]);