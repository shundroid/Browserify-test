(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var m = require("./manager");
var b = require("./b");
var a;
(function (a) {
    function init() {
        console.log("1: " + m.data);
        m.data = "hoge";
        b.changeDataValue();
        console.log("4: " + m.data);
    }
    init();
})(a || (a = {}));
module.exports = a;
},{"./b":2,"./manager":3}],2:[function(require,module,exports){
var m = require("./manager");
var b;
(function (b) {
    function changeDataValue() {
        console.log("2: " + m.data);
        m.data = "fuga";
        console.log("3: " + m.data);
    }
    b.changeDataValue = changeDataValue;
})(b || (b = {}));
module.exports = b;
},{"./manager":3}],3:[function(require,module,exports){
var manager;
(function (manager) {
})(manager || (manager = {}));
module.exports = manager;
},{}]},{},[1,2,3]);
