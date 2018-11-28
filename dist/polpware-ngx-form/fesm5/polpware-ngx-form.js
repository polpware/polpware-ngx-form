import * as Url from 'url-parse';

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
    var results = (/** @type {?} */ (new Url(value, parseQuery)));
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
    if (rm3w === void 0) { rm3w = true; }
    // Assume that s is a valid url
    /** @type {?} */
    var results = (/** @type {?} */ (new Url(s)));
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
    if (keepQuery === void 0) { keepQuery = false; }
    if (endWithSlash === void 0) { endWithSlash = false; }
    // Assume that s is a valid url
    /** @type {?} */
    var results = (/** @type {?} */ (new Url(s)));
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
    return ((/** @type {?} */ (v))).invalid !== undefined;
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

export { validateUrl, normalizeHost, normalizeUrl, buildUrlValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtbmd4LWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL3BvbHB3YXJlLW5neC1mb3JtL2xpYi92YWxpZGF0b3JzL3VybC12YWxpZGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBVcmwgZnJvbSAndXJsLXBhcnNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhcnNlUmVzdWx0IHtcclxuICAgIHByb3RvY29sOiAnaHR0cCcgfCAnaHR0cHMnO1xyXG4gICAgc2xhc2hlczogYm9vbGVhbjtcclxuICAgIGF1dGg6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgaG9zdDogc3RyaW5nOyAgLy8gd2l0aCBwb3J0IG51bWJlciBcclxuICAgIGhvc3RuYW1lOiBzdHJpbmc7IC8vIHdpdGhvdXQgcG9ydCBudW1iZXIgXHJcbiAgICBwb3J0OiBudW1iZXI7IC8vIHBvcnQgbnVtYmVyXHJcbiAgICBwYXRobmFtZTogc3RyaW5nO1xyXG4gICAgcXVlcnk6IGFueTtcclxuICAgIGhhc2g6IHN0cmluZzsgLy8gIyBwYXJ0XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgICBvcmlnaW46IHN0cmluZztcclxuXHJcbiAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnZhbGlkU3BlYyB7XHJcbiAgICBpbnZhbGlkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsdWU6IHN0cmluZywgcGFyc2VRdWVyeTogYm9vbGVhbik6IElJbnZhbGlkU3BlYyB8IElVcmxQYXJzZVJlc3VsdCB7XHJcblxyXG4gICAgY29uc3QgcGF0dGVybiA9ICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7XHJcbiAgICBjb25zdCBleHByID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcclxuICAgIGlmICghZXhwci50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybCh2YWx1ZSwgcGFyc2VRdWVyeSkgYXMgSVVybFBhcnNlUmVzdWx0O1xyXG5cclxuICAgIGlmICghcmVzdWx0cy5wcm90b2NvbCB8fCAhcmVzdWx0cy5ob3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiogR2l2ZW4gYSB2YWxpZCB1cmwsIHJldHVybnMgdGhlIG5vcm1hbGl6ZWQgaG9zdCBuYW1lLiBcclxuKiBUaGUgcmV0dXJuZWQgaG9zdCBuYW1lIGRvZXMgbm90IGluY2x1ZGUgd3d3IGFuZCBpcyBsb3dlcmNhc2UuXHJcbiogVGhlIHJldHVybmVkIGhvc3QgaW5jbHVkZXMgaG9zdCBudW1iZXIuIFxyXG4qIHt9IHN0cmluZ1xyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSG9zdChzOiBzdHJpbmcsIHJtM3c6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCBzIGlzIGEgdmFsaWQgdXJsXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybChzKSBhcyBJVXJsUGFyc2VSZXN1bHQ7XHJcbiAgICBsZXQgaCA9IHJlc3VsdHMuaG9zdDtcclxuICAgIGlmIChoLnN0YXJ0c1dpdGgoJ3d3dycpKSB7XHJcbiAgICAgICAgaWYgKHJtM3cpIHtcclxuICAgICAgICAgICAgaCA9IGguc3Vic3RyaW5nKDQpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFybTN3KSB7XHJcbiAgICAgICAgICAgIGggPSAnd3d3LicgKyBoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVybChzOiBzdHJpbmcsIGtlZXBRdWVyeTogYm9vbGVhbiA9IGZhbHNlLCBlbmRXaXRoU2xhc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgcyBpcyBhIHZhbGlkIHVybFxyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHMpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuICAgIGxldCBwYXRoID0gcmVzdWx0cy5wYXRobmFtZTtcclxuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycsICk7XHJcbiAgICBsZXQgdSA9IHJlc3VsdHMucHJvdG9jb2wgKyAnLy8nICsgcmVzdWx0cy5ob3N0ICsgcGF0aDtcclxuICAgIGlmIChrZWVwUXVlcnkpIHtcclxuICAgICAgICB1ID0gdSArIHJlc3VsdHMucXVlcnk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHUuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICAgIGlmICghZW5kV2l0aFNsYXNoKSB7XHJcbiAgICAgICAgICAgIHUgPSB1LnN1YnN0cigwLCB1Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGVuZFdpdGhTbGFzaCkge1xyXG4gICAgICAgICAgICB1ID0gdSArICcvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHU7XHJcbn1cclxuXHJcbi8vIFR5cGUgcHJlZGljYXRlIFxyXG5mdW5jdGlvbiBpc0ludmFsaWRTcGVjKHY6IElVcmxQYXJzZVJlc3VsdCB8IElJbnZhbGlkU3BlYyk6IHYgaXMgSUludmFsaWRTcGVjIHtcclxuICAgIHJldHVybiAoPElJbnZhbGlkU3BlYz52KS5pbnZhbGlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFVybFZhbGlkYXRvcihvcHRpb25zPzoge1xyXG4gICAgaHR0cHM/OiBib29sZWFuO1xyXG4gICAgcGFyc2VRdWVyeT86IGJvb2xlYW47XHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB2YWxpZGF0ZVVybCh2YWx1ZSwgISFpbnB1dHMucGFyc2VRdWVyeSk7XHJcblxyXG4gICAgICAgIGlmIChpc0ludmFsaWRTcGVjKHJlc3VsdHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlucHV0cy5odHRwcyAmJiByZXN1bHRzLnByb3RvY29sICE9PSAnaHR0cHMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7Ozs7O0FBeUJBLHFCQUE0QixLQUFhLEVBQUUsVUFBbUI7O1FBRXBELE9BQU8sR0FBRyx1REFBdUQ7O1FBQ2pFLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUM1Qjs7UUFFSyxPQUFPLHNCQUFHLElB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