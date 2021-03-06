'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_THEME = exports.DEFAULT_THEME = {
  categoryAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false }
  },
  valueAxis: {
    axisLine: { show: false }
  },
  line: {
    smooth: true
  },
  grid: {
    containLabel: true,
    left: 10,
    right: 10
  }
};

var DEFAULT_COLORS = exports.DEFAULT_COLORS = ['#19d4ae', '#5ab1ef', '#fa6e86', '#ffb980', '#0067a6', '#c4b4e4', '#d87a80', '#9cbbff', '#d9d0c7', '#87a997', '#d49ea2', '#5b4947', '#7ba3a8'];

var HEAT_MAP_COLOR = exports.HEAT_MAP_COLOR = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];

var HEAT_BMAP_COLOR = exports.HEAT_BMAP_COLOR = ['blue', 'blue', 'green', 'yellow', 'red'];

var itemPoint = exports.itemPoint = function itemPoint(color) {
  return ['<span style="', 'background-color:' + color + ';', 'display: inline-block;', 'width: 10px;', 'height: 10px;', 'border-radius: 50%;', 'margin-right:2px;', '"></span>'].join('');
};

var STATIC_PROPS = exports.STATIC_PROPS = ['initOptions', 'loading', 'dataEmpty', 'judgeWidth', 'widthChangeDelay'];

var ECHARTS_SETTINGS = exports.ECHARTS_SETTINGS = ['grid', 'dataZoom', 'visualMap', 'toolbox', 'title', 'legend', 'xAxis', 'yAxis', 'radar', 'tooltip', 'axisPointer', 'brush', 'geo', 'timeline', 'graphic', 'series', 'backgroundColor', 'textStyle'];
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DEFAULT_THEME, 'DEFAULT_THEME', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(DEFAULT_COLORS, 'DEFAULT_COLORS', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(HEAT_MAP_COLOR, 'HEAT_MAP_COLOR', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(HEAT_BMAP_COLOR, 'HEAT_BMAP_COLOR', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(itemPoint, 'itemPoint', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(STATIC_PROPS, 'STATIC_PROPS', 'src/packages/constants.js');

  __REACT_HOT_LOADER__.register(ECHARTS_SETTINGS, 'ECHARTS_SETTINGS', 'src/packages/constants.js');
}();

;