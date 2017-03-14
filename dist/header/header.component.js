(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "angular", "./header.controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var angular = require("angular");
    var header_controller_1 = require("./header.controller");
    var HeaderComponent = (function () {
        function HeaderComponent() {
            this.controller = header_controller_1.HeaderController;
            this.template = "\n      <header>\n        <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col\">\n                Header\n              </div>\n            </div>\n          </div>\n      </header>";
            console.debug('HeaderComponent loaded...');
        }
        return HeaderComponent;
    }());
    exports.testAngularHeaderModule = angular
        .module('testAngularModule')
        .component('tamHeader', new HeaderComponent());
});
