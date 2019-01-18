(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('url-parse')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-form', ['exports', 'url-parse'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['ngx-form'] = {}),global.Url));
}(this, (function (exports,Url) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @param {?} parseQuery
     * @return {?}
     */
    function validateUrl(value, parseQuery) {
        /** @type {?} */
        var pattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        /** @type {?} */
        var expr = new RegExp(pattern);
        if (!expr.test(value)) {
            return { invalid: true };
        }
        /** @type {?} */
        var results = ( /** @type {?} */(new Url(value, parseQuery)));
        if (!results.protocol || !results.host) {
            return { invalid: true };
        }
        return results;
    }
    /**
     * Given a valid url, returns the normalized host name.
     * The returned host name does not include www and is lowercase.
     * The returned host includes host number.
     * {} string
     * @param {?} s
     * @param {?=} rm3w
     * @return {?}
     */
    function normalizeHost(s, rm3w) {
        if (rm3w === void 0) {
            rm3w = true;
        }
        // Assume that s is a valid url
        /** @type {?} */
        var results = ( /** @type {?} */(new Url(s)));
        /** @type {?} */
        var h = results.host;
        if (h.startsWith('www')) {
            if (rm3w) {
                h = h.substring(4);
            }
        }
        else {
            if (!rm3w) {
                h = 'www.' + h;
            }
        }
        return h;
    }
    /**
     * @param {?} s
     * @param {?=} keepQuery
     * @param {?=} endWithSlash
     * @return {?}
     */
    function normalizeUrl(s, keepQuery, endWithSlash) {
        // Assume that s is a valid url
        if (keepQuery === void 0) {
            keepQuery = false;
        }
        if (endWithSlash === void 0) {
            endWithSlash = false;
        }
        // Assume that s is a valid url
        /** @type {?} */
        var results = ( /** @type {?} */(new Url(s)));
        /** @type {?} */
        var path = results.pathname;
        path = path.replace(/\/\//g, '/');
        /** @type {?} */
        var u = results.protocol + '//' + results.host + path;
        if (keepQuery) {
            u = u + results.query;
        }
        if (u.endsWith('/')) {
            if (!endWithSlash) {
                u = u.substr(0, u.length - 1);
            }
        }
        else {
            if (endWithSlash) {
                u = u + '/';
            }
        }
        return u;
    }
    // Type predicate 
    /**
     * @param {?} v
     * @return {?}
     */
    function isInvalidSpec(v) {
        return (( /** @type {?} */(v))).invalid !== undefined;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    function buildUrlValidator(options) {
        /** @type {?} */
        var inputs = Object.assign({}, options);
        return function (control) {
            /** @type {?} */
            var value = control.value;
            /** @type {?} */
            var results = validateUrl(value, !!inputs.parseQuery);
            if (isInvalidSpec(results)) {
                return results;
            }
            if (inputs.https && results.protocol !== 'https') {
                return { invalid: true };
            }
            return null;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.validateUrl = validateUrl;
    exports.normalizeHost = normalizeHost;
    exports.normalizeUrl = normalizeUrl;
    exports.buildUrlValidator = buildUrlValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-ngx-form.umd.js.map