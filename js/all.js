(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var b = require("./b");
var a;
(function (a) {
    a.fugafugafuga = "fuga";
    function init() {
        console.log("hello, this is A! b.hogehogehoge = " + b.hogehogehoge);
    }
    a.init = init;
    init();
})(a || (a = {}));
module.exports = a;
},{"./b":2}],2:[function(require,module,exports){
var a = require("./a");
var b;
(function (b) {
    b.hogehogehoge = "hoge";
    function init() {
        console.log("Aloha! I'm B! a.fugafugafuga = " + a.fugafugafuga);
        console.log(a);
    }
    b.init = init;
    init();
})(b || (b = {}));
module.exports = b;
},{"./a":1}],3:[function(require,module,exports){

},{}]},{},[1,2,3]);
