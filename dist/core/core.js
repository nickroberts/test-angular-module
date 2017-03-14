(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "angular"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var angular = require("angular");
    exports.testAngularModule = angular
        .module('testAngularModule', [
        'testAngularModule.header',
        'testAngularModule.footer',
    ])
        .name;
});
