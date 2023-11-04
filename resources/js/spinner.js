import { Spinner } from "spin.js";

var opts = {
    lines: 8, // The number of lines to draw
    length: 38, // The length of each line
    width: 14, // The line thickness
    radius: 32, // The radius osf the inner circle
    scale: 1, // Scales overall size of the spinner
    corners: 1, // Corner roundness (0..1)
    speed: 0.75, // Rounds per second
    rotate: 0, // The rotation offset
    animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#a00', // CSS color or array of colors
    fadeColor: 'transparent', // CSS color or array of colors
    shadow: '0 0 1px transparent', // Box-shadow for the lines
    className: 'spinner', // The CSS class to assign to the spinner
    position: 'block', // Element positioning
};

var target = document.getElementById('loading-spinner');
var spinner = new Spinner(opts).spin(target);