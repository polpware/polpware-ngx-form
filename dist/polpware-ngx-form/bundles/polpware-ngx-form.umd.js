(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('url-parse')) :
    typeof define === 'function' && define.amd ? define('polpware-ngx-form', ['exports', 'url-parse'], factory) :
    (factory((global['polpware-ngx-form'] = {}),global.Url));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtbmd4LWZvcm0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wb2xwd2FyZS1uZ3gtZm9ybS9saWIvdmFsaWRhdG9ycy91cmwtdmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICogYXMgVXJsIGZyb20gJ3VybC1wYXJzZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXJzZVJlc3VsdCB7XHJcbiAgICBwcm90b2NvbDogJ2h0dHAnIHwgJ2h0dHBzJztcclxuICAgIHNsYXNoZXM6IGJvb2xlYW47XHJcbiAgICBhdXRoOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGhvc3Q6IHN0cmluZzsgIC8vIHdpdGggcG9ydCBudW1iZXIgXHJcbiAgICBob3N0bmFtZTogc3RyaW5nOyAvLyB3aXRob3V0IHBvcnQgbnVtYmVyIFxyXG4gICAgcG9ydDogbnVtYmVyOyAvLyBwb3J0IG51bWJlclxyXG4gICAgcGF0aG5hbWU6IHN0cmluZztcclxuICAgIHF1ZXJ5OiBhbnk7XHJcbiAgICBoYXNoOiBzdHJpbmc7IC8vICMgcGFydFxyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgb3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW52YWxpZFNwZWMge1xyXG4gICAgaW52YWxpZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbHVlOiBzdHJpbmcsIHBhcnNlUXVlcnk6IGJvb2xlYW4pOiBJSW52YWxpZFNwZWMgfCBJVXJsUGFyc2VSZXN1bHQge1xyXG5cclxuICAgIGNvbnN0IHBhdHRlcm4gPSAnKGh0dHBzPzovLyk/KFtcXFxcZGEtei4tXSspXFxcXC4oW2Etei5dezIsNn0pWy9cXFxcdyAuLV0qLz8nO1xyXG4gICAgY29uc3QgZXhwciA9IG5ldyBSZWdFeHAocGF0dGVybik7XHJcbiAgICBpZiAoIWV4cHIudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwodmFsdWUsIHBhcnNlUXVlcnkpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuXHJcbiAgICBpZiAoIXJlc3VsdHMucHJvdG9jb2wgfHwgIXJlc3VsdHMuaG9zdCkge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEdpdmVuIGEgdmFsaWQgdXJsLCByZXR1cm5zIHRoZSBub3JtYWxpemVkIGhvc3QgbmFtZS4gXHJcbiogVGhlIHJldHVybmVkIGhvc3QgbmFtZSBkb2VzIG5vdCBpbmNsdWRlIHd3dyBhbmQgaXMgbG93ZXJjYXNlLlxyXG4qIFRoZSByZXR1cm5lZCBob3N0IGluY2x1ZGVzIGhvc3QgbnVtYmVyLiBcclxuKiB7fSBzdHJpbmdcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUhvc3Qoczogc3RyaW5nLCBybTN3OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgcyBpcyBhIHZhbGlkIHVybFxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwocykgYXMgSVVybFBhcnNlUmVzdWx0O1xyXG4gICAgbGV0IGggPSByZXN1bHRzLmhvc3Q7XHJcbiAgICBpZiAoaC5zdGFydHNXaXRoKCd3d3cnKSkge1xyXG4gICAgICAgIGlmIChybTN3KSB7XHJcbiAgICAgICAgICAgIGggPSBoLnN1YnN0cmluZyg0KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghcm0zdykge1xyXG4gICAgICAgICAgICBoID0gJ3d3dy4nICsgaDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVcmwoczogc3RyaW5nLCBrZWVwUXVlcnk6IGJvb2xlYW4gPSBmYWxzZSwgZW5kV2l0aFNsYXNoOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHMgaXMgYSB2YWxpZCB1cmxcclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybChzKSBhcyBJVXJsUGFyc2VSZXN1bHQ7XHJcbiAgICBsZXQgcGF0aCA9IHJlc3VsdHMucGF0aG5hbWU7XHJcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nLCApO1xyXG4gICAgbGV0IHUgPSByZXN1bHRzLnByb3RvY29sICsgJy8vJyArIHJlc3VsdHMuaG9zdCArIHBhdGg7XHJcbiAgICBpZiAoa2VlcFF1ZXJ5KSB7XHJcbiAgICAgICAgdSA9IHUgKyByZXN1bHRzLnF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1LmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgICBpZiAoIWVuZFdpdGhTbGFzaCkge1xyXG4gICAgICAgICAgICB1ID0gdS5zdWJzdHIoMCwgdS5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChlbmRXaXRoU2xhc2gpIHtcclxuICAgICAgICAgICAgdSA9IHUgKyAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1O1xyXG59XHJcblxyXG4vLyBUeXBlIHByZWRpY2F0ZSBcclxuZnVuY3Rpb24gaXNJbnZhbGlkU3BlYyh2OiBJVXJsUGFyc2VSZXN1bHQgfCBJSW52YWxpZFNwZWMpOiB2IGlzIElJbnZhbGlkU3BlYyB7XHJcbiAgICByZXR1cm4gKDxJSW52YWxpZFNwZWM+dikuaW52YWxpZCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRVcmxWYWxpZGF0b3Iob3B0aW9ucz86IHtcclxuICAgIGh0dHBzPzogYm9vbGVhbjtcclxuICAgIHBhcnNlUXVlcnk/OiBib29sZWFuO1xyXG59KSB7XHJcblxyXG4gICAgY29uc3QgaW5wdXRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRzID0gdmFsaWRhdGVVcmwodmFsdWUsICEhaW5wdXRzLnBhcnNlUXVlcnkpO1xyXG5cclxuICAgICAgICBpZiAoaXNJbnZhbGlkU3BlYyhyZXN1bHRzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnB1dHMuaHR0cHMgJiYgcmVzdWx0cy5wcm90b2NvbCAhPT0gJ2h0dHBzJykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUF5QkEseUJBQTRCLEtBQWEsRUFBRSxVQUFtQjs7WUFFcEQsT0FBTyxHQUFHLHVEQUF1RDs7WUFDakUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzVCOztZQUVLLE9BQU8s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