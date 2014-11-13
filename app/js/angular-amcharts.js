angular.module('sljuxAmCharts')
.directive('amChart', function ($timeout) {
    return {
        scope: {
            options: '=',
            data: '='
        },
        restrict: 'E',
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
        template: '<div class="sljux-amchart"></div>',
        link: function (scope, elem, attrs, ctrl) {

            var template = angular.element(elem.children()[0]);

            template.attr('id', scope.options.id);
            template.css({
                width: scope.options.width,
                height: scope.options.height
            });

            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = scope.data;
            chart.categoryField = "country";

            var graph = new AmCharts.AmGraph();
            graph.valueField = "visits";
            graph.type = "column";
            chart.addGraph(graph);

            scope.chart = chart;

            $timeout(function () {
                chart.write(scope.options.id);
            });
        }
    };
})
.directive('amGraph', function () {

});