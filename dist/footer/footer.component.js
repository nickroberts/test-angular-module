(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "angular", "./footer.controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var angular = require("angular");
    var footer_controller_1 = require("./footer.controller");
    var FooterComponent = (function () {
        function FooterComponent() {
            this.controller = footer_controller_1.FooterController;
            this.template = "\n      <footer>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              Footer\n            </div>\n          </div>\n        </div>\n      </footer>";
            console.debug('FooterComponent loaded...');
        }
        return FooterComponent;
    }());
    exports.testAngularFooterModule = angular
        .module('testAngularModule')
        .component('tamFooter', new FooterComponent());
});
