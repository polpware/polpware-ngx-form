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
     * @return {?}
     */
    function normalizeHost(s) {
        // Assume that s is a valid url
        /** @type {?} */
        var results = ( /** @type {?} */(new Url(s)));
        /** @type {?} */
        var h = results.host;
        if (h.startsWith('www')) {
            return h.substring(4);
        }
        return h;
    }
    /**
     * @param {?} s
     * @return {?}
     */
    function normalizeUrl(s) {
        // Assume that s is a valid url
        /** @type {?} */
        var results = ( /** @type {?} */(new Url(s)));
        return results.toString();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtbmd4LWZvcm0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9wb2xwd2FyZS1uZ3gtZm9ybS9saWIvdmFsaWRhdG9ycy91cmwtdmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICogYXMgVXJsIGZyb20gJ3VybC1wYXJzZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXJzZVJlc3VsdCB7XHJcbiAgICBwcm90b2NvbDogJ2h0dHAnIHwgJ2h0dHBzJztcclxuICAgIHNsYXNoZXM6IGJvb2xlYW47XHJcbiAgICBhdXRoOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGhvc3Q6IHN0cmluZzsgIC8vIHdpdGggcG9ydCBudW1iZXIgXHJcbiAgICBob3N0bmFtZTogc3RyaW5nOyAvLyB3aXRob3V0IHBvcnQgbnVtYmVyIFxyXG4gICAgcG9ydDogbnVtYmVyOyAvLyBwb3J0IG51bWJlclxyXG4gICAgcGF0aG5hbWU6IHN0cmluZztcclxuICAgIHF1ZXJ5OiBhbnk7XHJcbiAgICBoYXNoOiBzdHJpbmc7IC8vICMgcGFydFxyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgb3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW52YWxpZFNwZWMge1xyXG4gICAgaW52YWxpZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbHVlOiBzdHJpbmcsIHBhcnNlUXVlcnk6IGJvb2xlYW4pOiBJSW52YWxpZFNwZWMgfCBJVXJsUGFyc2VSZXN1bHQge1xyXG5cclxuICAgIGNvbnN0IHBhdHRlcm4gPSAnKGh0dHBzPzovLyk/KFtcXFxcZGEtei4tXSspXFxcXC4oW2Etei5dezIsNn0pWy9cXFxcdyAuLV0qLz8nO1xyXG4gICAgY29uc3QgZXhwciA9IG5ldyBSZWdFeHAocGF0dGVybik7XHJcbiAgICBpZiAoIWV4cHIudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwodmFsdWUsIHBhcnNlUXVlcnkpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuXHJcbiAgICBpZiAoIXJlc3VsdHMucHJvdG9jb2wgfHwgIXJlc3VsdHMuaG9zdCkge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEdpdmVuIGEgdmFsaWQgdXJsLCByZXR1cm5zIHRoZSBub3JtYWxpemVkIGhvc3QgbmFtZS4gXHJcbiogVGhlIHJldHVybmVkIGhvc3QgbmFtZSBkb2VzIG5vdCBpbmNsdWRlIHd3dyBhbmQgaXMgbG93ZXJjYXNlLlxyXG4qIFRoZSByZXR1cm5lZCBob3N0IGluY2x1ZGVzIGhvc3QgbnVtYmVyLiBcclxuKiB7fSBzdHJpbmdcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUhvc3Qoczogc3RyaW5nKSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCBzIGlzIGEgdmFsaWQgdXJsXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybChzKSBhcyBJVXJsUGFyc2VSZXN1bHQ7XHJcbiAgICBjb25zdCBoID0gcmVzdWx0cy5ob3N0O1xyXG4gICAgaWYgKGguc3RhcnRzV2l0aCgnd3d3JykpIHtcclxuICAgICAgICByZXR1cm4gaC5zdWJzdHJpbmcoNCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVybChzOiBzdHJpbmcpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHMgaXMgYSB2YWxpZCB1cmxcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHMpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuICAgIHJldHVybiByZXN1bHRzLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8vIFR5cGUgcHJlZGljYXRlIFxyXG5mdW5jdGlvbiBpc0ludmFsaWRTcGVjKHY6IElVcmxQYXJzZVJlc3VsdCB8IElJbnZhbGlkU3BlYyk6IHYgaXMgSUludmFsaWRTcGVjIHtcclxuICAgIHJldHVybiAoPElJbnZhbGlkU3BlYz52KS5pbnZhbGlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFVybFZhbGlkYXRvcihvcHRpb25zPzoge1xyXG4gICAgaHR0cHM/OiBib29sZWFuO1xyXG4gICAgcGFyc2VRdWVyeT86IGJvb2xlYW47XHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB2YWxpZGF0ZVVybCh2YWx1ZSwgISFpbnB1dHMucGFyc2VRdWVyeSk7XHJcblxyXG4gICAgICAgIGlmIChpc0ludmFsaWRTcGVjKHJlc3VsdHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlucHV0cy5odHRwcyAmJiByZXN1bHRzLnByb3RvY29sICE9PSAnaHR0cHMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBOzs7OztBQXlCQSx5QkFBNEIsS0FBYSxFQUFFLFVBQW1COztZQUVwRCxPQUFPLEdBQUcsdURBQXVEOztZQUNqRSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDNUI7O1lBRUssT0FBTyxzQkFBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQW1CO1FBRTdELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7O0FBU0QsMkJBQThCLENBQVM7OztZQUU3QixPQUFPLHNCQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFtQjs7WUFDdkMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7Ozs7O0FBRUQsMEJBQTZCLENBQVM7OztZQUU1QixPQUFPLHNCQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFtQjtRQUM3QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFHRCx1QkFBdUIsQ0FBaUM7UUFDcEQsT0FBTyxvQkFBZSxDQUFDLElBQUUsT0FBTyxLQUFLLFNBQVMsQ0FBQztJQUNuRCxDQUFDOzs7OztBQUVELCtCQUFrQyxPQUdqQzs7WUFFUyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO1FBRXpDLE9BQU8sVUFBUyxPQUFvQjs7Z0JBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7Z0JBRXJCLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBRXZELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixPQUFPLE9BQU8sQ0FBQzthQUNsQjtZQUVELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUM1QjtZQUVELE9BQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=